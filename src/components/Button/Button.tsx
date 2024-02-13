import React, { forwardRef } from "react";
import { ButtonContainer } from "./ButtonStyle";

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  type?: "primary" | "secondary";
}

export const Button = forwardRef<HTMLDivElement, ButtonProps>(
  ({
    children,
    onClick,
    fullWidth = false,
    icon,
    iconPosition = "left",
    type="primary",
    ...props
  }, ref) => {
    return (
      <ButtonContainer
        onClick={onClick}
        data-full-width={fullWidth}
        data-type={type}
        {...props}
        ref={ref}
      >
        {iconPosition === "left" && icon}
        {children}
        {iconPosition === "right" && icon}
      </ButtonContainer>
    );
  }
);
