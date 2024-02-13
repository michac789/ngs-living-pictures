import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LeftButtonContainer,
  NavbarButton,
  NavbarContainer,
  RightButtonContainer,
  StyledArrowIcon,
  StyledNavbarIcon,
  StyledNavbarText,
} from "./NavbarStyle";
import { orderedPages } from "../../constants/pages";

interface NavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}
interface Link {
  link: string;
  name: string;
}

export const Navbar = ({
  isSidebarOpen, onToggleSidebar
}: NavbarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const [prevLink, setPrevLink] = useState<Link | null>(null);
  const [nextLink, setNextLink] = useState<Link | null>(null);

  useEffect(() => {
    const currentIndex = orderedPages.findIndex(({ link }) => link === currentPath);
    if (currentIndex === -1) return;
    setPrevLink(() => {
      if (currentIndex === 0) return null;
      return {
        link: orderedPages[currentIndex - 1].link,
        name: orderedPages[currentIndex - 1].name
      }
    });
    setNextLink(() => {
      if (currentIndex === orderedPages.length - 1) return null;
      return {
        link: orderedPages[currentIndex + 1].link,
        name: orderedPages[currentIndex + 1].name
      }
    });
  }, [currentPath]);

  const handleBackClick = () => {
    if (prevLink) {
      navigate(prevLink.link);
    }
  };
  const handleNextClick = () => {
    if (nextLink) {
      navigate(nextLink.link);
    }
  };

  return (
    <NavbarContainer data-sidebar-open={isSidebarOpen}>
      <StyledNavbarIcon name="ri-search-line" size="28px" />
      <LeftButtonContainer>
        {prevLink && (
          <NavbarButton onClick={handleBackClick}>
            <StyledArrowIcon name="ri-arrow-left-s-line" />
            <StyledNavbarText variant="body1">
              {prevLink.name}
            </StyledNavbarText>
          </NavbarButton>
        )}
      </LeftButtonContainer>
      {currentPath === '/' ? (
        <StyledNavbarIcon name="ri-play-fill" size="28px" onClick={
          () => navigate('/content')
        } />
      ) : (
        <StyledNavbarIcon name="ri-home-3-fill" size="28px" onClick={
          () => navigate('/')
        } />
      )}
      <RightButtonContainer>
        {currentPath !== '/' && nextLink && (
          <NavbarButton onClick={handleNextClick}>
            <StyledNavbarText variant="body1">
              {nextLink.name}
            </StyledNavbarText>
            <StyledArrowIcon name="ri-arrow-right-s-line" />
          </NavbarButton>
        )}
      </RightButtonContainer>
      <StyledNavbarIcon
        name="ri-menu-fill" size="28px"
        onClick={onToggleSidebar}
      />
    </NavbarContainer>
  );
};
