import styled from "styled-components";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: fit-content;
  min-width: 400px;
  max-width: calc(100% - 72px);
  height: fit-content;
  min-height: 300px;
  max-height: calc(100vh - 120px);

  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: ${colors.Neutral200};
  z-index: 1100;
  overflow: hidden;

  @media (max-width: ${breakpoints.medium}) {
    position: fixed;
    left: 0;
    bottom: 0;

    width: 100vw;
    max-width: none;
    max-height: 80vh;
    border-radius: 0;
  }
`;

export const ModalTitleWrapper = styled.div`
  padding: 12px 20px;
  border-bottom: 2px solid ${colors.Neutral500};

  @media (max-width: ${breakpoints.medium}) {
    padding: 8px 12px;
  }
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: auto;
  padding: 20px;

  @media (max-width: ${breakpoints.medium}) {
    padding: 12px;
  }
`;
