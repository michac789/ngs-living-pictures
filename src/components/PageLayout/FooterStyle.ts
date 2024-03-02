import styled from "styled-components";
import { breakpoints } from "../../constants/styles/breakpoints";
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

  @media (max-width: ${breakpoints.medium}) {
    height: 36px;
    gap: 4px;
  }
`;

export const FooterImage = styled.img`
  width: 50px;
  margin-right: 8px;

  @media (max-width: ${breakpoints.medium}) {
    width: 40px;
    margin-right: 4px;
  }
  @media (max-width: ${breakpoints.small}) {
    width: 36px;
    margin-right: 8px;
  }
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

export const MobileColumnFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MobileRowFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
