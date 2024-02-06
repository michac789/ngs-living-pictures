import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { MainContainer, OutletContainer } from "./PageLayoutStyle";
import { Sidebar } from "./Sidebar";

const PageLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <Navbar isSidebarOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      {isSidebarOpen && <Sidebar />}
      <MainContainer data-sidebar-open={isSidebarOpen}>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
        <Footer />
      </MainContainer>
    </>
  );
}
export default PageLayout;
