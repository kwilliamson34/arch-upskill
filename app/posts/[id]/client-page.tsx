import Date from "../../../components/date";
import MarkdownContent from "../../../components/markdown-content";

export default function PostClientPage({ post }: { post: Post }) {
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
