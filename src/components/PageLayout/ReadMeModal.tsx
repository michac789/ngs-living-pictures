import React from "react";
import { Modal } from "../Modal/Modal";
import { Text } from "../Text/Text";

interface ReadMeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReadMeModal = ({
  isOpen, onClose,
}: ReadMeModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="About This Site">
      <Text variant="subtitle3" style={{ margin: "8px 8px 4px" }}>
        Title
      </Text>
      <Text variant="body2" style={{ margin: "4px 8px" }}>
        TODO - add content here
      </Text>
    </Modal>
  )
};
