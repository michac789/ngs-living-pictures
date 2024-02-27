import styled from "styled-components";
import { Text } from "../../components/Text/Text";
import { colors } from "../../constants/styles/colors";

export const ForewordBgContainer = styled.div`
  background: linear-gradient(
    to bottom,
    ${colors.Neutral700} 0%,
    ${colors.Neutral400} 80%,
    ${colors.Neutral100} 100%
  );
  background-size: 100% 280px;
  background-repeat: no-repeat;
`;

export const TitleText = styled(Text)`
  padding: 64px 0 32px;
  text-align: center;
  z-index: 2;
  color: ${colors.Neutral100};
`;

export const SubtitleText = styled(Text)`
  padding-bottom: 120px;
  text-align: center;
  color: ${colors.Neutral100};
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
