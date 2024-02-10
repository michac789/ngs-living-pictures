import styled from "styled-components";
import { Text } from "../../components/Text/Text";

export const TitleText = styled(Text)`
  padding: 64px 0 32px;
  text-align: center;
`;

export const SubtitleText = styled(Text)`
  padding-bottom: 96px;
  text-align: center;
`;

export const ForewordTextContainer = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding-bottom: 32px;

  p:first-of-type::first-letter {
    font-size: 160px;
    float: left;
    margin-right: 6px;
    line-height: 1;
    margin: -12px 6px -12px -12px;
  }
`;
