import styled from "styled-components";

export const MainContainer = styled.div`
  height: calc(100vh - 58px);
  overflow-y: auto;
  
  &[data-sidebar-open="true"] {
    width: calc(100% - 300px);
  }
`;

export const OutletContainer = styled.div`
  min-height: calc(100vh - 110px);
`;
