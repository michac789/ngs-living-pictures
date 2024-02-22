import React from "react";
import { MetaData } from "../../components/MetaData/MetaData";
import { NavButton } from "../../components/NavButton/NavButton";
import { Text } from "../../components/Text/Text";
import { Tooltip } from "../../components/Tooltip/Tooltip";
import { metaData } from "../../constants/metadata";

const ImagePlates = () => {
  return (
    <>
      <MetaData {...metaData['image-plates']} />
      <Text variant="title2">
        Image Plates - TODO (TEST DEPLOYMENT)
      </Text>
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
