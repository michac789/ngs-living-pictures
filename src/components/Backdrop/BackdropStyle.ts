import styled from "styled-components";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const DarkBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  background-color: rgba(35, 35, 35, 0.8);
  backdrop-filter: blur(4px);
  z-index: 200;

  transition: all 0.3s ease-in-out;
  animation: fadeIn 0.3s ease;
  &.exiting {
    animation: fadeOut 0.3s ease;
  }
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  z-index: 300;
  transition: all 0.3s ease-in-out;

  svg {
    height: 32px;
    width: 32px;
    fill: ${colors.Neutral300};
    stroke: ${colors.Neutral300};
    box-shadow: 0 0 0 2px ${colors.Neutral400};
  }

  &:hover {
    transform: scale(1.2);
    svg {
      fill: ${colors.Neutral200};
      stroke: ${colors.Neutral200};
      box-shadow: 0 0 0 2px ${colors.Neutral300};
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    svg {
      height: 28px;
      width: 28px;
    }
  }
`;
