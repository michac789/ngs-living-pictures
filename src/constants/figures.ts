
interface SingleFigure {
  id: string;
  imageUrl: string;
  label: string;
  caption: string;
}

export const figures: SingleFigure[] = [
  {
    id: "1",
    imageUrl: "figures/fig1.webp",
    label: "Figure 1",
    caption: "G.R. Lambert & Co. *Indian Dhobies* (inscribed as “Kling Washermen”). Early 20<sup>th</sup> century. Gelatin silver print on paper, 21.4 × 15.9 cm. Collection of National Museum of Singapore, National Heritage Board, Singapore"
  },
  {
    id: "2",
    imageUrl: "figures/fig2.webp",
    label: "Figure 2",
    caption: "Robert Lenz. *King Chulalongkorn*. Early 1890s. Albumen print on paper, 22 × 16.2 cm. Collection of Mr and Mrs Lee"
  },
  {
    id: "3",
    imageUrl: "figures/fig3.webp",
    label: "Figure 3",
    caption: "Yee I-Lann, Detail of *Tabled*, 2013. Collection of Singapore Art Museum. Image courtesy of the artist and Silverlens",
  },
  {
    id: "sampleId",
    imageUrl: "figures/fig5.webp",
    label: 'Sample Image Label',
    caption: 'Sample Image Caption, you can edit this in `figures.ts`',
  },
]
