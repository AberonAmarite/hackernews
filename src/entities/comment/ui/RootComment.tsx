import Comment from "./Comment";

interface RootCommentProps {
  commentId: number;
}
const RootComment = ({ commentId }: RootCommentProps) => {
  return <Comment commentId={commentId} first />;
};

export default RootComment;
