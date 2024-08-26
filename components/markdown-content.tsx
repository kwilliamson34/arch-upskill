import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

export default function MarkdownContent({ content }: { content: string }) {
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
