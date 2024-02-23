import React, { useRef, useState, useEffect } from "react";
import { StickyMenuContainer } from "./StickyMenuStyle";
import { Portal } from "../Portal/Portal";

export const StickyMenu = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [horizontalDistance, setHorizontalDistance] = useState(0);
  const [verticalDistance, setVerticalDistance] = useState(0);
  const [prevVerticalDistance, setPrevVerticalDistance] = useState(0);
  const stickyMenuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const mainContainer = document.getElementById("main-container");
    const handleScroll = () => {
      if (mainContainer) {
        mainContainer.scrollTop > prevVerticalDistance ? setIsSticky(true) : setIsSticky(false);
      }
    }
    mainContainer && mainContainer.addEventListener('scroll', handleScroll);
    return () => {
      mainContainer && mainContainer.removeEventListener('scroll', handleScroll);
    }
  }, [prevVerticalDistance]);

  useEffect(() => {
    const pageContentContainer = document.getElementById("content-container");
    const mainContainer = document.getElementById("main-container");
    const handleResize = () => {
      const { x, y, width } = pageContentContainer?.getBoundingClientRect() ||
        {x: 0, y: 0, width: 0 };
      const horizontalDistance = x + width + 16;
      const verticalDistance = y - 58;
      setHorizontalDistance(horizontalDistance);
      setVerticalDistance(verticalDistance);
      if (!isSticky) {
        setPrevVerticalDistance(verticalDistance);
      }
    }
    const resizeObserver = new ResizeObserver(handleResize);
    if (mainContainer) {
      resizeObserver.observe(mainContainer);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.pathname])

  return (
    <Portal id="main-container">
      <StickyMenuContainer ref={stickyMenuRef} style={{
        left: horizontalDistance,
        top: isSticky ? 58 : verticalDistance,
        position: isSticky ? "fixed" : "absolute"
      }}>
        TODO
      </StickyMenuContainer>
    </Portal>
  )
};
