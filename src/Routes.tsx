import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { orderedPages } from "./constants/pages";
import PageLayout from "./pages/PageLayout/PageLayout";
import ColorPalette from "./pages/_Internal/ColorPalette";
import IconSvg from "./pages/_Internal/IconSvg";
import Typography from "./pages/_Internal/Typography";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      // pages in progression order
      ...orderedPages.map(
        ({ link, element }) => {
          return {
            path: link.substring(1),
            element,
          }
        }
      ),

      // internal pages below
      {
        path: "color",
        element: <ColorPalette />,
      },
      {
        path: "icon",
        element: <IconSvg />,
      },
      {
        path: "typography",
        element: <Typography />,
      },
    ]
  }
]);
export default router;
