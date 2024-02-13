import styled, { Interpolation } from "styled-components";
import { textVariantMapping } from "../Text/TextStyle";

interface MarkdownTextWrapperProps {
  additionalStyles?: Interpolation<React.CSSProperties>;
}

export const MarkdownTextWrapper = styled.div<MarkdownTextWrapperProps>`
  ${textVariantMapping['body1']}

  h1 {
    ${textVariantMapping['title1']}
  }
  
  h2 {
    ${textVariantMapping['title2']}
  }

  h3 {
    ${textVariantMapping['title3']}
  }

  p {
    margin: 0 0 16px 0;
  }

  figure {
    text-align: center;
  }

  ${({ additionalStyles }) => additionalStyles}
`;
