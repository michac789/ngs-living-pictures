import React, { forwardRef, useRef, useState } from "react";
import {
  ModalContainer,
  ModalContentWrapper,
  ModalTitleWrapper,
} from "./ModalStyle";
import { Backdrop } from "../Backdrop/Backdrop";
import { Portal } from "../Portal/Portal";
import { Text } from "../Text/Text";
import { useOnClickOutside } from "../../utils/useOnClickOutside";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isOpen?: boolean;
  title?: string;
  closeOnClickOutside?: boolean;
  onClose?: () => void;
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({
    children, isOpen=true, title="",
    closeOnClickOutside=true, onClose, ...props
  }: ModalProps,
    ref
  ) => {
    const [isExiting, setIsExiting] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const timeout = useRef<NodeJS.Timeout | null>(null);

    const handleClose = () => {
      setIsExiting(true);
      timeout.current = setTimeout(() => {
        onClose?.();
        setIsExiting(false);
      }, 270);
    }

    useOnClickOutside(() => {
      if (closeOnClickOutside && onClose) {
        handleClose();
      }
    }, modalRef);
  
    return isOpen ? (
      <Portal>
        <Backdrop
          isExiting={isExiting}
          onExit={handleClose}
        >
          <ModalContainer ref={modalRef}>
            {title !== "" && (
              <ModalTitleWrapper>
                <Text as="span" variant="title3">
                  {title}
                </Text>
              </ModalTitleWrapper>
            )}
            <ModalContentWrapper ref={ref} {...props}>
              {children}
            </ModalContentWrapper>
          </ModalContainer>
        </Backdrop>
      </Portal>
    ) : null;
  }
);
