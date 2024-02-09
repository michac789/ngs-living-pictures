import React from "react";
import ReactMarkdown from "react-markdown";
import { MarkdownTextWrapper } from "./MarkdownStyle";

interface MarkdownTextProps {
  value: string;
};

export const Markdown = ({
  value
}: MarkdownTextProps) => {
  return (
    <MarkdownTextWrapper>
      <ReactMarkdown>
        {value}
      </ReactMarkdown>
    </MarkdownTextWrapper>
  );
}
