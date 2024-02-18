
interface GlossaryItem {
  name: string;
  description: string;
}

export const artistGlossary: GlossaryItem[] = [
  {
    name: 'Leonardo da Vinci',
    description: 'Italian Renaissance polymath known for paintings like the Mona Lisa and The Last Supper.',
  },
  {
    name: 'Vincent van Gogh',
    description: 'Dutch Post-Impressionist painter known for works such as Starry Night and Sunflowers.',
  },
  {
    name: 'Pablo Picasso',
    description: 'Spanish painter and sculptor, co-founder of Cubism, known for works like Guernica.',
  },
  {
    name: 'Claude Monet',
    description: 'French Impressionist painter known for his series of paintings of water lilies and haystacks.',
  },
];

export const artworkGlossary: GlossaryItem[] = [
  {
    name: 'Starry Night',
    description: 'Oil painting by Vincent van Gogh, known for its swirling night sky and cypress tree.',
  },
  {
    name: 'Mona Lisa',
    description: 'Portrait painting by Leonardo da Vinci, widely considered one of the most famous artworks.',
  },
  {
    name: 'Guernica',
    description: 'Large mural painting by Pablo Picasso, depicting the horrors of the bombing of Guernica.',
  },
  {
    name: 'Water Lilies',
    description: 'Series of paintings by Claude Monet, featuring his water garden at Giverny.',
  },
];
