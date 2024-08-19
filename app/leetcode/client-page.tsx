"use client";
import MarkdownContent from "../../components/markdown-content";

interface Props {
  content: string;
}

export default function LeetcodeClientPage({ content }: Props) {
  return (
    <>
      <a href="https://leetcode.com/explore/" target="_blank">
        Leetcode
      </a>
      <MarkdownContent content={content} />
    </>
  );
}
