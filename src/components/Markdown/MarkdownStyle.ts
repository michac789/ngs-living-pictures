import styled from "styled-components";
import { variantMapping } from "../Text/TextStyle";

export const MarkdownTextWrapper = styled.div`
  background-color: red;
  ${variantMapping['body1']}

  h1 {
    ${variantMapping['title1']}
  }
  
  h2 {
    ${variantMapping['title2']}
  }

  h3 {
    ${variantMapping['title3']}
  }
`;
