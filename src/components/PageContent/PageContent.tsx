import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import {
  BibliographySingleEntry,
  ContentContainer,
  ContributorContainer,
  EndnotesLi,
  EndnotesLiContentWrapper,
  EndnotesLinkIconWrapper,
  EndnotesOl,
  LabelText,
  PageContentContainer,
  SubtitleText,
  StyledHorizontalLine,
  TitleText,
} from "./PageContentStyle";
import { StickyMenu } from "./StickyMenu";
import { Icon } from "../Icon/Icon";
import { ImagePreview } from "../ImagePreview/ImagePreview";
import { NavButton } from "../NavButton/NavButton";
import { Markdown } from "../Markdown/Markdown";
import { MetaData, SingleMetaData } from "../MetaData/MetaData";
import { Text } from "../Text/Text";
import { colors } from "../../constants/styles/colors";
import { bibliographyList } from "../../constants/bibliography";
import { figures } from "../../constants/figures";
import { getBibliographyContents } from "../../utils/getBibliography";
import { processRawMarkdown } from "../../utils/processRawMd";
import { getFigures } from "../../utils/getFigures";
import { contributorList } from "../../constants/contributors";
import { SingleContributor } from "../../pages/Contributors/SingleContributor";

const html2pdf = require('html2pdf.js');

interface ContentData {
  label?: string;
  title: string;
  subtitle?: string;
  abstract?: string;
  markdown?: string;
  endNotes?: string[];
  citation?: string;
}
interface PageContentProps {
  data: ContentData;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  metaData?: SingleMetaData;
  hasStickyMenu?: boolean;
}

export const PageContent = ({
  data, children, style, metaData={}, hasStickyMenu=false,
}: PageContentProps) => {
  const [isDownloadLoading, setIsDownloadLoading] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const pageContentRef = useRef<HTMLDivElement>(null);
  const contributorRef = useRef<HTMLDivElement>(null);

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
        tooltipDiv.style.top = Math.max(top - 85, 0) + "px";
        tooltipDiv.style.left = Math.max(left - 50, 0) + "px";
        tooltipDiv.style.backgroundColor = colors.Blue900;
        tooltipDiv.style.color = colors.Neutral100;
        tooltipDiv.style.padding = "8px";
        tooltipDiv.style.borderRadius = "4px";
        tooltipDiv.style.zIndex = "100";
        tooltipDiv.style.maxWidth = "400px";
        tooltipDiv.style.fontSize = isLargeScreen ? "14px" : "12px";
        const bibliographyEntry = bibliographyList.find((entry) => entry.id === span.textContent);
        tooltipDiv.innerHTML = bibliographyEntry?.markdown || "No details found for this citation."
        const portal = document.getElementById("special-portal");
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

  useEffect(() => {
    const handleResize = () => {
      const breakpoint = 768;
      setIsLargeScreen(window.innerWidth > breakpoint);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const generatePdf = () => {
    setIsDownloadLoading(true);
    const content = pageContentRef.current;
    if (content) {
      const opt = {
        margin: 10,
        filename: `${metaData.title}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().from(content).set(opt).save().then(() => {
        setIsDownloadLoading(false);
      });
    }
  }

  const abstractComponent = data.abstract ? (
    <Text variant="subtitle2" style={{
      marginBottom: "24px"
    }}>
      {data.abstract}
    </Text>
  ) : null;

  const mainContentComponent = data.markdown && (
    <>
      {data.markdown && getFigures(data.markdown).map((mdStr, index) => {
        if (mdStr.startsWith('hr')) {
          return <StyledHorizontalLine key={index} data-bottom-space={true} />
        } else if (mdStr.startsWith('fig')) {
          const id = mdStr.split("-")[1];
          const figure = figures.find((fig) => fig.id === id);
          return <>
            <ImagePreview
              key={index}
              imageUrl={figure?.imageUrl || ""}
              label={figure?.label || ""}
              caption={figure?.caption || ""}
            />
          </>
        } else if (mdStr.startsWith('vid')) {
          const videoUrl = mdStr.split("-")[1];
          return <ReactPlayer
            key={index}
            url={videoUrl}
            controls={true}
            width="100%"
            style={{ paddingBottom: "8px" }}
          />
        } else {
          return <Markdown value={processRawMarkdown(mdStr)} key={index} />
        }
      })}
    </>
  )

  const endNotesComponent = data.endNotes && (
    <>
      <Text variant="body1" style={{ fontWeight: 600, textDecoration: 'underline' }}>
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
  );
  
  const bibliographyComponent = data.markdown && getBibliographyContents(data.markdown).length !== 0 && (
    <>
      <Text variant="body1" style={{ fontWeight: 600, textDecoration: 'underline' }}>
        BIBLIOGRAPHY
      </Text>
      {getBibliographyContents(data.markdown).map((entry, index) => (
        <BibliographySingleEntry key={index}>
          <Text key={index} variant="body2" style={{ fontWeight: 600 }}>
            {entry.id}
          </Text>
          <Markdown value={entry.markdown} />
        </BibliographySingleEntry>
      ))}
    </>
  );

  const currContributor = contributorList.find((contributor) => contributor.essays.some((essay) => essay.url === window.location.pathname));
  const contributorComponent = currContributor && (
    <>
      <Text
        variant="body1"
        style={{ fontWeight: 600, textDecoration: 'underline', lineHeight: 1 }}
      >
        CONTRIBUTOR
      </Text>
      <ContributorContainer ref={contributorRef}>
        <SingleContributor
          name={currContributor.name}
          descriptionMd={currContributor.descriptionMd}
          image={require(`../../assets/${currContributor.imageUrl}`)}
          portfolioUrl={currContributor.portfolioUrl}
          essays={currContributor.essays}
        />
      </ContributorContainer>
    </>
  )

  return (
    <PageContentContainer ref={pageContentRef}>
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
      <ContentContainer id="content-container" style={style}>
        {abstractComponent}
        {mainContentComponent}
        {endNotesComponent}
        {bibliographyComponent}
        {contributorComponent}
        {children}
      </ContentContainer>
      <NavButton />
      {hasStickyMenu && (
        <StickyMenu
          contributorRef={contributorRef}
          onDownloadClick={generatePdf}
          isDownloadLoading={isDownloadLoading}
          citation={data.citation}
        />
      )}
    </PageContentContainer>
  );
}
