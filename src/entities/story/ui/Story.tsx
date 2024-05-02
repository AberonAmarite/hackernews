import { ContentCard } from "@vkontakte/vkui";
import { getHoursAgo } from "../../../shared/utils/lib/date";
import { useGetStoryItemByIdQuery } from "../../../shared/api/news";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { routes } from "../../../shared/routes/routes";
import StoryDetails from "./StoryDetails";
import { useEffect } from "react";
import { addStoryDetails } from "../model/storySlice";
import { useDispatch } from "react-redux";

interface StoryProps {
  id: number;
}

const Story = ({ id }: StoryProps) => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetStoryItemByIdQuery(id);
  const routeNavigator = useRouteNavigator();
  useEffect(() => {
    if (!isLoading && !error && data) {
      dispatch(addStoryDetails(data));
    }
  }),
    [data, error, isLoading];
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>No data</div>;
  const { title } = data;

  //   return  <ContentCard
  //   onClick={() => {}}
  //   src="https://images.unsplash.com/photo-1603988492906-4fb0fb251cf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80"
  //   alt="Picture of brown and gray mountains under blue sky during daytime photo"
  //   subtitle="unsplash"
  //   header="brown and gray mountains under blue sky during daytime photo"
  //   text={title}
  //   caption="Photo by Siyuan on Unsplash"
  //   maxHeight={150}
  // />;
  return (
    <ContentCard
      onClick={() => {
        routeNavigator.push(routes.default_root.default_view.story, {
          id: String(id),
        });
      }}
      header={title}
      caption={<StoryDetails data={data} />}
      maxHeight={150}
    >
      {/* <Title level="3">{by}</Title> */}
    </ContentCard>
  );
};

export default Story;
