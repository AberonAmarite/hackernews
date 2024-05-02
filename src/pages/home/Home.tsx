import { FC } from "react";
import { Panel, NavIdProps } from "@vkontakte/vkui";
import { UserInfo } from "@vkontakte/vk-bridge";
import StoryList from "../../widgets/StoryList";
import Header from "../../widgets/header";

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Home: FC<HomeProps> = ({ nav }) => {
  // const { photo_200, city, first_name, last_name } = { ...fetchedUser };

  return (
    <Panel nav={nav}>
      <Header />

      <StoryList />
    </Panel>
  );
};
