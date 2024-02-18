import React from "react";
import {
  AttachmentIcon,
  StyledNameText,
  NameHeaderContainer,
  SingleContributorContainer,
  StyledContributionLi,
  StyledContributionText,
  StyledImage,
} from "./ContributorsStyle";
import { PageContent } from "../../components/PageContent/PageContent";
import { Markdown } from "../../components/Markdown/Markdown";
import { MetaData } from "../../components/MetaData/MetaData";
import { contributorList } from "../../constants/contributors";
import { metaData } from "../../constants/metadata";

const Contributors = () => {
  const imagesDict: {[key: string]: string} = {};
  contributorList.forEach((contributor) => {
    imagesDict[contributor.imageUrl] = require(
      `../../assets/${contributor.imageUrl}`);
  });

  return (
    <PageContent data={{
      title: 'Contributors',
    }}>
      <MetaData {...metaData.contributors} />
      {contributorList.map((contributor, index) => (
        <SingleContributorContainer key={index}>
          <NameHeaderContainer>
            <StyledNameText variant="title3">
              {contributor.name}
            </StyledNameText>
            {contributor.portfolioUrl && (
              <AttachmentIcon
                name="ri-attachment-2-line"
                onClick={() => window.open(contributor.portfolioUrl, '_blank')}
              />
            )}
          </NameHeaderContainer>
          <StyledImage
            src={imagesDict[contributor.imageUrl]}
            alt={`${contributor.name} Pic`}
          />
          <Markdown value={contributor.descriptionMd} additionalStyles={{
            lineHeight: '1.5',
            letterSpacing: '0px',
          }} />
          {contributor.essays.map((essay, index) => (
            <ul key={index}>
              <StyledContributionLi>
                <StyledContributionText
                  variant="body1"
                  onClick={() => window.open(essay.url, '_blank')}
                >
                  {essay.title}
                </StyledContributionText>
              </StyledContributionLi>
            </ul>
          ))}
        </SingleContributorContainer>
      ))}
    </PageContent>
  );
}
export default Contributors;
