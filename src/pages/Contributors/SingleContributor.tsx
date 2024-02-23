import {
  AttachmentIcon,
  StyledNameText,
  NameHeaderContainer,
  SingleContributorContainer,
  StyledContributionLi,
  StyledContributionText,
  StyledImage,
} from "./SingleContributorStyle";
import { Markdown } from "../../components/Markdown/Markdown";
import { ContributorEntry } from "../../constants/contributors";

type SingleContriubtorProps = Omit<ContributorEntry, 'imageUrl'> & { image: string };
export const SingleContributor = ({
  name, descriptionMd, image, portfolioUrl, essays,
}: SingleContriubtorProps) => {
  return  (
    <SingleContributorContainer className="contributor-container">
      <NameHeaderContainer>
        <StyledNameText variant="title3" className="contributor-name">
          {name}
        </StyledNameText>
        {portfolioUrl && (
          <AttachmentIcon
            name="ri-attachment-2-line"
            onClick={() => window.open(portfolioUrl, '_blank')}
          />
        )}
      </NameHeaderContainer>
      <StyledImage
        src={image}
        alt={`${name} Pic`}
      />
      <Markdown value={descriptionMd} additionalStyles={{
        lineHeight: '1.5',
        letterSpacing: '0px',
      }} />
      {essays.map((essay, index) => (
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
  )
};
