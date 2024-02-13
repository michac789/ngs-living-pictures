import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Interpolation } from "styled-components";
import { MarkdownTextWrapper } from "./MarkdownStyle";

interface MarkdownTextProps {
  value: string;
  additionalStyles?: React.CSSProperties;
};

export const Markdown = ({
  value, additionalStyles={},
}: MarkdownTextProps) => {
  return (
    <MarkdownTextWrapper additionalStyles={additionalStyles as Interpolation<React.CSSProperties>}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {value}
      </ReactMarkdown>
    </MarkdownTextWrapper>
  );
}
