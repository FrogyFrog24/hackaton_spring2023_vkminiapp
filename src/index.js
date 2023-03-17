import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import { RouterProvider } from 'react-router-vkminiapps';
import structure from "6.entities/structure";

import App from "./2.app";
import "@vkontakte/vkui/dist/vkui.css";

bridge.send("VKWebAppInit").then((data) => {
  if (data.result) {
    ReactDOM.render(
      <RouterProvider structure={structure}>
        <App />
      </RouterProvider>,
      document.getElementById("root")
    );
  }
});