import {
  Accordion,
  Card,
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
import { getHoursAgo } from "../../../shared/utils/lib/date";
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
  const [repliesRendered, setRepliesRendered] = useState(false);
  useEffect(() => {
    if (!first && data && !isLoading) {
      window.dispatchEvent(new Event("resize"));
    }
  }, [data, first, isLoading]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error || !data) return <div>Error</div>;
  const { text, by, time, kids } = data;
  const hoursAgo = getHoursAgo(time);

  return (
    <Card className={cn(className, styles.comment)} mode="outline">
      <SplitLayout>
        <SplitCol>
          <SplitLayout>
            <SimpleCell before={<Icon12User />}>{by}</SimpleCell>
            <SimpleCell before={<Icon12Clock />}>
              {hoursAgo + " hours ago"}
            </SimpleCell>
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
            <Accordion
              onChange={() => setExpanded(!expanded)}
              expanded={first || repliesRendered}
            >
              <Accordion.Summary
                ExpandIcon={Icon24AddOutline}
                CollapseIcon={Icon24MinusOutline}
              >
                {expanded ? "Hide replies" : "Load replies"}
              </Accordion.Summary>
              {expanded && (
                <Accordion.Content>
                  <Suspense fallback={<Spinner />}>
                    <Replies
                      replyIds={kids}
                      first={first}
                      setRepliesRendered={setRepliesRendered}
                    />
                  </Suspense>
                </Accordion.Content>
              )}
            </Accordion>
          )}
        </SplitCol>
      </SplitLayout>
    </Card>
  );
};

export default Comment;
