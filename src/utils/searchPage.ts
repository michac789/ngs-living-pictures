import { orderedPages } from "../constants/pages";

interface SearchResult {
  link: string;
  name: string;
  prev: string;
  match: string;
  next: string;
}

export const searchPage = (query: string) => {
  if (!query) return [];
  const searchResults: SearchResult[] = [];
  orderedPages.forEach((page) => {
    const content = page.searchContent || "";
    const regex = new RegExp(query, "gi");
    const matches = content.match(regex);
    if (matches) {
      const midIndex = content.indexOf(matches[0]);
      const start = Math.max(0, midIndex - 30);
      const end = Math.min(content.length, midIndex + matches[0].length + 30);
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
