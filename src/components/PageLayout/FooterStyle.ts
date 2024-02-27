import styled from "styled-components";
import { colors } from "../../constants/styles/colors";
import { Text } from "../Text/Text";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  width: auto;
  height: 50px;
  gap: 8px;

  background-color: ${colors.Neutral800};
  border-top: 2px solid ${colors.Neutral500};
  transition: width 0.3s ease-in-out;
`;

export const FooterImage = styled.img`
  width: 50px;
  margin-right: 8px;
`;

export const StyledLinkText = styled(Text)`
  cursor: pointer;
  color: ${colors.Neutral200};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${colors.Blue300};
    text-decoration: underline;
  }
`;
