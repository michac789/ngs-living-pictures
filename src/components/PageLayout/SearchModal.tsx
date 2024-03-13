import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SearchResultsContainer,
  SingleResultContainer,
  StyledSearchModal,
} from "./SearchModalStyle";
import { Modal } from "../Modal/Modal";
import { Text } from "../Text/Text";
import { searchPage } from "../../utils/searchPage";
import { useDebounce } from "../../utils/useDebounce";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPageChange: () => void;
}

export const SearchModal = ({
  isOpen, onClose, onPageChange,
}: SearchModalProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue);
  const searchResults = searchPage(debouncedSearchValue);
  const navigate = useNavigate();

  const handleNavigate = (link: string) => {
    onClose();
    navigate(link);
    onPageChange();
  }

  return (
    <StyledSearchModal isOpen={isOpen} onClose={onClose} title="Search Page">
      <div>
        This search feature is still under progress.
        Remaining TODOs:
        <ol>
          <li>Improve search feature functionality and UI</li>
          <li>Essay page allow image side by side or float wrap text (requested from NGS)</li>
          <li>Consider migrating to gatsby for ssg</li>
        </ol>
      </div>
      <div>
        Search query:
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          autoFocus
        />
        <div>
          Debounced value: {debouncedSearchValue}
        </div>
      </div>
      <SearchResultsContainer>
        <Text variant="subtitle3">
          Search results:
        </Text>
        {searchResults.map((page) => (
          <SingleResultContainer
            key={page.link}
            onClick={() => handleNavigate(page.link)}
          >
            <Text variant="subtitle3">
              <u>{page.name}</u>
            </Text>
            <Text variant="body2">
              ...{page.prev}<b>{page.match}</b>{page.next}...
            </Text>
          </SingleResultContainer>
        ))}
        {searchResults.length === 0 && (
          <div>Empty search results</div>
        )}
      </SearchResultsContainer>
    </StyledSearchModal>
  )
};
