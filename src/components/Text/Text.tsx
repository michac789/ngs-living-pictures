import React, { CSSProperties, ElementType } from "react";
import { textVariants, TextVariant, StyledText } from "./TextStyle";

export interface TextProps {
  as?: ElementType;
  className?: string;
  children: React.ReactNode;
  color?: string;
  variant?: TextVariant;
  style?: CSSProperties;
}

export const Text = ({
  as,
  children,
  variant,
  style,
  ...props
}: TextProps) => {
  if (variant && !textVariants.includes(variant)) {
    throw new Error(`Invalid text variant: ${variant}`);
  }
  return (
    <StyledText style={style} as={as} variant={variant} {...props}>
      {children}
    </StyledText>
  );
};
