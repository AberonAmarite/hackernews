import { Remarkable } from "remarkable";

const md = new Remarkable({
  html: true,
});

function renderMarkdownToHTML(markdown: string) {
  // This is ONLY safe because the output HTML
  // is shown to the same user, and because you
  // trust this Markdown parser to not have bugs.
  const renderedHTML = md.render(markdown);
  return { __html: renderedHTML };
}

interface DangerousHTMLProps {
  text: string;
}
const DangerousHTML = ({ text }: DangerousHTMLProps) => {
  const markup = renderMarkdownToHTML(text);

  return <div dangerouslySetInnerHTML={markup} />;
};

export default DangerousHTML;
