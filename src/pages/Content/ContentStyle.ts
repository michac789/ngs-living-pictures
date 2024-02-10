import styled from "styled-components";
import { Text } from "../../components/Text/Text";
import { colors } from "../../constants/colors";

export const TitleText = styled(Text)`
  padding: 64px;
  text-align: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin: 0 auto;
  padding-bottom: 32px;
  max-width: 750px;
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
`;

export const ContentButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 32px;
  gap: 16px;
`;
