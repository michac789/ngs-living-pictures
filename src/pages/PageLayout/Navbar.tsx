import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarCenterWrapper, NavbarContainer, StyledNavbarIcon } from "./NavbarStyle";

interface NavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const Navbar = ({
  isSidebarOpen, onToggleSidebar
}: NavbarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  return (
    <NavbarContainer data-sidebar-open={isSidebarOpen}>
      <StyledNavbarIcon name="ri-search-line" size="32px" />
      <NavbarCenterWrapper>
        <StyledNavbarIcon name="ri-arrow-left-s-line" size="32px" />
        {currentPath === '/' ? (
          <StyledNavbarIcon name="ri-play-fill" size="32px" onClick={
            () => navigate('/content')
          } />
        ) : (
          <StyledNavbarIcon name="ri-home-3-fill" size="32px" onClick={
            () => navigate('/')
          } />
        )}
        <StyledNavbarIcon name="ri-arrow-right-s-line" size="32px" />
      </NavbarCenterWrapper>
      <StyledNavbarIcon
        name="ri-menu-fill" size="32px"
        onClick={onToggleSidebar}
      />
    </NavbarContainer>
  );
};
