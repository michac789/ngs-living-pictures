import styled from "styled-components";
import { colors } from "../../constants/colors";

export const MainContainer = styled.div`
  height: calc(100vh - 58px);
  width: 100vw;
  overflow-y: auto;
  
  &[data-sidebar-open="true"] {
    width: calc(100vw - 300px);
  }
  transition: width 0.3s ease;
`;

export const OutletContainer = styled.div`
  min-height: calc(100vh - 110px);
  background-color: ${colors.Neutral300};
`;
