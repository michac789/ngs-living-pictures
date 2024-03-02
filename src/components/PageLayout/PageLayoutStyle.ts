import styled from "styled-components";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const MainContainer = styled.div`
  height: calc(100vh - 58px);
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  
  &[data-sidebar-open="true"] {
    width: calc(100vw - 300px);
  }
  transition: width 0.3s ease;

  @media (max-width: ${breakpoints.medium}) {
    transition: none;
  }
`;

export const OutletContainer = styled.div`
  min-height: calc(100vh - 110px);
  background-color: ${colors.Neutral300};
`;
