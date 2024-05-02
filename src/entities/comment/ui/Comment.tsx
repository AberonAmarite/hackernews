import {
  Accordion,
  Button,
  Card,
  Div,
  Paragraph,
  SimpleCell,
  Spacing,
  Spinner,
  SplitCol,
  SplitLayout,
  Text,
} from "@vkontakte/vkui";
import { useGetCommentByIdQuery } from "../../../shared/api/news";
import DangerousHTML from "../../../shared/ui/DangerousHTML/DangerousHTML";
import {
  Icon12Clock,
  Icon12Message,
  Icon12User,
  Icon24AddOutline,
  Icon24MinusOutline,
} from "@vkontakte/icons";
import { getTimeAgo } from "../../../shared/utils/lib/date";
import styles from "./Comment.module.css";
import { cn } from "../../../shared/utils/lib/class";
import { Suspense, lazy, useEffect, useState } from "react";
interface CommentProps {
  commentId: number;
  className?: string;
  first?: boolean;
}
const Replies = lazy(() => import("./Replies.tsx"));

const Comment = ({ commentId, className, first = false }: CommentProps) => {
  const { data, error, isLoading } = useGetCommentByIdQuery(commentId);
  const [expanded, setExpanded] = useState(!first);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error || !data) return <div>Error</div>;
  const { text, by, time, kids } = data;
  const timeAgo = getTimeAgo(time);

  return (
    <Card className={cn(className, styles.comment)} mode="outline">
      <SplitLayout>
        <SplitCol>
          <SplitLayout>
            <SimpleCell before={<Icon12User />}>{by}</SimpleCell>
            <SimpleCell before={<Icon12Clock />}>{timeAgo}</SimpleCell>
            {kids && (
              <SimpleCell before={<Icon12Message />}>
                {kids.length + " replies"}
              </SimpleCell>
            )}
          </SplitLayout>
          <Paragraph>
            <DangerousHTML text={text} />
          </Paragraph>
          {kids && (
            <>
              <Button onClick={() => setExpanded(!expanded)}>
                <Div>{expanded ? "Hide replies" : "Load replies"}</Div>
              </Button>
              {expanded && (
                <Suspense fallback={<Spinner />}>
                  <Replies replyIds={kids} />
                </Suspense>
              )}
            </>
          )}
        </SplitCol>
      </SplitLayout>
    </Card>
  );
};

export default Comment;
