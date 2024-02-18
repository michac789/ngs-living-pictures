import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  SidebarBottomText,
  SidebarContainer,
  SidebarIconWrapper,
  SidebarImage,
  SidebarMenuItem,
  SidebarSubtitleText,
  SidebarTitleText,
} from "./SidebarStyle";
import { Icon } from "../Icon/Icon";
import { colors } from "../../constants/colors";
import { orderedPages } from "../../constants/pages";
import { sidebarConstants } from "../../constants/sidebar";
import sidebarImg from "../../assets/sidebarImg.jpg";

interface SidebarProps {
  isSidebarOpen: boolean;
  onPageChange: () => void;
};

export const Sidebar = forwardRef<HTMLDivElement, SidebarProps>((
  {
    isSidebarOpen, onPageChange
  }, ref
) => {
  const navigate = useNavigate();

  const handleLinkClick = (link: string) => {
    navigate(link);
    onPageChange();
  }

  return (
    <SidebarContainer data-sidebar-closed={!isSidebarOpen} ref={ref}>
      <SidebarTitleText variant="title3" onClick={
        () => handleLinkClick("/")
      }>
        {sidebarConstants.title}
      </SidebarTitleText>
      <SidebarSubtitleText variant="body1">
        {sidebarConstants.subtitle}
      </SidebarSubtitleText>
      {orderedPages.map(({
        link, name
      }, index) => {
        return (
          <SidebarMenuItem
            key={index}
            variant="body1"
            data-selected={window.location.pathname === link}
            onClick={() => handleLinkClick(link)}
          >
            {name}
          </SidebarMenuItem>
        );
      })}
      <SidebarImage src={sidebarImg} alt="National Gallery Singapore Logo" />
      <SidebarBottomText variant="body2" color={colors.Neutral200}>
        &copy; 2024 National Gallery Singapore
      </SidebarBottomText>
      <SidebarIconWrapper>
        <Icon
          name="ri-creative-commons-line"
          size="28px"
          onClick={() => {window.open("https://creativecommons.org/licenses/by/4.0/")}}
        />
        <Icon
          name="ri-github-fill"
          size="28px"
          onClick={() => {window.open("https://github.com/michac789/ngs-living-pictures")}}
        />
      </SidebarIconWrapper>
      <SidebarBottomText variant="body2" color={colors.Neutral200}>
        This work is licensed under a Creative Common Attribution 4.0 International License.
      </SidebarBottomText>
    </SidebarContainer>
  );
});
