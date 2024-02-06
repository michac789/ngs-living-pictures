import React, { SVGProps } from 'react';
import { icons, IconName } from './Icons';
import { colors } from '../../constants/colors';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: string;
  padding?: string;
};

export const Icon = ({
  name, size, ...props
}: IconProps) => {
  const iconSvg = icons[name];
  if (!iconSvg) {
    throw new Error(`Icon '${name}' does not exist`);
  }
  return (
    <svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      fill={colors.Neutral200}
      stroke={colors.Neutral600}
      {...props}
    >
      {iconSvg}
    </svg>
  );
};