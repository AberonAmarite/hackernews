import { Icon24Home } from "@vkontakte/icons";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { IconButton, PanelHeader, SplitLayout, Title } from "@vkontakte/vkui";
import styles from "./Header.module.css";

const Header = () => {
  const routeNavigator = useRouteNavigator();

  return (
    <PanelHeader>
      <SplitLayout>
        <IconButton
          aria-label="Home"
          title="Home"
          onClick={() => routeNavigator.push("/")}
        >
          <Icon24Home />
        </IconButton>
        <Title level="1" className={styles.header__title}>
          Hacker News
        </Title>
      </SplitLayout>
    </PanelHeader>
  );
};

export default Header;
