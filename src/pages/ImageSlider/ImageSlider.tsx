import React, { useRef, useState } from "react";
import {
  ImageSliderContainer,
  LeftButtonContainer,
  ImageCountTextWrapper,
  PageContainer,
  RightButtonContainer,
  StyledIcon,
  StyledImage,
  CaptionTextWrapper,
} from "./ImageSliderStyle";
import { Backdrop } from "../../components/Backdrop/Backdrop";
import { ImageCaptionWrapper, ZoomedImage } from "../../components/ImagePreview/ImagePreviewStyle";
import { Portal } from "../../components/Portal/Portal";
import { Markdown } from "../../components/Markdown/Markdown";
import { MetaData } from "../../components/MetaData/MetaData";
import { NavButton } from "../../components/NavButton/NavButton";
import { images } from "../../constants/imageslider";
import { metaData } from "../../constants/metadata";
import { useOnClickOutside } from "../../utils/useOnClickOutside";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const zoomedImageRef = useRef<HTMLImageElement>(null);
  const zoomedCaptionRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(() => {
    handleExitZoom();
  }, zoomedImageRef, zoomedCaptionRef);

  const imagesData = images.map((image) => {
    return {
      image: require(`../../assets/${image.imageUrl}`),
      caption: image.caption,
      altName: image.altName || '',
    };
  });

  const handleLeftClick = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  const handleRightClick = () => {
    if (currentImage < imagesData.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const handleExitZoom = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsZoomed(false);
      setIsExiting(false);
    }, 270);
  }

  const zoomedImageComponent = (
    <Portal>
      <Backdrop isExiting={isExiting} onExit={handleExitZoom}>
        <ZoomedImage
          src={imagesData[currentImage].image}
          alt={imagesData[currentImage].altName}
          ref={zoomedImageRef}
        />
      </Backdrop>
      <ImageCaptionWrapper
        ref={zoomedCaptionRef}
        className={isExiting ? "exiting" : ""}
      >
        <Markdown value={imagesData[currentImage].caption || ""} />
      </ImageCaptionWrapper>
    </Portal>
  );

  return (
    <PageContainer>
      <MetaData {...metaData['image-slider']} />
      <ImageSliderContainer>
        <StyledImage
          src={imagesData[currentImage].image}
          alt={imagesData[currentImage].altName}
          onClick={() => setIsZoomed(true)}
        />
        <ImageCountTextWrapper variant="button">
          {currentImage + 1} / {imagesData.length}
        </ImageCountTextWrapper>
        <LeftButtonContainer onClick={handleLeftClick}>
          <StyledIcon
            name="ri-arrow-left-circle-line"
            data-disabled={currentImage === 0}
          />
        </LeftButtonContainer>
        <RightButtonContainer onClick={handleRightClick}>
          <StyledIcon
            name="ri-arrow-right-circle-line"
            data-disabled={currentImage === imagesData.length - 1}
          />
        </RightButtonContainer>
        <CaptionTextWrapper variant="body2">
          {imagesData[currentImage].caption}
        </CaptionTextWrapper>
      </ImageSliderContainer>
      <NavButton />
      {isZoomed && zoomedImageComponent}
    </PageContainer>
  )
};
export default ImageSlider;
