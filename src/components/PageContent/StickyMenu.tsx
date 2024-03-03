import React, { useRef, useState, useEffect } from "react";
import { ShareOption } from "./ShareOption";
import { CitationTooltipWrapper, StickyMenuContainer, StyledSpinner } from "./StickyMenuStyle";
import { Icon } from "../Icon/Icon";
import { Markdown } from "../Markdown/Markdown";
import { Portal } from "../Portal/Portal";
import { Tooltip } from "../Tooltip/Tooltip";

interface StickyMenuProps {
  contributorRef: React.RefObject<HTMLDivElement>;
  onDownloadClick: () => void;
  isDownloadLoading: boolean;
  isLargeScreen: boolean;
  citation?: string;
};

export const StickyMenu = ({
  contributorRef, onDownloadClick, isDownloadLoading, isLargeScreen, citation,
}: StickyMenuProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isShareOptionOpen, setIsShareOptionOpen] = useState(false);
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
  }, [window.location.pathname, window.innerWidth]);

  const handleShareClick = () => {
    setIsShareOptionOpen(true);
  };

  const handleCitationClick = () => {
    navigator.clipboard.writeText(citation || "");
  };

  const handleDownloadClick = () => {
    if (!isDownloadLoading) {
      return onDownloadClick();
    }
  }

  const handleInfoClick = () => {
    contributorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Portal id="main-container">
        <StickyMenuContainer ref={stickyMenuRef} style={{
          left: isLargeScreen ? horizontalDistance : horizontalDistance - 136 - 12,
          top: isSticky ? (
            isLargeScreen ? 58 : 58 - 8
          ) : (
            isLargeScreen ? verticalDistance : 58 - 8
          ),
          position: isLargeScreen ? (isSticky ? "fixed" : "absolute") : "fixed",
        }}>
          <Tooltip contents="Share" position="left" timeout={0} hoverable>
            <Icon name="ri-share-line" onClick={handleShareClick} />
          </Tooltip>
          {citation && (
            <Tooltip contents={
              <CitationTooltipWrapper>
                <span>Cite (click the icon beside to copy)</span>
                <Markdown value={citation} />
              </CitationTooltipWrapper>
            } position="left" timeout={0} hoverable>
              <Tooltip contents="Copied to clipboard!" position="top" style={{
                zIndex: 101,
              }}>
                <Icon name="ri-sticky-note-add-line" onClick={handleCitationClick} />
              </Tooltip>
            </Tooltip>
          )}
          <Tooltip contents="Download" position="left" timeout={0} hoverable>
            {isDownloadLoading ? (
              <StyledSpinner />
            ) : (
              <Icon name="ri-download-line" onClick={handleDownloadClick} />
            )}
          </Tooltip>
          <Tooltip contents="Information" position="left" timeout={0} hoverable>
            <Icon name="ri-information-line" onClick={handleInfoClick} />
          </Tooltip>
        </StickyMenuContainer>
      </Portal>
      {isShareOptionOpen && (
        <ShareOption
          onClose={() => setIsShareOptionOpen(false)}
        />
      )}
    </>
  )
};
