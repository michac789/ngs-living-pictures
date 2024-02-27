import { metaData } from "./metadata";
import Bibliography from "../pages/Bibliography/Bibliography";
import Content from "../pages/Content/Content";
import Contributors from "../pages/Contributors/Contributors";
import Foreword from "../pages/Foreword/Foreword";
import Glossary from "../pages/Glossary/Glossary";
import Home from "../pages/Home/Home";
import ImagePlates from "../pages/ImagePlates/ImagePlates";
import ImagePlateDetail from "../pages/ImagePlates/ImagePlateDetail";
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
  isSubpage?: boolean;
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
    element: <PageContent data={essayCT} metaData={metaData.essay_CT} hasStickyMenu />,
    author: 'Chermaine Toh',
  },
  {
    link: '/essay_Sze',
    name: 'II. The Tender Insistence of Ruthless',
    element: <PageContent data={essaySze} metaData={metaData.essay_Sze} hasStickyMenu />,
    author: 'Sze Ying Goh',
  },
  {
    link: '/essay_Roy',
    name: 'III. (Other)worldly Things: The Social and Material Lives of Photographs in Southeast Asia',
    element: <PageContent data={essayRoy} metaData={metaData.essay_Roy} hasStickyMenu />,
    author: 'Roy Ng',
  },
  {
    link: '/image-plates',
    name: 'Image Plates',
    element: <ImagePlates />,
  },
  {
    link: '/image-plates/1',
    name: 'Colonial Archive / King Washerman',
    element: <ImagePlateDetail />,
    isSubpage: true,
  },
  {
    link: '/image-plates/2',
    name: 'New Subjectivity / Tabled',
    element: <ImagePlateDetail />,
    isSubpage: true,
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
    element: <PageContent data={about} metaData={metaData.about} />,
  },
  {
    link: '/image-slider',
    name: 'Image Slider',
    element: <ImageSlider />,
  },
  {
    link: '/glossary',
    name: 'Glossary',
    element: <Glossary />,
  },
]
