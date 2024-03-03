import React, { useRef, useState } from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import { Portal } from "../Portal/Portal";
import { SearchModalContainer } from "./SearchModalStyle";
import { useDebounce } from "../../utils/useDebounce";
import { useOnClickOutside } from "../../utils/useOnClickOutside";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({
  isOpen, onClose
}: SearchModalProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const debouncedSearchValue = useDebounce(searchValue);

  const handleClose = () => {
    setIsExiting(true);
    timeout.current = setTimeout(() => {
      onClose();
      setIsExiting(false);
    }, 270);
  }

  useOnClickOutside(handleClose, modalRef);

  return isOpen ? (
    <Portal>
      <Backdrop
        isExiting={isExiting}
        onExit={handleClose}
      >
        <SearchModalContainer ref={modalRef}>
          <div>
            Remaining TODOs:
            <ol>
              <li>Improve search feature functionality and UI</li>
              <li>Essay page allow image side by side or float wrap text (requested from NGS)</li>
              <li>Consider migrating to gatsby for ssg</li>
            </ol>
          </div>
          <div>
            Search query:
            <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <div>
              Debounced value: {debouncedSearchValue}
            </div>
          </div>
        </SearchModalContainer>
      </Backdrop>
    </Portal>
  ) : null;
};
