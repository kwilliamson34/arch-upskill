import Date from "../../../components/date";
import MarkdownContent from "../../../components/markdown-content";

interface Props {
  post: Post;
}

export default function PostClientPage({ post }: Props) {
  return (
    <>
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      <p className="italic text-gray-700">
        <Date dateString={post.date} /> - {post.status}
      </p>
      <MarkdownContent content={post.content} />
    </>
  );
}
