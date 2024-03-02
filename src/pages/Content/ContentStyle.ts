import styled from "styled-components";
import { Text } from "../../components/Text/Text";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const TitleText = styled(Text)`
  padding: 64px;
  text-align: center;

  @media (max-width: ${breakpoints.medium}) {
    padding: 24px 32px 16px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin: 0 auto;
  padding: 0 32px 32px;
  max-width: 750px;

  @media (max-width: ${breakpoints.medium}) {
    padding: 0 16px 8px;
    gap: 16px;
  }
`;

export const ContentLinkText = styled(Text)`
  cursor: pointer;

  svg {
    padding-left: 8px;
    transform: translateY(4px);
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: ${colors.Red700};

    svg {
      stroke: ${colors.Red700};
      fill: ${colors.Red700};
      transform: translate(16px, 4px);
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    svg {
      height: 20px;
      width: 20px;
    }
  }
`;
