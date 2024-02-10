import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PageLayout from "./pages/PageLayout/PageLayout";

import Content from "./pages/Content/Content";
import Foreword from "./pages/Foreword/Foreword";
import Home from "./pages/Home/Home";

import ColorPalette from "./pages/_Internal/ColorPalette";
import Typography from "./pages/_Internal/Typography";

export const orderedPages: {
  link: string;
  name: string;
  element: React.ReactNode;
}[] = [
  {
    link: "/",
    name: "Cover",
    element: <Home />
  },
  {
    link: '/content',
    name: 'Contents',
    element: <Content />
  },
  {
    link: '/foreword',
    name: 'Foreword',
    element: <Foreword />
  },
]

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
