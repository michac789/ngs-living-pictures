import React from "react";
import ReactPlayer from "react-player";
import { createBrowserRouter } from "react-router-dom";
import { orderedPages } from "./constants/pages";
import { PageNotFoundError } from "./components/Error/Error";
import { PageContent } from "./components/PageContent/PageContent";
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
        path: "easter-egg",
        element: <PageContent data={{ title: "Easter Egg 🥚" }} style={{ height: "60vh", width: "90%" }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            playing={true}
            muted={false}
            controls={false}
            width="100%"
            height="100%"
          />
          -michac789
        </PageContent>,
      },
      {
        path: "*",
        element: <PageNotFoundError />,
      }
    ]
  }
]);
export default router;
