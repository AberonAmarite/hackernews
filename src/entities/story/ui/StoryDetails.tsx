import { Link, SimpleCell, SplitLayout } from "@vkontakte/vkui";
import {
  Icon16Clock,
  Icon16Message,
  Icon20Chain,
  Icon20User,
  Icon24AddAwardsOutline,
} from "@vkontakte/icons";
import { getHoursAgo } from "../../../shared/utils/lib/date";
import { Story as StoryDetailsType } from "../model/Story";
interface StoryDetailsProps {
  data: StoryDetailsType;
}
const StoryDetails = ({ data }: StoryDetailsProps) => {
  const { by, descendants, score, time, url } = data;
  const hoursAgo = getHoursAgo(time);
  const { hostname } = new URL(url);
  return (
    <SplitLayout>
      <SimpleCell title="Author" before={<Icon20User />}>
        {by}
      </SimpleCell>
      <SimpleCell title="HackerNews Score" before={<Icon24AddAwardsOutline />}>
        {score}
      </SimpleCell>
      <SimpleCell title="Time of publishing" before={<Icon16Clock />}>
        {hoursAgo + " hours ago"}
      </SimpleCell>
      <SimpleCell title="Comment count" before={<Icon16Message />}>
        {descendants + " comments"}
      </SimpleCell>
      <SimpleCell title="Story link" before={<Icon20Chain />}>
        <Link
          onClick={(e) => {
            e.stopPropagation();
          }}
          href={url || ""}
        >
          {hostname}
        </Link>
      </SimpleCell>
    </SplitLayout>
  );
};

export default StoryDetails;
