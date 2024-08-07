import { getSortedPosts } from "../lib/posts";
import { Metadata } from "next";
import HomeClientPage from "./client-page";

export const metadata: Metadata = {
  title: "Home",
  description: "TODO",
};

export default async function HomePage() {
  const allPosts = await getSortedPosts();
  return <HomeClientPage allPosts={allPosts} />;
}
