import React from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContainer, SidebarMenuItem, SidebarSubtitleText, SidebarTitleText } from "./SidebarStyle";
import { sidebarConstants } from "../../constants/sidebar";

interface SidebarProps {
  isSidebarOpen: boolean;
};

export const Sidebar = ({
  isSidebarOpen
}: SidebarProps) => {
  const navigate = useNavigate();

  return (
    <SidebarContainer data-sidebar-closed={!isSidebarOpen}>
      <SidebarTitleText variant="title3">
        {sidebarConstants.title}
      </SidebarTitleText>
      <SidebarSubtitleText variant="body1">
        {sidebarConstants.subtitle}
      </SidebarSubtitleText>
      {sidebarConstants.contents.map((content, index) => {
        return (
          <SidebarMenuItem
            key={index}
            variant="body1"
            onClick={() => navigate(content.link)}
          >
            {content.text}
          </SidebarMenuItem>
        );
      })}
    </SidebarContainer>
  );
};
