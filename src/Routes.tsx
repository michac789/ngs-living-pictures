import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { orderedPages } from "./constants/pages";
import { PageNotFoundError } from "./components/Error/Error";
import { PageLayout } from "./components/PageLayout/PageLayout";
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
      {
        path: "*",
        element: <PageNotFoundError />,
      }
    ]
  }
]);
export default router;
