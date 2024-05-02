import { Link, SimpleCell, SplitLayout } from "@vkontakte/vkui";
import {
  Icon12Chain,
  Icon12Clock,
  Icon12Message,
  Icon12Tag,
  Icon12User,
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
      <SimpleCell before={<Icon12User />}>{by}</SimpleCell>
      <SimpleCell before={<Icon12Tag />}>{score}</SimpleCell>
      <SimpleCell before={<Icon12Clock />}>
        {hoursAgo + " hours ago"}
      </SimpleCell>
      <SimpleCell before={<Icon12Message />}>
        {descendants + " comments"}
      </SimpleCell>
      <SimpleCell before={<Icon12Chain />}>
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
