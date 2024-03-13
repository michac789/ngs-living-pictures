import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NotFoundContainer,
  NotFoundImage,
  SearchResultsContainer,
  SingleResultContainer,
} from "./SearchModalStyle";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";
import { Text } from "../Text/Text";
import { searchPage } from "../../utils/searchPage";
import { useDebounce } from "../../utils/useDebounce";
import NotFoundImg from "../../assets/notfound.webp";

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
    <Modal isOpen={isOpen} onClose={onClose} title="Search Page">
      <Input
        label="Search Input:"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Type your search query here..."
        autoFocus
        fullWidth
      />
      <Text variant="subtitle3" style={{ margin: "8px 8px 4px" }}>
        Search results:
      </Text>
      <SearchResultsContainer>
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
          <NotFoundContainer>
            <NotFoundImage src={NotFoundImg} alt="Not Found Error" />
            <Text variant="button">
              No results found!
            </Text>
          </NotFoundContainer>
        )}
      </SearchResultsContainer>
    </Modal>
  )
};
