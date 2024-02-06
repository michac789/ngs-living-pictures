import styled from "styled-components";
import { colors } from "../../constants/colors";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;

  background-color: ${colors.Neutral800};
  border-right: 2px solid ${colors.Neutral500};
  /* padding: 16px; */
`;
