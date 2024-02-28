import styled from "styled-components";
import { colors } from "../../constants/styles/colors";

export const SearchModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 200px;
  z-index: 1100;

  background-color: ${colors.Neutral200};
`;