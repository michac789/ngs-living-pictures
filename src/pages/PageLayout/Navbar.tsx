import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavbarCenterWrapper, NavbarContainer, StyledNavbarIcon } from "./NavbarStyle";

export const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  return (
    <>
      <NavbarContainer>
        <StyledNavbarIcon name="hi-magnifying-glass" size="32px" />
        <NavbarCenterWrapper>
          <StyledNavbarIcon name="hi-chevron-left" size="32px" />
          {currentPath === '/' ? (
            <StyledNavbarIcon name="hi-play" size="32px" onClick={
              () => navigate('/content')
            } />
          ) : (
            <StyledNavbarIcon name="hi-home" size="32px" onClick={
              () => navigate('/')
            } />
          )}
          <StyledNavbarIcon name="hi-chevron-right" size="32px" />
        </NavbarCenterWrapper>
        <StyledNavbarIcon name="hi-bars-3" size="32px" />
      </NavbarContainer>
      <Outlet />
    </>
  );
};
