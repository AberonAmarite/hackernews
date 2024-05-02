import React from "react";
import Comment from "./Comment";

const RootComment = ({ commentId }) => {
  return <Comment commentId={commentId} first />;
};

export default RootComment;
