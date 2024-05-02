import vkBridge, {
  parseURLSearchParamsForGetLaunchParams,
} from "@vkontakte/vk-bridge";
import {
  useAdaptivity,
  useAppearance,
  useInsets,
} from "@vkontakte/vk-bridge-react";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";
import { RouterProvider } from "@vkontakte/vk-mini-apps-router";
import "@vkontakte/vkui/dist/vkui.css";

import { transformVKBridgeAdaptivity } from "../shared/utils";
import { router } from "../shared/routes/routes";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store";
import { StrictMode } from "react";

export const AppConfig = () => {
  const vkBridgeAppearance = useAppearance() || undefined;
  const vkBridgeInsets = useInsets() || undefined;
  const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
  const { vk_platform } = parseURLSearchParamsForGetLaunchParams(
    window.location.search
  );

  return (
    <StrictMode>
      <ConfigProvider
        appearance={vkBridgeAppearance}
        platform={vk_platform === "desktop_web" ? "vkcom" : undefined}
        isWebView={vkBridge.isWebView()}
        hasCustomPanelHeaderAfter={true}
      >
        <AdaptivityProvider {...adaptivity}>
          <AppRoot mode="full" safeAreaInsets={vkBridgeInsets}>
            <RouterProvider router={router}>
              <Provider store={store}>
                <App />
              </Provider>
            </RouterProvider>
          </AppRoot>
        </AdaptivityProvider>
      </ConfigProvider>
    </StrictMode>
  );
};
