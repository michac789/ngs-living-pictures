import React, { SVGProps } from 'react';
import { icons, IconName } from './Icons';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: string;
}

export const Icon = ({
  name, size, ...props
}: IconProps) => {
  const iconSvg = icons[name];
  if (!iconSvg) {
    throw new Error(`Icon '${name}' does not exist`);
  }
  return (
    <svg height={size} width={size} {...props}>
      {iconSvg}
    </svg>
  );
}
