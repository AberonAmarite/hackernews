import React, { memo, useEffect, useState } from "react";
import Story from "../../../entities/story";
import { hackernewsApi, useGetTopStoriesQuery } from "../../../shared/api/news";
import {
  CardGrid,
  Div,
  Group,
  Header,
  IconButton,
  SplitLayout,
} from "@vkontakte/vkui";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { Icon24Refresh } from "@vkontakte/icons";

// need to update Story only if props change, StoryList updates due to Story component
// this causes rerender loop, so memo is used to prevent this
// TODO fix this issue via proper data fetching
const MemoizedStory = memo(Story);

const storiesPerPage = 100;

const StoryList = () => {
  const { data, error, isLoading, refetch } = useGetTopStoriesQuery(undefined, {
    // every minute we update
    pollingInterval: 60_000,
    skipPollingIfUnfocused: true,
  });
  const [stories, setStories] = useState<number[]>(
    data?.slice(0, storiesPerPage) || []
  );
  console.log("🚀 ~ StoryList ~ stories:", stories);
  useEffect(() => {
    if (!data) return;

    setStories(data?.slice(0, storiesPerPage) || []);
  }, [data]);

  const fetchedDetails = useSelector((state: RootState) => state.stories);
  // useEffect(() => {
  //   if (!data) return;
  //   setStories(data || []);
  // }, [data]);

  useEffect(() => {
    if (!data || !fetchedDetails) return;
    const sorted =
      fetchedDetails
        .slice(0, storiesPerPage)
        .sort((a, b) => b.time - a.time)
        .map((detail) => detail.id) || [];
    console.log("🚀 ~ useEffect ~ sorted:", sorted);
    setStories(sorted);
  }, [data, fetchedDetails]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <Group
      header={
        <SplitLayout>
          <Header mode="secondary">New Stories</Header>
          <IconButton
            title="Refresh News"
            style={{ cursor: "pointer" }}
            onClick={refetch}
          >
            <Icon24Refresh />
          </IconButton>
        </SplitLayout>
      }
    >
      <CardGrid size="l">
        {stories?.map((id) => (
          <MemoizedStory key={id} id={id} />
        ))}
      </CardGrid>
    </Group>
  );
};

export default StoryList;
