import { FC, Suspense } from "react";
import {
  Panel,
  PanelHeader,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
  NavIdProps,
} from "@vkontakte/vkui";
import { UserInfo } from "@vkontakte/vk-bridge";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import StoryList from "../../widgets/StoryList";
import Header from "../../widgets/header";

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Home: FC<HomeProps> = ({ nav }) => {
  // const { photo_200, city, first_name, last_name } = { ...fetchedUser };
  const routeNavigator = useRouteNavigator();

  return (
    <Panel nav={nav}>
      <Header />
      {/* {fetchedUser && (
        <Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
          <Cell before={photo_200 && <Avatar src={photo_200} />} subtitle={city?.title}>
            {`${first_name} ${last_name}`}
          </Cell>
        </Group>
      )} */}

      <StoryList />
    </Panel>
  );
};
