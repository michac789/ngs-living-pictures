import styled from "styled-components";
import { Text } from "../../components/Text/Text";
import { colors } from "../../constants/colors";

export const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelText = styled(Text)`
  padding: 2px 8px;
  margin: 64px 0 0;
  border-top: 2px solid ${colors.Red500};
  border-bottom: 2px solid ${colors.Red500};
`;

export const TitleText = styled(Text)`
  margin: 32px 60px 48px;
  text-align: center;
`;

export const SubtitleText = styled(Text)`
  margin: 0 72px 48px;
  text-align: center;
`;

export const ContentContainer = styled.div`
  max-width: 700px;
  padding: 40px;
  
  background-color: ${colors.Neutral100};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
