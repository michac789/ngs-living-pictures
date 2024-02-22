import React, { useEffect } from "react";
import {
  BibliographySingleEntry,
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
import { colors } from "../../constants/colors";
import { bibliographyList } from "../../constants/bibliography";
import { getBibliographyContents } from "../../utils/getBibliography";
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
  // some vanilla js code, to modify the markdown content
  useEffect(() => {
    const citationSpans = document.querySelectorAll(".citation");
    citationSpans.forEach((span) => {
      const idNumber = span.id.split("-")[1];
      span.addEventListener("click", () => {
        window.location.hash = `endnotes-${idNumber}`;
      });
    })

    const bibliographySpans = document.querySelectorAll(".bibliography");
    bibliographySpans.forEach((span) => {
      const spanElement = span as HTMLElement;
      span.addEventListener("mouseover", () => {
        spanElement.style.color = colors.Red900;
        spanElement.style.textDecoration = `underline ${colors.Red700}`;
      });
      span.addEventListener("mouseout", () => {
        spanElement.style.color = colors.Blue900;
        spanElement.style.textDecoration = `underline ${colors.Blue600} dotted`;
      });
      span.addEventListener("click", () => {
        const tooltipDiv = document.createElement("div");
        const rect = spanElement.getBoundingClientRect();
        const { top, left } = rect;
        tooltipDiv.style.position = "absolute";
        tooltipDiv.style.top = `${top - 85}px`;
        tooltipDiv.style.left = `${left - 100}px`;
        tooltipDiv.style.backgroundColor = colors.Blue900;
        tooltipDiv.style.color = colors.Neutral100;
        tooltipDiv.style.padding = "8px";
        tooltipDiv.style.borderRadius = "4px";
        tooltipDiv.style.zIndex = "100";
        tooltipDiv.style.maxWidth = "400px";
        const bibliographyEntry = bibliographyList.find((entry) => entry.id === span.textContent);
        tooltipDiv.innerHTML = bibliographyEntry?.markdown || "No details found for this citation."
        const portal = document.getElementById("special-portal");
        console.log(tooltipDiv, portal)
        portal?.appendChild(tooltipDiv);
        setTimeout(() => {
          portal?.removeChild(tooltipDiv);
        }, 3000);
      });
    });

    return () => {
      citationSpans.forEach((span) => {
        span.removeEventListener("click", () => {});
      });
      bibliographySpans.forEach((span) => {
        span.removeEventListener("mouseover", () => {});
        span.removeEventListener("mouseout", () => {});
        span.removeEventListener("click", () => {});
      });
    }
  }, [data]);

  const endNotesComponent = (
    <>
      <Text variant="body1" style={{ fontWeight: 600 }}>
        ENDNOTES
      </Text>
      <EndnotesOl>
        {data.endNotes && data.endNotes.map((note, index) => (
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
  );
  
  const bibliographyComponent = (
    <>
      <Text variant="body1" style={{ fontWeight: 600 }}>
        BIBLIOGRAPHY
      </Text>
      {data.markdown && getBibliographyContents(data.markdown).map((entry, index) => (
        <BibliographySingleEntry key={index}>
          <Text key={index} variant="body2" style={{ fontWeight: 600 }}>
            {entry.id}
          </Text>
          <Markdown value={entry.markdown} />
        </BibliographySingleEntry>
      ))}
    </>
  );

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
        {endNotesComponent}
        {bibliographyComponent}
        {children}
      </ContentContainer>
      <NavButton />
    </PageContentContainer>
  );
}
