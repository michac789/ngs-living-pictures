import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LeftButtonContainer,
  NavbarButton,
  NavbarContainer,
  ProgressionContainer,
  ProgressionBarDiv,
  RightButtonContainer,
  StyledArrowIcon,
  StyledNavbarIcon,
  StyledNavbarText,
} from "./NavbarStyle";
import { orderedPages } from "../../constants/pages";
import { SearchModal } from "./SearchModal";

interface NavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  onPageChange: () => void;
}
interface Link {
  link: string;
  name: string;
}

export const Navbar = ({
  isSidebarOpen, onToggleSidebar, onPageChange
}: NavbarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const [prevLink, setPrevLink] = useState<Link | null>(null);
  const [nextLink, setNextLink] = useState<Link | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [currPage, setCurrPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);

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
    setCurrPage(currentIndex);
    setTotalPages(orderedPages.length - 1);
  }, [currentPath]);

  const handleBackClick = () => {
    if (prevLink) {
      navigate(prevLink.link);
      onPageChange();
    }
  };
  const handleNextClick = () => {
    if (nextLink) {
      navigate(nextLink.link);
      onPageChange();
    }
  };

  return (
    <>
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
      <NavbarContainer data-sidebar-open={isSidebarOpen}>
        <StyledNavbarIcon
          name="ri-search-line"
          onClick={() => setIsSearchOpen(true)}
        />
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
          <StyledNavbarIcon name="ri-play-fill" onClick={
            () => navigate('/content')
          } />
        ) : (
          <StyledNavbarIcon name="ri-home-3-fill" onClick={
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
          name="ri-menu-fill"
          onClick={onToggleSidebar}
        />
      </NavbarContainer>
      <ProgressionContainer data-sidebar-open={isSidebarOpen}>
        <ProgressionBarDiv
          data-sidebar-open={isSidebarOpen}
          currpage={currPage}
          totalpages={totalPages}
        />
      </ProgressionContainer>
    </>
  );
};
