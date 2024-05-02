import React, { memo, useEffect, useState } from "react";
import Story from "../../../entities/story";
import { hackernewsApi, useGetTopStoriesQuery } from "../../../shared/api/news";
import { CardGrid, Group, Header } from "@vkontakte/vkui";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
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
// need to update Story only if props change, StoryList updates due to Story component
// this causes rerender loop, so memo is used to prevent this
// TODO fix this issue via proper data fetching
const MemoizedStory = memo(Story);

const StoryList = () => {
  const { data, error, isLoading } = useGetTopStoriesQuery();
  const [stories, setStories] = useState<number[]>([]);
  useEffect(() => {
    if (!data) return;
    setStories(data?.slice(0, 5) || []);
  }, [data]);

  const fetchedDetails = useSelector((state: RootState) => state.stories);
  // useEffect(() => {
  //   if (!data) return;
  //   setStories(data || []);
  // }, [data]);

  useEffect(() => {
    if (!data) return;
    const sorted =
      fetchedDetails
        .slice(0, 5)
        .sort((a, b) => b.time - a.time)
        .map((detail) => detail.id) || [];
    console.log("🚀 ~ useEffect ~ sorted:", sorted);
    setStories(sorted);
  }, [data, fetchedDetails]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <Group header={<Header mode="secondary">New Stories</Header>}>
      <CardGrid size="l">
        {stories?.map((id) => (
          <MemoizedStory key={id} id={id} />
        ))}
      </CardGrid>
    </Group>
  );
};

export default StoryList;
