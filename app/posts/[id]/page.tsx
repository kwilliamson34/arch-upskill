import { Metadata } from "next";
import { getAllPostsAsContextParams, getPostData } from "../../../lib/posts";

import { siteTitle } from "../../constants";
import MarkdownContent from "../../../components/markdown-content";
import Date from "../../../components/date";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post: Post = await getPostData(params.id);
  return {
    title: `${siteTitle} - ${post.title}`,
  };
}

export async function generateStaticParams() {
  return getAllPostsAsContextParams();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post: Post = await getPostData(params.id);
  return (
    <>
      <h1>{post.title}</h1>
      <h2>{post.subtitle}</h2>
      {post.date && (
        <p className="italic text-gray-700">
          <Date dateString={post.date} /> - {post.status}
        </p>
      )}
      <MarkdownContent content={post.content} />
    </>
  );
}
