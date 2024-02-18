import React, { useEffect } from "react";
import {
  ContentContainer,
  EndnotesLi,
  EndnotesLiContentWrapper,
  EndnotesLinkIconWrapper,
  EndnotesOl,
  LabelText,
  PageContentContainer,
  SubtitleText,
  TitleText,
} from "./PageContentStyle";
import { Icon } from "../Icon/Icon";
import { NavButton } from "../NavButton/NavButton";
import { Markdown } from "../Markdown/Markdown";
import { MetaData, SingleMetaData } from "../MetaData/MetaData";
import { Text } from "../Text/Text";
import { processRawMarkdown } from "../../utils/processRawMd";

interface ContentData {
  label?: string;
  title: string;
  subtitle?: string;
  abstract?: string;
  markdown?: string;
  endNotes?: string[];
}
interface PageContentProps {
  data: ContentData;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  metaData?: SingleMetaData;
}

export const PageContent = ({
  data, children, style, metaData={},
}: PageContentProps) => {
  useEffect(() => {
    const citationSpans = document.querySelectorAll(".citation");
    citationSpans.forEach((span) => {
      const idNumber = span.id.split("-")[1];
      span.addEventListener("click", () => {
        window.location.hash = `endnotes-${idNumber}`;
      });
    })
  }, [data]);

  return (
    <PageContentContainer>
      <MetaData {...metaData} />
      {data.label && (
        <LabelText variant="button">
          {data.label}
        </LabelText>
      )}
      <TitleText variant="title1">
        {data.title}
      </TitleText>
      {data.subtitle && (
        <SubtitleText variant="subtitle2">
          {data.subtitle}
        </SubtitleText>
      )}
      <ContentContainer style={style}>
        {data.abstract && (
          <Text variant="subtitle2" style={{
            marginBottom: "24px"
          }}>
            {data.abstract}
          </Text>
        )}
        {data.markdown && (
          <Markdown value={processRawMarkdown(data.markdown)} />
        )}
        {data.endNotes && (
          <>
            <Text variant="body1" style={{ fontWeight: 600 }}>
              ENDNOTES
            </Text>
            <EndnotesOl>
              {data.endNotes.map((note, index) => (
                <EndnotesLi key={index} id={`endnotes-${index + 1}`}>
                  <EndnotesLiContentWrapper>
                    <Markdown value={note} />
                    <EndnotesLinkIconWrapper
                      onClick={() => window.location.hash = `#citation-${index + 1}`}
                    >
                      <Icon name="ri-reply-fill" />
                    </EndnotesLinkIconWrapper>
                  </EndnotesLiContentWrapper>
                </EndnotesLi>
              ))}
            </EndnotesOl>
          </>
        )}
        {children}
      </ContentContainer>
      <NavButton />
    </PageContentContainer>
  );
}
