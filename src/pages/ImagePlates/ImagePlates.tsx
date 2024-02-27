import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  ImagePlatesContainer,
  ImageWrapper,
  SinglePlateCard,
  StyledImage,
  TitleText,
} from "./ImagePlatesStyle";
import { Icon } from "../../components/Icon/Icon";
import { MetaData } from "../../components/MetaData/MetaData";
import { NavButton } from "../../components/NavButton/NavButton";
import { ImagePlate, imagePlatesData } from "../../constants/imageplates";
import { metaData } from "../../constants/metadata";

type ImagePlateProps = ImagePlate & { index: number };

const ImagePlates = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [prevHoverIndex, setPrevHoverIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const ImagePlate = ({
    imageUrl, title, pageUrl, index,
  }: ImagePlateProps) => {
    const image = require(`../../assets/${imageUrl}`);

    const hanldeClick = () => {
      if (pageUrl[0] === '*') {
        window.open(pageUrl.slice(1), '_blank');
      } else {
        navigate(pageUrl);
      }
    }

    return (
      <SinglePlateCard
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => {
          setPrevHoverIndex(hoverIndex);
          setHoverIndex(null);
        }}
        onClick={hanldeClick}
        className={hoverIndex === index ? 'hover-in' : index === prevHoverIndex ? 'hover-out' : ''}
      >
        <ImageWrapper
          className={hoverIndex === index ? 'hover-in' : index === prevHoverIndex ? 'hover-out' : ''}
        >
          <StyledImage src={image} alt={title} />
        </ImageWrapper>
        <TitleText
          variant="subtitle2"
          className={hoverIndex === index ? 'hover-in' : index === prevHoverIndex ? 'hover-out' : ''}
          style={{ fontStyle: "normal" }}
        >
          {title}
          <Icon name="ri-arrow-right-line" size="18px" />
        </TitleText>
      </SinglePlateCard>
    )
  };

  return (
    <>
      <MetaData {...metaData['image-plates']} />
      <ImagePlatesContainer>
        {imagePlatesData.map((plate: ImagePlate, index: React.Key) => (
          <ImagePlate key={index} index={index as number} {...plate} />
        ))}
      </ImagePlatesContainer>
      <NavButton />
    </>
  )
};
export default ImagePlates;
