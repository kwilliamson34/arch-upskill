import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ]}
    >
      {content}
    </ReactMarkdown>
  );
}
