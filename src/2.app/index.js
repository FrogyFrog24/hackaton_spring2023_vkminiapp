import { ChooseUniversityPage } from '3.pages/ChooseUniversityPage';
import { ScheduleChoosePage } from '3.pages/ScheduleChoosePage';
import { PanelTypes, ViewTypes } from '6.entities/structure';
import { AdaptivityProvider, AppRoot, ConfigProvider, Panel, platform, Root, View } from '@vkontakte/vkui';
import { useState } from 'react';
import { useRouterSelector, useRouterActions } from 'react-router-vkminiapps';

const App = () => {
  const { activeView, activePanel } = useRouterSelector();
  const { toView, toPanel, toBack } = useRouterActions();
  const [appearance, setAppereance] = useState("dark")
  const [platform, setPlatform] = useState("android")

  return (
    <ConfigProvider platform={platform} appearance={appearance} isWebView={true}>
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