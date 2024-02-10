import React from "react";
import {
  ContentContainer,
  LabelText,
  PageContentContainer,
  SubtitleText,
  TitleText,
} from "./PageContentStyle";
import { NavButton } from "../../components/NavButton/NavButton";
import { Markdown } from "../../components/Markdown/Markdown";
import { Text } from "../../components/Text/Text";

interface ContentData {
  label: string;
  title: string;
  subtitle: string;
  abstract: string;
  markdown: string;
}
interface PageContentProps {
  data: ContentData;
}

const PageContent = ({
  data
}: PageContentProps) => {
  return (
    <PageContentContainer>
      <LabelText variant="button">
        {data.label}
      </LabelText>
      <TitleText variant="title1">
        {data.title}
      </TitleText>
      <SubtitleText variant="subtitle2">
        {data.subtitle}
      </SubtitleText>
      <ContentContainer>
        <Text variant="subtitle3">
          {data.abstract}
        </Text>
        <Markdown value={data.markdown} />
      </ContentContainer>
      <NavButton />
    </PageContentContainer>
  );
}
export default PageContent;
