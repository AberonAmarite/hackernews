import React from "react";
import Story from "../../../entities/story";
import { useGetTopStoriesQuery } from "../../../shared/api/news";
import { CardGrid, Group, Header } from "@vkontakte/vkui";
const storyDetails = {
  by: "todsacerdoti",
  descendants: 52,
  id: 40206752,
  kids: [
    40207533, 40208077, 40207124, 40207603, 40208036, 40206950, 40207245,
    40207444, 40207740, 40207412, 40207194, 40207097,
  ],
  score: 236,
  time: 1714445323,
  title: "Why SQLite Uses Bytecode",
  type: "story",
  url: "https://sqlite.org/draft/whybytecode.html",
};
const StoryList = () => {
  const { data, error, isLoading } = useGetTopStoriesQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <Group header={<Header mode="secondary">New Stories</Header>}>
      <CardGrid size="l">
        {data?.slice(0, 5)?.map((id) => (
          <Story key={id} id={id} />
        ))}
      </CardGrid>
    </Group>
  );
};

export default StoryList;
