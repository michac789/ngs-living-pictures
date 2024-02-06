import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PageLayout from "./pages/PageLayout/PageLayout";

import Content from "./pages/Content/Content";
import Foreword from "./pages/Foreword/Foreword";
import Home from "./pages/Home/Home";

import ColorPalette from "./pages/_Internal/ColorPalette";
import Typography from "./pages/_Internal/Typography";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "content",
        element: <Content />
      },
      {
        path: "foreword",
        element: <Foreword />
      },
      {
        path: "color",
        element: <ColorPalette />
      },
      {
        path: "typography",
        element: <Typography />
      }
    ]
  }
]);
export default router;
