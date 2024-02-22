import { BibliographyEntry, bibliographyList } from "../constants/bibliography";

export const getBibliographyContents = (text: string): BibliographyEntry[] => {
  const regex = /\{% cite '(.*?)' %\}/g;
  const matches: string[] = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    matches.push(match[1]);
  }
  const bibliographyEntries: BibliographyEntry[] = [];
  for (let i = 0; i < matches.length; i++) {
    const bibliographyEntry = bibliographyList.find(entry => entry.id === matches[i]);
    if (bibliographyEntry) {
      bibliographyEntries.push(bibliographyEntry);
    }
  }
  return bibliographyEntries;
};
