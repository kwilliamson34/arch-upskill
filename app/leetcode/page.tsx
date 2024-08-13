import { Metadata } from "next";
import path from "path";
import { getHtmlFromMd } from "../../lib/posts";
import { siteTitle } from "../constants";
import LeetcodeClientPage from "./client-page";

export const metadata: Metadata = {
  title: `${siteTitle} - Leetcode Learnings`,
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
