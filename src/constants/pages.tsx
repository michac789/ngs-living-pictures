import Bibliography from "../pages/Bibliography/Bibliography";
import Content from "../pages/Content/Content";
import Contributors from "../pages/Contributors/Contributors";
import Foreword from "../pages/Foreword/Foreword";
import Home from "../pages/Home/Home";
import ImagePlates from "../pages/ImagePlates/ImagePlates";
import ImageSlider from "../pages/ImageSlider/ImageSlider";
import { PageContent } from "../components/PageContent/PageContent";
import { about } from "./essays/about";
import { essayCT } from "./essays/essayCT";
import { essayRoy } from "./essays/essayRoy";
import { essaySze } from "./essays/essaySze";

interface SinglePage {
  link: string;
  name: string;
  author?: string;
  element: React.ReactNode;
}

export const orderedPages: SinglePage[] = [
  {
    link: '/',
    name: 'Cover',
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
    author: 'Eugene Tan',
  },
  {
    link: '/essay_CT',
    name: 'I. Living Photographs',
    element: <PageContent data={essayCT} />,
    author: 'Chermaine Toh',
  },
  {
    link: '/essay_Sze',
    name: 'II. The Tender Insistence of Ruthless',
    element: <PageContent data={essaySze} />,
    author: 'Sze Ying Goh',
  },
  {
    link: '/essay_Roy',
    name: 'III. (Other)worldly Things: The Social and Material Lives of Photographs in Southeast Asia',
    element: <PageContent data={essayRoy} />,
    author: 'Roy Ng',
  },
  {
    link: '/image-plates',
    name: 'Image Plates',
    element: <ImagePlates />,
  },
  {
    link: '/bibliography',
    name: 'Bibliography',
    element: <Bibliography />,
  },
  {
    link: '/contributors',
    name: 'Contributors',
    element: <Contributors />,
  },
  {
    link: '/about',
    name: 'About Living Pictures Exhibition',
    element: <PageContent data={about} />,
  },
  {
    link: '/image-slider',
    name: 'Image Slider',
    element: <ImageSlider />,
  },
]
