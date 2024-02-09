import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { MarkdownTextWrapper } from "./MarkdownStyle";

interface MarkdownTextProps {
  value: string;
};

export const Markdown = ({
  value
}: MarkdownTextProps) => {
  return (
    <MarkdownTextWrapper>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {value}
      </ReactMarkdown>
    </MarkdownTextWrapper>
  );
}
