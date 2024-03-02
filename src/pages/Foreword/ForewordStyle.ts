import styled from "styled-components";
import { Text } from "../../components/Text/Text";
import { breakpoints } from "../../constants/styles/breakpoints";
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

  @media (max-width: ${breakpoints.medium}) {
    background-size: 100% 168px;
  }
`;

export const TitleText = styled(Text)`
  padding: 64px 0 32px;
  text-align: center;
  z-index: 2;
  color: ${colors.Neutral100};

  @media (max-width: ${breakpoints.medium}) {
    padding: 24px 32px 16px;
  }
`;

export const SubtitleText = styled(Text)`
  padding-bottom: 120px;
  text-align: center;
  color: ${colors.Neutral100};

  @media (max-width: ${breakpoints.medium}) {
    padding-bottom: 64px;
  }
`;

export const ForewordTextContainer = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: 0 32px 32px;

  p:first-of-type::first-letter {
    font-size: 160px;
    float: left;
    margin-right: 6px;
    line-height: 1;
    margin: -12px 6px -12px -12px;
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 0 16px 8px;

    p:first-of-type::first-letter {
      font-size: 132px;
      float: left;
      margin-right: 6px;
      line-height: 1;
      margin: -12px 6px -12px -12px;
    }
  }
`;
