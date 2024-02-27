import React, { useEffect, useRef, useState } from "react";
import {
  CaptionContainer,
  CloseIconContainer,
  DarkBackdrop,
  FigureNameWrapper,
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
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const zoomedImageRef = useRef<HTMLImageElement>(null);
  const zoomedCaptionRef = useRef<HTMLDivElement>(null);
  
  const image = imageUrl.startsWith("*") ? imageUrl.slice(1) :
    require(`../../assets/${imageUrl}`);
  
  const timeout = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  useOnClickOutside(() => {
    handleExitZoom();
  }, zoomedImageRef, zoomedCaptionRef);

  const handleZoom = () => {
    setIsZoomed(true);
  }

  const handleExitZoom = () => {
    setIsExiting(true);
    timeout.current = setTimeout(() => {
      setIsZoomed(false);
      setIsExiting(false);
    }, 270);
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
          <DarkBackdrop className={isExiting ? "exiting" : ""}>
            <ZoomedImage src={image} alt={label} ref={zoomedImageRef} />
          </DarkBackdrop>
          <CloseIconContainer>
            <Icon name="ri-close-fill" onClick={handleExitZoom} />
          </CloseIconContainer>
          <ImageCaptionWrapper
            ref={zoomedCaptionRef}
            className={isExiting ? "exiting" : ""}
          >
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
