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
  name: string;
  caption: string;
}

export const ImagePreview = ({
  imageUrl, name, caption
}: ImagePreviewProps) => {
  const image = require(`../../assets/${imageUrl}`);

  return (
    <>
      <StyledImagePreview src={image} alt={name} />
      <CaptionContainer>
        <FigureNameWrapper>
          <Icon name="ri-zoom-in-line" size="16px" />
          <StyledFigureName variant="body2" as="span">
            {name}
          </StyledFigureName>
        </FigureNameWrapper>
        <Markdown value={caption} />
      </CaptionContainer>
    </>
  )
};
