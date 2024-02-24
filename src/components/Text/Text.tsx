import React, { CSSProperties, ElementType, forwardRef } from "react";
import { textVariants, TextVariant, StyledText } from "./TextStyle";

export interface TextProps extends React.HTMLAttributes<HTMLElement>{
  as?: ElementType;
  className?: string;
  children: React.ReactNode;
  color?: string;
  variant?: TextVariant;
  style?: CSSProperties;
}

export const Text = forwardRef<HTMLElement, TextProps>(({
  as,
  children,
  variant,
  style,
  ...props
}: TextProps, ref) => {
  if (variant && !textVariants.includes(variant)) {
    throw new Error(`Invalid text variant: ${variant}`);
  }
  return (
    <StyledText ref={ref} style={style} as={as} variant={variant} {...props}>
      {children}
    </StyledText>
  );
});
