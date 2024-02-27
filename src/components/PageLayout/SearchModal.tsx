import React, { useRef } from "react";
import { Portal } from "../Portal/Portal";
import { DarkBackdrop } from "../ImagePreview/ImagePreviewStyle";
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
      <DarkBackdrop>
        <SearchModalContainer ref={modalRef}>
          The search feature is still under development.
          Remaining TODOs:
          <ol>
            <li>Modal component, refactor backdrop there, search feature</li>
            <li>Image plates detail page</li>
            <li>Responsive design</li>
            <li>Essay page allow image side by side or float wrap text</li>
            <li>Automate PDF in AWS S3 upload for sidebar when clicked</li>
            <li>Consider migrating to gatsby for ssd</li>
          </ol>
        </SearchModalContainer>
      </DarkBackdrop>
    </Portal>
  )
};
