import React from "react";
import { ImagePlatesContainer, SinglePlate, StyledImage } from "./ImagePlatesStyle";
import { MetaData } from "../../components/MetaData/MetaData";
import { NavButton } from "../../components/NavButton/NavButton";
import { Text } from "../../components/Text/Text";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { metaData } from "../../constants/metadata";

interface ImagePlateProps {
  imageUrl: string;
  title: string;
  pageUrl: string;
}

const ImagePlates = () => {
  const ImagePlate = ({
    imageUrl, title, pageUrl,
  }: ImagePlateProps) => {
    return (
      <SinglePlate>
        <StyledImage src={imageUrl} alt={title} />
        <Text variant="title3">{title}</Text>
        {pageUrl}
      </SinglePlate>
    )
  };

  return (
    <>
      <MetaData {...metaData['image-plates']} />
      <Text variant="title2">
        Image Plates - TODO (TEST DEPLOYMENT)
      </Text>
      <ImagePlatesContainer>
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
        <ImagePlate imageUrl="https://via.placeholder.com/300" title="Test" pageUrl="/test" />
      </ImagePlatesContainer>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "600px",
        padding: "60px",
      }}>
        <div>test!</div>
        <Tooltip contents="This is a tooltip" position="top">
          Hover over me
        </Tooltip>
        <Tooltip contents="This is a tooltip" position="bottom">
          Hover over me
        </Tooltip>
        <Tooltip contents="This is a tooltip" position="left">
          Hover over me
        </Tooltip>
        <Tooltip contents="This is a tooltip" position="right">
          Hover over me
        </Tooltip>
      </div>
      <NavButton />
    </>
  )
};
export default ImagePlates;
