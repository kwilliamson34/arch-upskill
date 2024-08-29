import { Metadata } from "next";
import {
  getAllPostsAsContextParams,
  getNextPrevPost,
  getPostData,
} from "../../../utils/posts";

import { siteTitle } from "../../constants";
import MarkdownContent from "../../../components/markdown-content";
import Date from "../../../components/date";
import Link from "next/link";

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
  const nextPrev: { next: PostMetadata; prev: PostMetadata } = getNextPrevPost(
    params.id
  );
  const linkClasses = "my-1 md:my-4 block no-underline";
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between">
        {nextPrev.prev ? (
          <Link href={`/posts/${nextPrev.prev.id}`} className={linkClasses}>
            <span className="hidden md:inline-block">←&nbsp;</span>
            {`Previous: ${nextPrev.prev.title}`}
          </Link>
        ) : (
          <Link href="/" className={linkClasses}>
            <span className="hidden md:inline-block">←&nbsp;</span>
            {`Previous: Home`}
          </Link>
        )}
        {nextPrev.next ? (
          <Link href={`/posts/${nextPrev.next.id}`} className={linkClasses}>
            {`Next: ${nextPrev.next.title}`}
            <span className="hidden md:inline-block">&nbsp;→</span>
          </Link>
        ) : (
          <Link href="/" className={linkClasses}>
            {`Next: Home`}
            <span className="hidden md:inline-block">&nbsp;→</span>
          </Link>
        )}
      </div>
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
