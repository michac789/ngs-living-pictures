import styled from "styled-components";
import { breakpoints } from "../../constants/styles/breakpoints";

export const AudioGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: 32px 16px;
  max-width: 800px;
  gap: 8px;

  @media (max-width: ${breakpoints.medium}) {
    padding: 16px 8px 0;
    gap: 4px;
  }
`;
