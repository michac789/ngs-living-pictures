import React, { useRef, useState } from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import { Portal } from "../Portal/Portal";
import { SearchModalContainer } from "./SearchModalStyle";
import { useOnClickOutside } from "../../utils/useOnClickOutside";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({
  isOpen, onClose
}: SearchModalProps) => {
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const timeout = useRef<NodeJS.Timeout | null>(null);

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
          Remaining TODOs:
          <ol>
            <li>Improve search feature functionality and UI</li>
            <li>Essay page allow image side by side or float wrap text (requested from NGS)</li>
            <li>Consider migrating to gatsby for ssg</li>
          </ol>
        </SearchModalContainer>
      </Backdrop>
    </Portal>
  ) : null;
};
