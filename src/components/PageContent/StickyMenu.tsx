import React, { useRef, useState, useEffect } from "react";
import { StickyMenuContainer } from "./StickyMenuStyle";
import { Icon } from "../Icon/Icon";
import { Portal } from "../Portal/Portal";
import { Tooltip } from "../Tooltip/Tooltip";

interface StickyMenuProps {
  contributorRef: React.RefObject<HTMLDivElement>;
};

export const StickyMenu = ({
  contributorRef,
}: StickyMenuProps) => {
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
  }, [window.location.pathname]);

  const handleShareClick = () => {
    console.log("share clicked");
  };

  const handleCitationClick = () => {
    console.log("citation clicked");
  };

  const handleDownloadClick = () => {
    console.log("download clicked");
  };

  const handleInfoClick = () => {
    contributorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Portal id="main-container">
      <StickyMenuContainer ref={stickyMenuRef} style={{
        left: horizontalDistance,
        top: isSticky ? 58 : verticalDistance,
        position: isSticky ? "fixed" : "absolute"
      }}>
        <Tooltip contents="Share" position="left" timeout={0} hoverable>
          <Icon name="ri-share-line" onClick={handleShareClick} />
        </Tooltip>
        <Tooltip contents="Cite" position="left" timeout={0} hoverable>
          <Icon name="ri-sticky-note-add-line" onClick={handleCitationClick} />
        </Tooltip>
        <Tooltip contents="Download" position="left" timeout={0} hoverable>
          <Icon name="ri-download-line" onClick={handleDownloadClick} />
        </Tooltip>
        <Tooltip contents="Information" position="left" timeout={0} hoverable>
          <Icon name="ri-information-line" onClick={handleInfoClick} />
        </Tooltip>
      </StickyMenuContainer>
    </Portal>
  )
};
