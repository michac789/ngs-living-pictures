import React, { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MobileCloseButtonContainer,
  MobileSidebarContainer,
  SidebarActionText,
  SidebarBottomText,
  SidebarCitationFlex,
  SidebarCitationText,
  SidebarContainer,
  SidebarIconWrapper,
  SidebarImage,
  SidebarMenuItem,
  SidebarSectionText,
  SidebarSubtitleText,
  SidebarTitleText,
  SidebarReadMeText,
} from "./SidebarStyle";
import { AboutModal } from "./AboutModal";
import { Icon } from "../Icon/Icon";
import { Markdown } from "../Markdown/Markdown";
import { Portal } from "../Portal/Portal";
import { Text } from "../Text/Text";
import { Tooltip } from "../Tooltip/Tooltip";
import { colors } from "../../constants/styles/colors";
import { orderedPages } from "../../constants/pages";
import { sidebarConstants } from "../../constants/sidebar";
import sidebarImg from "../../assets/sidebarImg.webp";

interface SidebarProps {
  isSidebarOpen: boolean;
  isLargeScreen: boolean;
  onPageChange: () => void;
  onSidebarClose: () => void;
};

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>((
  {
    isSidebarOpen, isLargeScreen, onPageChange, onSidebarClose
  }, ref
) => {
  const [isReadMeModalOpen, setIsReadMeModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsReadMeModalOpen(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleLinkClick = (link: string) => {
    navigate(link);
    onPageChange();
    if (!isLargeScreen) {
      onSidebarClose();
    }
  }

  const handleReadMeClick = () => {
    setIsReadMeModalOpen(true);
    onSidebarClose();
  }

  const handlePdfClick = () => {
    window.open(sidebarConstants.pdfFormatLink, "_blank");
  }

  const sidebarContents = (
    <>
      <SidebarTitleText variant="title3" onClick={
        () => handleLinkClick("/")
      }>
        {sidebarConstants.title}
      </SidebarTitleText>
      <SidebarSubtitleText variant="body1">
        {sidebarConstants.subtitle}
      </SidebarSubtitleText>
      <SidebarReadMeText onClick={handleReadMeClick}>
        About This Site
      </SidebarReadMeText>
      {orderedPages.map(({
        link, name, isSubpage=false,
      }, index) => {
        return (
          <SidebarMenuItem
            key={index}
            variant="body1"
            data-selected={window.location.pathname === link}
            data-subpage={isSubpage}
            onClick={() => handleLinkClick(link)}
          >
            {name}
          </SidebarMenuItem>
        );
      })}
      <SidebarSectionText variant="body1">
        OTHER FORMATS
      </SidebarSectionText>
      <SidebarActionText variant="body1" onClick={handlePdfClick}>
        PDF
      </SidebarActionText>
      <SidebarSectionText variant="body1">
        CITE THIS PAGE
      </SidebarSectionText>
      {sidebarConstants.citations.map(({
        format, text
      }, index) => {
        return (
          <SidebarCitationText key={index} variant="body1">
            <SidebarCitationFlex>
              <Text variant="body1" as="span" color={colors.Neutral200}>
                {format}
              </Text>
              <Tooltip contents="Copied to clipboard!" extraStyles="height: 16px;">
                <Icon
                  name="ri-file-copy-2-line"
                  onClick={() => navigator.clipboard.writeText(text)}
                />
              </Tooltip>
            </SidebarCitationFlex>
            <Markdown value={text} />
          </SidebarCitationText>
        );
      })}
      <SidebarImage src={sidebarImg} alt="National Gallery Singapore Logo" />
      <SidebarBottomText variant="body2" color={colors.Neutral200}>
        &copy; 2024 National Gallery Singapore
      </SidebarBottomText>
      <SidebarIconWrapper>
        <Icon
          name="ri-creative-commons-line"
          onClick={() => {window.open("https://creativecommons.org/licenses/by/4.0/")}}
        />
        <Icon
          name="ri-github-fill"
          onClick={() => {window.open("https://github.com/michac789/ngs-living-pictures")}}
        />
      </SidebarIconWrapper>
      <SidebarBottomText variant="body2" color={colors.Neutral200}>
        This work is licensed under a Creative Common Attribution 4.0 International License.
      </SidebarBottomText>
    </>
  );

  if (!isLargeScreen && !isSidebarOpen) return (
    <AboutModal
      isOpen={isReadMeModalOpen}
      onClose={() => setIsReadMeModalOpen(false)}
    />
  )
  if (!isLargeScreen && isSidebarOpen) {
    return (
      <Portal>
        <MobileSidebarContainer>
          <MobileCloseButtonContainer onClick={onSidebarClose}>
            <Icon name="ri-close-fill" />
          </MobileCloseButtonContainer>
          {sidebarContents}
        </MobileSidebarContainer>
      </Portal>
    )
  }

  return (
    <>
      <AboutModal
        isOpen={isReadMeModalOpen}
        onClose={() => setIsReadMeModalOpen(false)}
      />
      <SidebarContainer data-sidebar-closed={!isSidebarOpen} ref={ref}>
        {sidebarContents}
      </SidebarContainer>
    </>
  );
});
