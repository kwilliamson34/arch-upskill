"use client";

export default function LeetcodeClientPage({ html }) {
  return (
    <>
      <a href="https://leetcode.com/explore/" target="_blank">
        Leetcode
      </a>
      <div className="text-md" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
