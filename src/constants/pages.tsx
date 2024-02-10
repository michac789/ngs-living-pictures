import Content from "../pages/Content/Content";
import Foreword from "../pages/Foreword/Foreword";
import Home from "../pages/Home/Home";
import PageContent from "../pages/PageContent/PageContent";
import { essayCT } from "./essayCT";
import { essayRoy } from "./essayRoy";
import { essaySze } from "./essaySze";

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
  {
    link: '/essay_CT',
    name: 'I. Living Photographs',
    element: <PageContent data={essayCT} />
  },
  {
    link: '/essay_Sze',
    name: 'II. The Tender Insistence of Ruthless',
    element: <PageContent data={essaySze} />
  },
  {
    link: '/essay_Roy',
    name: 'III. (Other)worldly Things: The Social',
    element: <PageContent data={essayRoy} />
  },
]
