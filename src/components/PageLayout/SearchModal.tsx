import React, { useRef } from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import { Portal } from "../Portal/Portal";
import { SearchModalContainer } from "./SearchModalStyle";
import { useOnClickOutside } from "../../utils/useOnClickOutside";

interface SearchModalProps {
  onClose: () => void;
}

export const SearchModal = ({
  onClose
}: SearchModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(onClose, modalRef);

  return (
    <Portal>
      <Backdrop>
        <SearchModalContainer ref={modalRef}>
          The search feature is still under development.
          Remaining TODOs:
          <ol>
            <li>Modal component, refactor backdrop there, search feature</li>
            <li>Essay page allow image side by side or float wrap text (requested from NGS)</li>
            <li>Consider migrating to gatsby for ssg</li>
          </ol>
        </SearchModalContainer>
      </Backdrop>
    </Portal>
  )
};
