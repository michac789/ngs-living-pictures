
interface EssayEntry {
  title: string;
  url: string;
}

export interface ContributorEntry {
  name: string;
  descriptionMd: string;
  imageUrl: string;
  portfolioUrl?: string;
  essays: EssayEntry[];
}

export const contributorList: ContributorEntry[] = [
  {
    'name': 'Sze Ying Goh',
    'descriptionMd': 'Goh Sze Ying is Curator at National Gallery Singapore. She has worked on exhibitions including *Living Pictures: Photography in Southeast Asia (2022)*, *Ever Present: First Peoples Art of Australia (2022)*, *Minimalism: Space. Light. Object. (2018)*. In 2019, she also co-curated the 6<sup>th</sup> edition of the Singapore Biennale, *Every Step in the Right Direction*.',
    'imageUrl': 'contributors/Sze.webp',
    'portfolioUrl': 'https://about.me/sze',
    'essays': [
      {
        'title': 'II. The Tender Insistence of Ruthless Remembering',
        'url': '/essay_Sze'
      }
    ]
  },
  {
    'name': 'Roy Ng',
    'descriptionMd': 'Roy Ng is Assistant Curator at National Gallery Singapore.',
    'imageUrl': 'contributors/Roy.webp',
    'essays': [
      {
        'title': 'III. (Other)worldly Things: The Social and Material Lives of Photographs in Southeast Asia',
        'url': '/essay_Roy'
      }
    ]
  },
  {
    'name': 'Eugene Tan',
    'descriptionMd': 'Dr. Eugene Tan is Museum Director of both National Gallery Singapore (NGS) and Singapore Art Museum (SAM).',
    'imageUrl': 'contributors/ET.webp',
    'essays': [
      {
        'title': 'Foreword',
        'url': '/foreword'
      }
    ]
  },
  {
    'name': 'Charmaine Toh',
    'descriptionMd': 'Charmaine Toh earned her PhD at the University of Melbourne, researching pictorial photography in Singapore from the 1950s to 1970s. She was Senior Curator at National Gallery Singapore where she worked on exhibitions such as *Siapa Nama Kamu: Art in Singapore since the 19th Century* (2015), *Earthwork 1979* (2016) and *Living Pictures* (2022). Previously, Charmaine was the Programme Director at Objectifs Centre for Photography and Film. She co-curated the 2013 Singapore Biennale.',
    'imageUrl': 'contributors/CT.webp',
    'essays': [
      {
        'title': 'I. Living Photographs',
        'url': '/essay_CT'
      }
    ]
  },
]
