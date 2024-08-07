import { Metadata } from "next";
import { getHtmlFromMd } from "../../lib/posts";
import path from "path";
import LeetcodeClientPage from "./client-page";

export const metadata: Metadata = {
  title: "Leetcode Learnings",
};

async function getHtml() {
  return getHtmlFromMd(
    path.join(process.cwd(), "app", "leetcode", "leetcode.md")
  );
}

export default async function LeetcodePage() {
  const html = await getHtml();
  return <LeetcodeClientPage html={html} />;
}
