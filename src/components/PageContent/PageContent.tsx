import React from "react";
import {
  ContentContainer,
  LabelText,
  PageContentContainer,
  SubtitleText,
  TitleText,
} from "./PageContentStyle";
import { NavButton } from "../NavButton/NavButton";
import { Markdown } from "../Markdown/Markdown";
import { Text } from "../Text/Text";

interface ContentData {
  label?: string;
  title: string;
  subtitle?: string;
  abstract?: string;
  markdown?: string;
}
interface PageContentProps {
  data: ContentData;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const PageContent = ({
  data, children, style,
}: PageContentProps) => {
  return (
    <PageContentContainer>
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
          <Text variant="subtitle2">
            {data.abstract}
          </Text>
        )}
        {data.markdown && (
          <Markdown value={data.markdown} />
        )}
        {children}
      </ContentContainer>
      <NavButton />
    </PageContentContainer>
  );
}
