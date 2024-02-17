import React, { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { MainContainer, OutletContainer } from "./PageLayoutStyle";
import { Sidebar } from "./Sidebar";
import { ErrorBoundary } from "react-error-boundary";
import { GeneralError } from "../Error/Error";

export const PageLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  const instantScrollToTop = () => {
    if (mainContainerRef.current) {
      mainContainerRef.current.scrollTop = 0;
    }
  }

  return (
    <ErrorBoundary fallback={<GeneralError />}>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
        onPageChange={instantScrollToTop}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onPageChange={instantScrollToTop}
      />
      <MainContainer
        data-sidebar-open={isSidebarOpen}
        ref={mainContainerRef}
        id="main-container"
      >
        <OutletContainer>
          <Outlet />
        </OutletContainer>
        <Footer />
      </MainContainer>
    </ErrorBoundary>
  );
}
