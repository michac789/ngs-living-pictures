import React from "react";
import {
  DocumentContainer,
  DocumentDescriptionWrapper,
  DocumentHeader,
  DocumentHeaderLeftText,
  DocumentHeaderRightText,
  DocumentSingleHeader,
  DocumentSection,
  DocumentSectionTitle,
  DocumentTitleText,
  DocumentWrapper,
  ImagePlateDetailContainer,
  ImagePreviewContainer,
} from "./ImagePlateDetailStyle";
import { ImagePreview } from "../../components/ImagePreview/ImagePreview";
import { Markdown } from "../../components/Markdown/Markdown";
import { NavButton } from "../../components/NavButton/NavButton";
import { Text } from "../../components/Text/Text";
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
        <DocumentWrapper>
          <DocumentTitleText variant="title3">
            {imagePlateData.title}
          </DocumentTitleText>
          <DocumentHeader>
            {imagePlateData.header.map((header, index) => (
              <DocumentSingleHeader key={index}>
                <DocumentHeaderLeftText variant="body2">
                  {header.name}
                </DocumentHeaderLeftText>
                <DocumentHeaderRightText variant="body2">
                  <Markdown
                    value={header.content}
                    type="small"
                  />
                </DocumentHeaderRightText>
              </DocumentSingleHeader>
            ))}
          </DocumentHeader>
          <DocumentDescriptionWrapper>
            <Markdown value={imagePlateData.description} type="small" />
          </DocumentDescriptionWrapper>
          {imagePlateData.sections.map((section, index) => (
            <DocumentSection key={index}>
              <DocumentSectionTitle variant="body1">
                {section.title.toUpperCase()}
              </DocumentSectionTitle>
              <Markdown value={section.content} type="small" />
            </DocumentSection>
          ))}
        </DocumentWrapper>
        <NavButton />
      </DocumentContainer>
    </ImagePlateDetailContainer>
  );
}
export default ImagePlateDetail;
