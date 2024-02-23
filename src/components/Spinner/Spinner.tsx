import React, { SVGProps } from "react";
import { SpinnerWrapper } from "./SpinnerStyle";
import { Icon } from "../Icon/Icon";

interface SpinnerProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  size?: string;
}

export const Spinner = ({ size="24px", ...props }: SpinnerProps) => {
  return (
    <SpinnerWrapper>
      <Icon name="ri-loader-4-line" size={size} {...props} />
    </SpinnerWrapper>
  )
};
