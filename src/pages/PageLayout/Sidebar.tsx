import React from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContainer, SidebarMenuItem } from "./SidebarStyle";
import { Text } from "../../components/Text/Text";
import { colors } from "../../constants/colors";

interface SidebarProps {
  isSidebarOpen: boolean;
};

export const Sidebar = ({
  isSidebarOpen
}: SidebarProps) => {
  const navigate = useNavigate();

  const sidebarContent = [
    {
      'text': 'Contents',
      'link': '/content'
    },
    {
      'text': 'Foreword',
      'link': '/foreword'
    }
  ];

  return (
    <SidebarContainer data-sidebar-closed={!isSidebarOpen}>
      <Text variant="title3" color={colors.Neutral200} style={{
        marginBottom: "8px"
      }}>
        Living Pictures: Photography in Southeast Asia
      </Text>
      <Text variant="body1" color={colors.Neutral200} style={{
        marginBottom: "24px",
        fontStyle: "italic"
      }}>
        Charmaine Toh
      </Text>
      {sidebarContent.map((content, index) => {
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
