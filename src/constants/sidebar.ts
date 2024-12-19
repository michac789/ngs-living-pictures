import { getTodayDate } from "../utils/getTodayDate";

export const productionUrl = 'https://ngs.michac789.com/';

export const sidebarConstants = {
  subtitle: 'Charmaine Toh',
  title: 'Living Pictures: Photography in Southeast Asia',
  citations: [
    {
      'format': 'Chicago',
      'text': `Toh, Chermaine. *Living Pictures: Photography in Southeast Asia*. Singapore: National Gallery Singapore, 2024. ${productionUrl}.`,
    },
    {
      'format': 'MLA',
      'text': `Toh, Chermaine. “Living Pictures: Photography in Southeast Asia”, *National Gallery Singapore*, ${productionUrl}. Accessed ${getTodayDate()}.`,
    },
  ],
  pdfFormatLink: 'https://s3-bucket-public.s3.ap-southeast-1.amazonaws.com/sample-large-pdf',
};
