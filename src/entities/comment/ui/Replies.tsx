import { Icon24AddOutline, Icon24MinusOutline } from "@vkontakte/icons";
import { Accordion } from "@vkontakte/vkui";
import styles from "./Comment.module.css";
import { useEffect, useState } from "react";
import Comment from "./Comment";
interface RepliesProps {
  replyIds: number[];
  first: boolean;
}

// function getAllReplies(replyIds: number[]) {
//     let ReplyElements = [];
//     let currentIds = replyIds;
//     let currentComment
//     while (currentIds.length > 0) {
//         currentComment = currentIds.pop();
//         ReplyElements.push(<Comment commentId={currentComment} key={currentComment} className={styles.commentReply} />)
//     }

const Replies = ({ replyIds, first, setRepliesRendered }: RepliesProps) => {
  useEffect(() => {
    setRepliesRendered(true);
  });
  return replyIds?.map((comment) => (
    <Comment
      commentId={comment}
      key={comment}
      className={styles.commentReply}
    />
  ));
};

export default Replies;
