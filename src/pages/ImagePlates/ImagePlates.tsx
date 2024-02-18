import React from "react";
import { MetaData } from "../../components/MetaData/MetaData";
import { NavButton } from "../../components/NavButton/NavButton";
import { Text } from "../../components/Text/Text";
import { metaData } from "../../constants/metadata";

const ImagePlates = () => {
  return (
    <>
      <MetaData {...metaData['image-plates']} />
      <Text variant="title2">
        Image Plates - TODO
      </Text>
      <NavButton />
    </>
  )
};
export default ImagePlates;
