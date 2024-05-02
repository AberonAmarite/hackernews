import { useParams } from "@vkontakte/vk-mini-apps-router";
import { Group, Panel, Title } from "@vkontakte/vkui";
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
  const { data, error, isLoading, refetch } = useGetStoryItemByIdQuery(storyId);
  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error</div>;
  const { title, kids } = data;
  return (
    <Panel nav={nav}>
      <Header />
      <Group header={<Title level="1">{title}</Title>}>
        <StoryDetails data={data} />
      </Group>
      <CommentSection comments={kids} refetch={refetch} />
    </Panel>
  );
};

export default StoryPage;
