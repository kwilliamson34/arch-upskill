import { getAllPostsAsContextParams, getPostData } from "../../../lib/posts";

import { Metadata } from "next";
import PostClientPage from "./client-page";

export const metadata: Metadata = {
  title: "Leetcode Learnings",
  description: "TODO",
};

export async function generateStaticParams() {
  return getAllPostsAsContextParams();
}

export default async function PostPage({ params }) {
  const postData = await getPostData(params.id);
  return <PostClientPage postData={postData} />;
}
