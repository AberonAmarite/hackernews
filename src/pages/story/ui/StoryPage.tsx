import { useParams } from "@vkontakte/vk-mini-apps-router";
import { Group, Panel, PanelHeader, SplitLayout, Title } from "@vkontakte/vkui";
import React from "react";
import StoryList from "../../../widgets/StoryList";
import { Icon12Home } from "@vkontakte/icons";
import Header from "../../../widgets/header";
import { StoryDetails } from "../../../entities/story";
import { useGetStoryItemByIdQuery } from "../../../shared/api/news";
import CommentSection from "../../../widgets/CommentSection";

interface StoryPageProps {
  nav: string;
}

const StoryPage = ({ nav }: StoryPageProps) => {
  const params = useParams();
  console.log("🚀 ~ StoryPage ~ params:", params);
  const storyId = Number(params?.id);
  const { data, error, isLoading } = useGetStoryItemByIdQuery(storyId);
  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error</div>;
  const { title, kids } = data;
  return (
    <Panel nav={nav}>
      <Header />
      <Group header={<Title level="1">{title}</Title>}>
        <StoryDetails data={data} />
      </Group>
      <CommentSection comments={kids} />
    </Panel>
  );
};

export default StoryPage;
