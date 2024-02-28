import React from "react";
import {
  DocumentContainer,
  ImagePlateDetailContainer,
  ImagePreviewContainer,
} from "./ImagePlateDetailStyle";
import { ImagePreview } from "../../components/ImagePreview/ImagePreview";
import { figures } from "../../constants/figures";
import { imagePlatesDetailData, SingleImagePlateDetail } from "../../constants/imageplates";

interface ImagePlateDetailProps {
  plateId: number;
}

const ImagePlateDetail = ({
  plateId,
}: ImagePlateDetailProps) => {
  const imagePlateData = imagePlatesDetailData.find(
    (plate: SingleImagePlateDetail) => plate.id === plateId);

  if (!imagePlateData) {
    return <>Invalid Image Plate ID! Please check the given ID on the ImagePlateDetail component Props!</>;
  };

  const figure = figures.find((figure) => figure.id === imagePlateData.figureId.toString());
  
  return (
    <ImagePlateDetailContainer>
      <ImagePreviewContainer>
        <ImagePreview
          imageUrl={figure?.imageUrl || ""}
          label={figure?.label || ""}
          caption={figure?.caption || ""}
        />
      </ImagePreviewContainer>
      <DocumentContainer>
        Image Plate Detail Page - TODO (This page is still under construction)
      </DocumentContainer>
    </ImagePlateDetailContainer>
  );
}
export default ImagePlateDetail;
