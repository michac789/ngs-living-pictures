import styled, { css } from "styled-components";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const textVariants = [
  'title1',
  'title2',
  'title3',
  'subtitle1',
  'subtitle2',
  'subtitle3',
  'body1',
  'body2',
  'button',
] as const;
export type TextVariant = (typeof textVariants)[number];

const title1 = css`
  font-family: 'Noto Sans', 'sans-serif';
  font-size: 54px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: 0px;
  color: ${colors.Neutral800};

  @media (max-width: ${breakpoints.medium}) {
    font-size: 40px;
  }
`;

const title2 = css`
  font-family: 'Noto Sans', 'sans-serif';
  font-size: 40px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: 0px;
  color: ${colors.Neutral800};

  @media (max-width: ${breakpoints.medium}) {
    font-size: 28px;
  }
`;

const title3 = css`
  font-family: 'Noto Sans', 'sans-serif';
  font-size: 24px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: ${colors.Neutral800};

  @media (max-width: ${breakpoints.medium}) {
    font-size: 18px;
  }
`;

const subtitle1 = css`
  font-family: 'Noto Sans', 'sans-serif';
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0px;
  font-style: italic;
  color: ${colors.Neutral800};

  @media (max-width: ${breakpoints.medium}) {
    font-size: 20px;
  }
`;

const subtitle2 = css`
  font-family: 'Noto Sans', 'sans-serif';
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.5px;
  font-style: italic;
  color: ${colors.Neutral800};

  @media (max-width: ${breakpoints.medium}) {
    font-size: 14px;
  }
`;

const subtitle3 = css`
  font-family: 'Noto Sans', 'sans-serif';
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.3px;
  color: ${colors.Neutral800};

  @media (max-width: ${breakpoints.medium}) {
    font-size: 12px;
  }
`;

const body1 = css`
  font-family: 'Noto Sans', 'sans-serif';
  font-size: 18px;
  font-weight: 400;
  line-height: 2;
  letter-spacing: 0.15px;
  color: ${colors.Neutral800};

  @media (max-width: ${breakpoints.medium}) {
    font-size: 14px;
  }
`;

const body2 = css`
  font-family: 'Noto Sans', 'sans-serif';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0px;
  color: ${colors.Neutral800};

  @media (max-width: ${breakpoints.medium}) {
    font-size: 10px;
  }
`;

const button = css`
  font-family: 'Noto Sans', 'sans-serif';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.75px;
  color: ${colors.Neutral800};

  @media (max-width: ${breakpoints.medium}) {
    font-size: 16px;
  }
`;

export const textVariantMapping: {
  [key in TextVariant]: any
} = {
  'title1': title1,
  'title2': title2,
  'title3': title3,
  'subtitle1': subtitle1,
  'subtitle2': subtitle2,
  'subtitle3': subtitle3,
  'body1': body1,
  'body2': body2,
  'button': button,
};

interface StyledTextProps {
  color: string;
  variant: TextVariant;
};

export const StyledText = styled.div<StyledTextProps>`
  ${props => textVariantMapping[props.variant]}
  color: ${props => props.color};
`;
