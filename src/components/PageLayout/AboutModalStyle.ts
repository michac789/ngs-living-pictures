import styled from "styled-components";
import { breakpoints } from "../../constants/styles/breakpoints";

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
