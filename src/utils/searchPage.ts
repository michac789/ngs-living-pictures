import { orderedPages } from "../constants/pages";

interface SearchResult {
  link: string;
  name: string;
  prev: string;
  match: string;
  next: string;
}

export const searchPage = (
  query: string,
  charBufferLength: number = 50
) => {
  if (!query) return [];
  const sanitizedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#]/g, "");
  const searchResults: SearchResult[] = [];
  orderedPages.forEach((page) => {
    const content = page.searchContent || "";
    const regex = new RegExp(sanitizedQuery, "gi");
    const matches = content.match(regex);
    if (matches) {
      const midIndex = content.indexOf(matches[0]);
      const start = Math.max(0, midIndex - charBufferLength);
      const end = Math.min(content.length, midIndex + matches[0].length + charBufferLength);
      searchResults.push({
        link: page.link,
        name: page.name,
        prev: content.slice(start, midIndex),
        match: matches[0],
        next: content.slice(midIndex + matches[0].length, end),
      });
    }
  });
  return searchResults;
};
