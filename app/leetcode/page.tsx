import { Metadata } from "next";
import path from "path";
import { getContentFromMd } from "../../lib/posts";
import { siteTitle } from "../constants";
import LeetcodeClientPage from "./client-page";

export const metadata: Metadata = {
  title: `${siteTitle} - Leetcode Learnings`,
};

async function getContent() {
  return getContentFromMd(
    path.join(process.cwd(), "app", "leetcode", "leetcode.md")
  );
}

export default async function LeetcodePage() {
  const content = await getContent();
  return <LeetcodeClientPage content={content} />;
}
