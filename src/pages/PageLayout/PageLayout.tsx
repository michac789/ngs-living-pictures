import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PageLayout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page Layout</h1>
      <button onClick={() => navigate("/")}>
        Back to Home
      </button>
      <Outlet />
    </div>
  );
}
export default PageLayout;
