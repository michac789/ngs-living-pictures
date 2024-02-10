import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarButton, NavbarCenterWrapper, NavbarContainer, StyledNavbarIcon } from "./NavbarStyle";
import { Icon } from "../../components/Icon/Icon";
import { Text } from "../../components/Text/Text";
import { orderedPages } from "../../Routes";

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
      <NavbarCenterWrapper>
        {prevLink && (
          <NavbarButton onClick={handleBackClick}>
            <Icon name="ri-arrow-left-s-line" />
            <Text variant="body1">
              {prevLink.name}
            </Text>
          </NavbarButton>
        )}
        {currentPath === '/' ? (
          <StyledNavbarIcon name="ri-play-fill" size="28px" onClick={
            () => navigate('/content')
          } />
        ) : (
          <StyledNavbarIcon name="ri-home-3-fill" size="28px" onClick={
            () => navigate('/')
          } />
        )}
        {currentPath !== '/' && nextLink && (
          <NavbarButton onClick={handleNextClick}>
            <Text variant="body1">
              {nextLink.name}
            </Text>
            <Icon name="ri-arrow-right-s-line" />
          </NavbarButton>
        )}
      </NavbarCenterWrapper>
      <StyledNavbarIcon
        name="ri-menu-fill" size="28px"
        onClick={onToggleSidebar}
      />
    </NavbarContainer>
  );
};
