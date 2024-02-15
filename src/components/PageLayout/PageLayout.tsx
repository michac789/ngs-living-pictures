import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { MainContainer, OutletContainer } from "./PageLayoutStyle";
import { Sidebar } from "./Sidebar";
import { ErrorBoundary } from "react-error-boundary";
import { GeneralError } from "../Error/Error";

export const PageLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <ErrorBoundary fallback={<GeneralError />}>
      <Navbar isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <MainContainer data-sidebar-open={isSidebarOpen}>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
        <Footer />
      </MainContainer>
    </ErrorBoundary>
  );
}
