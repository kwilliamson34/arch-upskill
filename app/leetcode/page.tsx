import { Metadata } from "next";
import path from "path";
import { getContentFromMd } from "../../utils/posts";
import { siteTitle } from "../constants";
import MarkdownContent from "../../components/markdown-content";

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
  return (
    <>
      <a href="https://leetcode.com/explore/" target="_blank">
        Leetcode
      </a>
      <MarkdownContent content={content} />
    </>
  );
}
