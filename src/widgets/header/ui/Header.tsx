import { Icon12Home } from "@vkontakte/icons";
import { PanelHeader, SplitLayout } from "@vkontakte/vkui";

const Header = () => {
  return (
    <PanelHeader>
      <SplitLayout>
        <Icon12Home />
        Hacker News
      </SplitLayout>
    </PanelHeader>
  );
};

export default Header;
