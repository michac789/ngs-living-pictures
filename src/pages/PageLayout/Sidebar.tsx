import React from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContainer, SidebarMenuItem, SidebarSubtitleText, SidebarTitleText } from "./SidebarStyle";
import { sidebarConstants } from "../../constants/sidebar";
import { orderedPages } from "../../constants/pages";

interface SidebarProps {
  isSidebarOpen: boolean;
};

export const Sidebar = ({
  isSidebarOpen
}: SidebarProps) => {
  const navigate = useNavigate();

  return (
    <SidebarContainer data-sidebar-closed={!isSidebarOpen}>
      <SidebarTitleText variant="title3" onClick={
        () => navigate("/")
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
            onClick={() => navigate(link)}
          >
            {name}
          </SidebarMenuItem>
        );
      })}
    </SidebarContainer>
  );
};
