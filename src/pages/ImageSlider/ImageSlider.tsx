import React, { useState } from "react";
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
import { MetaData } from "../../components/MetaData/MetaData";
import { NavButton } from "../../components/NavButton/NavButton";
import { images } from "../../constants/imageslider";
import { metaData } from "../../constants/metadata";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
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

  return (
    <PageContainer>
      <MetaData {...metaData['image-slider']} />
      <ImageSliderContainer>
        <StyledImage
          src={imagesData[currentImage].image}
          alt={imagesData[currentImage].altName}
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
    </PageContainer>
  )
};
export default ImageSlider;
