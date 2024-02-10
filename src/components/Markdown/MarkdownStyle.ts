import styled from "styled-components";
import { textVariantMapping } from "../Text/TextStyle";

export const MarkdownTextWrapper = styled.div`
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
`;
