import styled from "styled-components";
import { colors } from "../../constants/styles/colors";
import { textVariantMapping } from "../Text/TextStyle";

interface TooltipContainerProps {
  extraStyles?: string;
}
export const TooltipContainer = styled.div<TooltipContainerProps>`
  cursor: pointer;
  pointer-events: all;
  z-index: 99;

  ${({ extraStyles }: TooltipContainerProps) => extraStyles};
`;

interface TooltipContentWrapperProps {
  topPosition: number;
  leftPosition: number;
  hidden: boolean;
}
export const TooltipContentWrapper = styled.div<TooltipContentWrapperProps>`
  position: absolute;
  background-color: ${colors.Neutral200};
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  padding: 8px;
  z-index: 100;
  width: fit-content;
  height: fit-content;

  top: ${({ topPosition }) => `${topPosition}px`};
  left: ${({ leftPosition }) => `${leftPosition}px`};
  visibility: ${({ hidden }) => hidden ? "hidden" : "visible"};
  ${textVariantMapping['body2']};

  @keyframes fade-in-tooltip {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fade-out-tooltip {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  animation: fade-in-tooltip 0.3s ease-in forwards;
  &.closed-animation {
    animation: fade-out-tooltip 0.3s ease-out forwards;
  }  
`;
