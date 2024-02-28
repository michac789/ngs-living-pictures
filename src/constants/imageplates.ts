
export interface ImagePlate {
  imageUrl: string;
  title: string;
  pageUrl: string;
}

export const imagePlatesData: ImagePlate[] = [
  {
    "imageUrl": "figures/fig1.jpg",
    "title": "Colonial Archive / King Washerman",
    "pageUrl": "/image-plates/1",
  },
  {
    "imageUrl": "figures/fig3.jpg",
    "title": "New Subjectivity / Tabled",
    "pageUrl": "/image-plates/2",
  },
  {
    "imageUrl": "figures/fig4.jpg",
    "title": "This is a test on what will happen when you have a very long title like this. Let me make this text even longer so you can see that maximum the cards can only fit in 3 lines. If it is more than 3 lines, you will see a scrollbar instead. Try not to exceed 3 lines to prevent the scrollbar from showing like this.",
    "pageUrl": "*https://www.youtube.com/watch?v=xvFZjo5PgG0",
  },
  {
    "imageUrl": "figures/fig4.jpg",
    "title": "Try to have a 1x1 aspect ratio image to prevent blank spaces on top or sides",
    "pageUrl": "*https://www.youtube.com/watch?v=xvFZjo5PgG0",
  },
  {
    "imageUrl": "figures/fig4.jpg",
    "title": "This is a flex layout, try making the screen smaller and see how the cards look",
    "pageUrl": "*https://www.youtube.com/watch?v=xvFZjo5PgG0",
  },
  {
    "imageUrl": "figures/fig4.jpg",
    "title": "Test",
    "pageUrl": "*https://www.youtube.com/watch?v=xvFZjo5PgG0",
  },
]

export interface SingleImagePlateDetail {
  id: number;
  figureId: number;
  header: {
    name: string;
    content: string;
  }[];
  description: string;
  sections: {
    title: string;
    content: string;
  }[];
}

export const imagePlatesDetailData: SingleImagePlateDetail[] = [
  {
    "id": 1,
    "figureId": 1,
    "header": [
      {
        "name": "Artist",
        "content": "G.R. Lambert & Co",
      },
      {
        "name": "Year",
        "content": "Early 20<sup>th</sup> century",
      },
      {
        "name": "Dimensions",
        "content": "21.4 cm × 15.9 cm (8.4 in × 10 in.)"
      },
      {
        "name": "Medium",
        "content": "Gelatin silver print on paper",
      },
      {
        "name": "Location",
        "content": "National Museum Singapore",
      },
    ],
    "description": "Taken inside a studio, it is unknown if the two men really were washermen or simply pretending to be. Either way, it would not have mattered to either the photographer or the future customer, who were more interested in a representation of race and occupation, rather than in the men themselves.",
    "sections": [
      {
        "title": "Exhibitions",
        "content": "*Living Pictures: Photography in Southeast Asia*, National Gallery Singapore, December 2 2022 – August 20, 2023",
      },
      {
        "title": "Bibliography",
        "content": "*Living Pictures*. (2022). In National Gallery Singapore eBooks. https://doi.org/10.1353/book.110798",
      },
    ],
  },
  {
    "id": 2,
    "figureId": 3,
    "header": [
      {
        "name": "Artist",
        "content": "Yee I-Lann",
      },
      {
        "name": "Year",
        "content": "2013",
      },
      {
        "name": "Dimensions",
        "content": "195 cm × 312 cm (180 <sup>709</sup>⁄<sub>1000</sub> × 122 <sup>167</sup>⁄<sub>200</sub> in.)"
      },
      {
        "name": "Medium",
        "content": "Ceramic rimmed flat plates with digital decal prints and back-stamp",
      },
      {
        "name": "Location",
        "content": "Singapore Art Museum",
      },
    ],
    "description": "*Tabled* by Yee I-Lann was first exhibited in Suspended Histories in 2013. Along with ten other artists, Yee was invited to create a work in response to Museum Van Loon, which was at one point the home of the Van Loon family who had history with the Dutch East India Company.",
    "sections": [
      {
        "title": "Exhibitions",
        "content": "*Living Pictures: Photography in Southeast Asia*, National Gallery Singapore, December 2 2022 – August 20, 2023",
      },
    ],
  },
]
