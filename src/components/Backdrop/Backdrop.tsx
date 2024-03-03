import React from "react";
import { CloseIconContainer, DarkBackdrop } from "./BackdropStyle";
import { Icon } from "../Icon/Icon";

interface BackdropProps {
  children: React.ReactNode;
  isExiting?: boolean;
  onClick?: () => void;
  onExit?: () => void;
}

export const Backdrop = ({
  children, isExiting=false, onClick, onExit,
}: BackdropProps) => {
  return (
    <>
      <DarkBackdrop
        className={isExiting ? "exiting" : ""}
        onClick={onClick}
      >
        {children}
      </DarkBackdrop>
      <CloseIconContainer>
        <Icon name="ri-close-fill" onClick={onExit} />
      </CloseIconContainer>
    </>
  )
};
