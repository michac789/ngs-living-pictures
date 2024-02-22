import React, { useRef, useState } from "react";
import {
  CaptionContainer,
  CloseIconContainer,
  FigureNameWrapper,
  ImageBackdrop,
  ImageCaptionWrapper,
  StyledFigureName,
  StyledImagePreview,
  ZoomedImage,
} from "./ImagePreviewStyle";
import { Icon } from "../Icon/Icon";
import { Portal } from "../Portal/Portal";
import { Markdown } from "../Markdown/Markdown";
import { Text } from "../Text/Text";
import { useOnClickOutside } from "../../utils/useOnClickOutside";

interface ImagePreviewProps {
  imageUrl: string;
  label: string;
  caption: string;
}

export const ImagePreview = ({
  imageUrl, label, caption
}: ImagePreviewProps) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const zoomedImageRef = useRef<HTMLImageElement>(null);
  const zoomedCaptionRef = useRef<HTMLDivElement>(null);

  const image = require(`../../assets/${imageUrl}`);

  useOnClickOutside(() => {
    setIsZoomed(false);
  }, zoomedImageRef, zoomedCaptionRef);

  const handleZoom = () => {
    setIsZoomed(true);
  }

  return (
    <>
      <StyledImagePreview src={image} alt={label} onClick={handleZoom} />
      <CaptionContainer>
        <FigureNameWrapper onClick={handleZoom}>
          <Icon name="ri-fullscreen-fill" size="16px" />
          <StyledFigureName variant="body2" as="span">
            {label}
          </StyledFigureName>
        </FigureNameWrapper>
        <Markdown value={caption} />
      </CaptionContainer>
      {isZoomed && (
        <Portal>
          <ImageBackdrop>
            <ZoomedImage src={image} alt={label} ref={zoomedImageRef} />
          </ImageBackdrop>
          <CloseIconContainer>
            <Icon name="ri-close-fill" onClick={() => setIsZoomed(false)} />
          </CloseIconContainer>
          <ImageCaptionWrapper ref={zoomedCaptionRef}>
            <Text variant="body2" as="span" style={{ fontWeight: 600 }}>
              {label}.&nbsp;
            </Text>
            <Markdown value={caption} />
          </ImageCaptionWrapper>
        </Portal>
      )}
    </>
  )
};
