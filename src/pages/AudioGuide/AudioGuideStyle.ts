import styled from "styled-components";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const AudioGuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: 32px 16px;
  gap: 12px;

  @media (max-width: ${breakpoints.medium}) {
    padding: 16px 8px 0;
    gap: 8px;
  }
`;

export const AudioItemCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 700px;

  background-color: ${colors.Neutral200};
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  p {
    margin: 4px 0 0 0 !important;
  }

  @media (max-width: ${breakpoints.medium}) {
    width: 500px;
  }
  @media (max-width: ${breakpoints.small}) {
    width: calc(100% - 32px);
  }
`;
