import {
  createBrowserRouter,
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from "@vkontakte/vk-mini-apps-router";

export const DEFAULT_ROOT = "default_root";

export const DEFAULT_VIEW = "default_view";

export const DEFAULT_VIEW_PANELS = {
  HOME: "home",
  STORY: "story",
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, "/", []),

      createPanel(
        DEFAULT_VIEW_PANELS.STORY,
        `${DEFAULT_VIEW_PANELS.STORY}/:id`,
        [],
        ["id"] as const
      ),
    ]),
  ]),
]);

export const router = createBrowserRouter(routes.getRoutes());
