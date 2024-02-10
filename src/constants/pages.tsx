import Content from "../pages/Content/Content";
import Foreword from "../pages/Foreword/Foreword";
import Home from "../pages/Home/Home";
import ImagePlates from "../pages/ImagePlates/ImagePlates";
import PageContent from "../pages/PageContent/PageContent";
import { about } from "./about";
import { bibliography } from "./bibliography";
import { contributors } from "./contributors";
import { essayCT } from "./essayCT";
import { essayRoy } from "./essayRoy";
import { essaySze } from "./essaySze";

interface SinglePage {
  link: string;
  name: string;
  element: React.ReactNode;
}

export const orderedPages: SinglePage[] = [
  {
    link: "/",
    name: "Cover",
    element: <Home />,
  },
  {
    link: '/content',
    name: 'Contents',
    element: <Content />,
  },
  {
    link: '/foreword',
    name: 'Foreword',
    element: <Foreword />,
  },
  {
    link: '/essay_CT',
    name: 'I. Living Photographs',
    element: <PageContent data={essayCT} />,
  },
  {
    link: '/essay_Sze',
    name: 'II. The Tender Insistence of Ruthless',
    element: <PageContent data={essaySze} />,
  },
  {
    link: '/essay_Roy',
    name: 'III. (Other)worldly Things: The Social',
    element: <PageContent data={essayRoy} />,
  },
  {
    link: '/image-plates',
    name: 'Image Plates',
    element: <ImagePlates />,
  },
  {
    link: '/bibliography',
    name: 'Bibliography',
    element: <PageContent data={bibliography} />,
  },
  {
    link: '/contributors',
    name: 'Contributors',
    element: <PageContent data={contributors} />,
  },
  {
    link: '/about',
    name: 'About Living Pictures Exhibition',
    element: <PageContent data={about} />,
  },
]
