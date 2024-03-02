import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Interpolation } from "styled-components";
import { MarkdownTextWrapper } from "./MarkdownStyle";

interface MarkdownTextProps {
  value: string;
  additionalStyles?: React.CSSProperties;
  type?: "default" | "small";
};

export const Markdown = ({
  value, additionalStyles={}, type="default",
}: MarkdownTextProps) => {
  return (
    <MarkdownTextWrapper
      data-type={type}
      additionalstyles={additionalStyles as Interpolation<React.CSSProperties>}
    >
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {value}
      </ReactMarkdown>
    </MarkdownTextWrapper>
  );
}
