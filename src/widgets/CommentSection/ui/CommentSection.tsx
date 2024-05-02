import {
  Accordion,
  Group,
  Spacing,
  SplitCol,
  SplitLayout,
} from "@vkontakte/vkui";
import Comment from "../../../entities/comment";
import RootComment from "../../../entities/comment/ui/RootComment";
interface CommentSectionProps {
  comments: number[];
}

const CommentSection = ({ comments }: CommentSectionProps) => {
  return (
    <Group header="Comments">
      <SplitLayout>
        <SplitCol>
          {comments.slice(0, 1).map((comment) => (
            <RootComment commentId={comment} key={comment} />
          ))}
        </SplitCol>
      </SplitLayout>
    </Group>
  );
};

export default CommentSection;
