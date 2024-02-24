import React, { useEffect, useRef, useState } from "react";
import { Portal } from "../Portal/Portal";
import { TooltipContainer, TooltipContentWrapper } from "./TooltipStyle";
import { useOnClickOutside } from "../../utils/useOnClickOutside";

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  contents: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  timeout?: number;
  extraStyles?: string;
  closeOnClickOutside?: boolean;
  hoverable?: boolean;
}

export const Tooltip = ({
  children, contents, position="top", timeout=1000, extraStyles="", hoverable=false,
  closeOnClickOutside=true, ...props
}: TooltipProps) => {
  const [show, setShow] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const hiddenTooltipRef = useRef<HTMLDivElement>(null);
  const [toolTipX, setToolTipX] = useState<number>(0);
  const [toolTipY, setToolTipY] = useState<number>(0);

  const bufferDistancePx = 8;
  const paddingDistancePx = 8;
  useEffect(() => {
    const calculateTooltipPosition = () => {
      if (containerRef.current && hiddenTooltipRef.current) {
        const { top, left, width, height } = containerRef.current.getBoundingClientRect();
        const { width: tooltipWidth, height: tooltipHeight } = hiddenTooltipRef.current.getBoundingClientRect();
        switch (position) {
          case "top":
            setToolTipX(left + width / 2 - tooltipWidth / 2 - paddingDistancePx);
            setToolTipY(top - tooltipHeight - bufferDistancePx - paddingDistancePx * 2);
            break;
          case "bottom":
            setToolTipX(left + width / 2 - tooltipWidth / 2 - paddingDistancePx);
            setToolTipY(top + height + bufferDistancePx);
            break;
          case "left":
            setToolTipX(left - tooltipWidth - bufferDistancePx - paddingDistancePx * 2);
            setToolTipY(top + height / 2 - tooltipHeight / 2 - paddingDistancePx);
            break;
          case "right":
            setToolTipX(left + width + bufferDistancePx);
            setToolTipY(top + height / 2 - tooltipHeight / 2 - paddingDistancePx);
            break;
          default:
            break;
        }
      }
    };
    if (show) {
      calculateTooltipPosition();
    }
  }, [show, position]);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [animate, setAnimate] = useState<boolean>(false);
  const handleAnimation = () => {
    // if you click during the tooltip's lifespan, it should reset the timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      setAnimate(false);
    }
    setShow(true);
    timeoutRef.current = setTimeout(() => {
      setAnimate(true);
      timeoutRef.current = setTimeout(() => {
        setShow(false);
        setAnimate(false);
      }, 270); // animation is 300ms, make this slightly lower to prevent visual glitch
    }, timeout);
  };

  useOnClickOutside(() => {
    if (closeOnClickOutside) {
      setShow(false);
    }
  }, containerRef, tooltipRef);

  const handleClick = () => {
    if (!hoverable) handleAnimation();
  }

  const handleMouseEnter = () => {
    if (hoverable) {
      setShow(true);
    }
  }

  const handleMouseLeave = () => {
    if (hoverable) {
      setShow(false);
      handleAnimation();
    }
  }

  return (
    <>
      <TooltipContainer
        onClick={handleClick}
        ref={containerRef}
        extraStyles={extraStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </TooltipContainer>
      {/* need this to get height and width of tooltip, if ref points to the one below, it is not rerendered at first*/}
      <div style={{ position: "absolute", opacity: 0, width: "fit-content", height: "fit-content" }} ref={hiddenTooltipRef}>
        {contents}
      </div>
      <Portal>
        <TooltipContentWrapper
          className={animate ? "closed-animation" : ""}
          topPosition={toolTipY}
          leftPosition={toolTipX}
          hidden={!show}
          ref={tooltipRef}
          {...props}
        >
          {contents}
        </TooltipContentWrapper>
      </Portal>
    </>
  );
}
