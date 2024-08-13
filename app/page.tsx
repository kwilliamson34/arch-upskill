import { Metadata } from "next";
import { getSortedPosts } from "../lib/posts";
import HomeClientPage from "./client-page";
import { siteTitle } from "./constants";

export const metadata: Metadata = {
  title: `${siteTitle} - Home`,
  description:
    "See how Katy learned to build a personal website using Next.js to track her course of study!",
};

export default async function HomePage() {
  const allPosts = await getSortedPosts();
  return <HomeClientPage allPosts={allPosts} />;
}
