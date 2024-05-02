import { View, SplitLayout, SplitCol, Root } from "@vkontakte/vkui";
import { useActiveVkuiLocation } from "@vkontakte/vk-mini-apps-router";

import { Home } from "../pages";
import {
  DEFAULT_ROOT,
  DEFAULT_VIEW,
  DEFAULT_VIEW_PANELS,
} from "../shared/routes/routes";
import StoryPage from "../pages/story/ui/StoryPage";

export const App = () => {
  const {
    view: activeView = DEFAULT_VIEW,
    panel: activePanel = DEFAULT_VIEW_PANELS.HOME,
  } = useActiveVkuiLocation();
  // const [fetchedUser, setUser] = useState<UserInfo | undefined>();
  // const [popout, setPopout] = useState<ReactNode | null>(
  //   <ScreenSpinner size="large" />
  // );

  // useEffect(() => {
  //   async function fetchData() {
  //     const user = await bridge.send("VKWebAppGetUserInfo");
  //     setUser(user);
  //     setPopout(null);
  //   }
  //   fetchData();
  // }, []);

  return (
    <SplitLayout>
      <SplitCol>
        <Root activeView={activeView} nav={DEFAULT_ROOT}>
          <View activePanel={activePanel} nav={DEFAULT_VIEW}>
            <Home nav={DEFAULT_VIEW_PANELS.HOME} />
            <StoryPage nav={DEFAULT_VIEW_PANELS.STORY} />
          </View>
        </Root>
      </SplitCol>
    </SplitLayout>
  );
};
