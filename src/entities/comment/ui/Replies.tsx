import styles from "./Comment.module.css";
import Comment from "./Comment";
interface RepliesProps {
  replyIds: number[];
}

// function getAllReplies(replyIds: number[]) {
//     let ReplyElements = [];
//     let currentIds = replyIds;
//     let currentComment
//     while (currentIds.length > 0) {
//         currentComment = currentIds.pop();
//         ReplyElements.push(<Comment commentId={currentComment} key={currentComment} className={styles.commentReply} />)
//     }

const Replies = ({ replyIds }: RepliesProps) => {
  return replyIds?.map((comment) => (
    <Comment
      commentId={comment}
      key={comment}
      className={styles.commentReply}
    />
  ));
};

export default Replies;
