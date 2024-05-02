import { Icon12User } from "@vkontakte/icons";
import { Badge, Cell, MiniInfoCell } from "@vkontakte/vkui";

interface AuthorProps {
  author: string;
}
const Author = ({ author }: AuthorProps) => {
  return <Cell before={<Icon12User />}>{author}</Cell>;
};

export default Author;
