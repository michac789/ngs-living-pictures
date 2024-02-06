import styled from "styled-components";
import { colors } from "../../constants/colors";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  width: auto;
  height: 50px;
  gap: 8px;

  background-color: ${colors.Neutral800};
  border-top: 2px solid #acacad;
  color: white;

  transition: width 0.3s ease-in-out;
`;
