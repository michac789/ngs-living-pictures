import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContainer, SidebarMenuItem, SidebarSubtitleText, SidebarTitleText } from "./SidebarStyle";
import { orderedPages } from "../../constants/pages";
import { sidebarConstants } from "../../constants/sidebar";

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
    </SidebarContainer>
  );
});
