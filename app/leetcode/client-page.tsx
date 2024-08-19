"use client";
import MarkdownContent from "../../components/markdown-content";

export default function LeetcodeClientPage({ content }) {
  return (
    <>
      <a href="https://leetcode.com/explore/" target="_blank">
        Leetcode
      </a>
      <MarkdownContent content={content} />
    </>
  );
}
