import styled from "styled-components";
import { breakpoints } from "../../constants/styles/breakpoints";

export const NavButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 32px;
  gap: 16px;

  @media (max-width: ${breakpoints.medium}) {
    padding: 16px;
    gap: 12px;
  }
`;
