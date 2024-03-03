import styled from "styled-components";
import { Text } from "../Text/Text";
import { textVariantMapping } from "../Text/TextStyle";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const ImagePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const StyledImagePreview = styled.img`
  max-width: 100%;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.75);
  }

  @media (max-width: ${breakpoints.small}) {
    max-width: 100%;
    max-height: calc(100% - 64px);
  }
`;

export const CaptionContainer = styled.div`
  padding: 4px 4px 0;

  & div {
    ${textVariantMapping.body2};
  }

  & p {
    margin: 0 0 12px;
  }

  @media (max-width: ${breakpoints.small}) {
    & p {
      margin: 0 0 4px;
    }
  }
`;

export const FigureNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  svg {
    fill: ${colors.Red500};
    stroke: ${colors.Red500};
    height: 16px;
    width: 16px;
  }
  &:hover svg {
    fill: ${colors.Red600};
    stroke: ${colors.Red600};
  }

  @media (max-width: ${breakpoints.medium}) {
    svg {
      height: 14px;
      width: 14px;
    }
  }
`;

export const StyledFigureName = styled(Text)`
  font-weight: 600;
  color: ${colors.Red500};

  &:hover {
    color: ${colors.Red600};
  }
`;

export const ZoomedImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ImageCaptionWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: calc(100% - 32px);
  padding: 16px;

  background-color: rgba(35, 35, 35, 0.5);
  z-index: 4000;
  span {
    color: ${colors.Neutral200};
  }
  & div {
    ${textVariantMapping.body2};
    color: ${colors.Neutral200};
  }
  & p {
    margin: 0;
  }

  transition: all 0.3s ease-in-out;
  animation: fadeIn 0.3s ease;
  &.exiting {
    animation: fadeOut 0.3s ease;
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 8px;
    width: calc(100% - 16px);
  }
`;
