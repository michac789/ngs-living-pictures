import React, { useEffect, useRef, useState } from "react";
import {
  CaptionContainer,
  FigureNameWrapper,
  ImageCaptionWrapper,
  ImagePreviewContainer,
  StyledFigureName,
  StyledImagePreview,
  ZoomedImage,
} from "./ImagePreviewStyle";
import { Backdrop } from "../Backdrop/Backdrop";
import { Icon } from "../Icon/Icon";
import { Portal } from "../Portal/Portal";
import { Markdown } from "../Markdown/Markdown";
import { Text } from "../Text/Text";
import { useOnClickOutside } from "../../utils/useOnClickOutside";

interface ImagePreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  label: string;
  caption: string;
}

export const ImagePreview = ({
  imageUrl, label, caption, ...props
}: ImagePreviewProps) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const zoomedImageRef = useRef<HTMLImageElement>(null);
  const zoomedCaptionRef = useRef<HTMLDivElement>(null);

  let image;
  try {
    image = imageUrl.startsWith("*") ? imageUrl.slice(1) :
      require(`../../assets/${imageUrl}`);
  } catch (e) {
    console.warn(`Image ${imageUrl} not found, please check that you entered the correct path`);
  }
  
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
    <ImagePreviewContainer {...props}>
      <StyledImagePreview src={image} alt={label} onClick={handleZoom} />
      <CaptionContainer>
        <FigureNameWrapper onClick={handleZoom}>
          <Icon name="ri-fullscreen-fill" />
          <StyledFigureName variant="body2" as="span">
            {label}
          </StyledFigureName>
        </FigureNameWrapper>
        <Markdown value={caption} />
      </CaptionContainer>
      {isZoomed && (
        <Portal>
          <Backdrop isExiting={isExiting} onExit={handleExitZoom}>
            <ZoomedImage src={image} alt={label} ref={zoomedImageRef} />
          </Backdrop>
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
    </ImagePreviewContainer>
  )
};
