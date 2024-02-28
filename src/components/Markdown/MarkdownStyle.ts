import styled, { Interpolation } from "styled-components";
import { textVariantMapping } from "../Text/TextStyle";
import { colors } from "../../constants/styles/colors";

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

  .citation {
    color: ${colors.Red500};
    font-size: smaller;
    font-weight: 600;
    vertical-align: super;

    &:hover {
      cursor: pointer;
      color: ${colors.Red700};
    }
  }

  &[data-type="small"] {
    ${textVariantMapping['body2']}
  }

  ${({ additionalStyles }) => additionalStyles}
`;
