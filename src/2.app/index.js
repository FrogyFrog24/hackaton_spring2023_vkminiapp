import { ChooseUniversityPage } from '3.pages/ChooseUniversityPage';
import { ScheduleChoosePage } from '3.pages/ScheduleChoosePage';
import { PanelTypes, ViewTypes } from '6.entities/structure';
import { AdaptivityProvider, AppRoot, ConfigProvider, Panel, Root, View } from '@vkontakte/vkui';
import { useEffect, useState } from 'react';
import { useRouterSelector, useRouterActions } from 'react-router-vkminiapps';
import bridge from "@vkontakte/vk-bridge";

const App = () => {
  const { activeView, activePanel } = useRouterSelector();
  const { toView, toPanel, toBack } = useRouterActions();
  const [appearance, setAppereance] = useState()
  const [isLoading, setLoading] = useState(true)

  useEffect(async () => {
    await bridge.send('VKWebAppGetConfigResult')
      .then((data) => {
        if (data) {
          setAppereance(data.appearance)
          setLoading(false)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  bridge.subscribe((e) => {
    if (e.detail.type === 'VKWebAppUpdateConfig') {
      setAppereance(e.detail.data.appearance)
    }
  });

  return (
    <ConfigProvider isWebView={true} appearance={appearance}>
      <AdaptivityProvider>
        <AppRoot>
          <Root activeView={activeView}>
            <View id={ViewTypes.CHOOSE} activePanel={activePanel}>
              <Panel id={PanelTypes.CHOOSE_UNIVERSITY}>
                <ChooseUniversityPage toPanel={toPanel} />
              </Panel>
              <Panel id={PanelTypes.CHOOSE_SCHEDULE_TYPE}>
                <ScheduleChoosePage toPanel={toPanel} toBack={toBack} />
              </Panel>
            </View>
          </Root>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
}

export default App;