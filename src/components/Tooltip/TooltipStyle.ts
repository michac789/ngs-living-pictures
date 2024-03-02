import styled from "styled-components";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";
import { textVariantMapping } from "../Text/TextStyle";

interface TooltipContainerProps {
  extrastyles?: string;
}
export const TooltipContainer = styled.div<TooltipContainerProps>`
  cursor: pointer;
  pointer-events: all;
  z-index: 99;

  ${({ extrastyles }: TooltipContainerProps) => extrastyles};
`;

interface TooltipContentWrapperProps {
  topposition: number;
  leftposition: number;
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

  top: ${({ topposition }) => `${topposition}px`};
  left: ${({ leftposition }) => `${leftposition}px`};
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

  @media (max-width: ${breakpoints.medium}) {
    padding: 4px 6px;
  }
`;
