import React from "react";
import {
  CaptionContainer,
  FigureNameWrapper,
  StyledFigureName,
  StyledImagePreview
} from "./ImagePreviewStyle";
import { Icon } from "../Icon/Icon";
import { Markdown } from "../Markdown/Markdown";

interface ImagePreviewProps {
  imageUrl: string;
  label: string;
  caption: string;
}

export const ImagePreview = ({
  imageUrl, label, caption
}: ImagePreviewProps) => {
  const image = require(`../../assets/${imageUrl}`);

  return (
    <>
      <StyledImagePreview src={image} alt={label} />
      <CaptionContainer>
        <FigureNameWrapper>
          <Icon name="ri-zoom-in-line" size="16px" />
          <StyledFigureName variant="body2" as="span">
            {label}
          </StyledFigureName>
        </FigureNameWrapper>
        <Markdown value={caption} />
      </CaptionContainer>
    </>
  )
};
