import { Metadata } from "next";
import { getAllPostsAsContextParams, getPostData } from "../../../lib/posts";

import { siteTitle } from "../../constants";
import PostClientPage from "./client-page";

export async function generateMetadata({ params }): Promise<Metadata> {
  const post: Post = await getPostData(params.id);
  return {
    title: `${siteTitle} - ${post.title}`,
  };
}

export async function generateStaticParams() {
  return getAllPostsAsContextParams();
}

export default async function PostPage({ params }) {
  const post: Post = await getPostData(params.id);
  return <PostClientPage post={post} />;
}
