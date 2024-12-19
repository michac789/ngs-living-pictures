import styled from "styled-components";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 750px;
  padding-right: 8px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.large}) {
    width: 650px;
  }
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;

export const StyledSpan = styled.span`
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    color: ${colors.Blue700};
  }
`;
