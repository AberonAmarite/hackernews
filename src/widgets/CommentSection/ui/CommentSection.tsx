import {
  Group,
  Header,
  IconButton,
  SplitCol,
  SplitLayout,
} from "@vkontakte/vkui";
import RootComment from "../../../entities/comment/ui/RootComment";
import { Icon24Refresh } from "@vkontakte/icons";
interface CommentSectionProps {
  comments: number[];
  refetch: () => void;
}

const CommentSection = ({ comments, refetch }: CommentSectionProps) => {
  return (
    <Group
      header={
        <SplitLayout>
          <Header mode="secondary">Comments</Header>
          <IconButton
            title="Refresh Comments"
            style={{ cursor: "pointer" }}
            onClick={refetch}
          >
            <Icon24Refresh />
          </IconButton>
        </SplitLayout>
      }
    >
      <SplitLayout>
        <SplitCol>
          {comments.slice(0, 3).map((comment) => (
            <RootComment commentId={comment} key={comment} />
          ))}
        </SplitCol>
      </SplitLayout>
    </Group>
  );
};

export default CommentSection;
