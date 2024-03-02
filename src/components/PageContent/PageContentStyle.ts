import styled from "styled-components";
import { Text } from "../Text/Text";
import { textVariantMapping } from "../Text/TextStyle";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelText = styled(Text)`
  padding: 2px 8px;
  margin: 64px 0 0;
  border-top: 2px solid ${colors.Red500};
  border-bottom: 2px solid ${colors.Red500};

  @media (max-width: ${breakpoints.medium}) {
    margin: 24px 0 0;
  }
`;

export const TitleText = styled(Text)`
  padding: 32px 60px 48px;
  text-align: center;

  @media (max-width: ${breakpoints.medium}) {
    padding: 16px 32px;
  }
`;

export const SubtitleText = styled(Text)`
  padding: 0 72px 48px;
  text-align: center;

  @media (max-width: ${breakpoints.medium}) {
    padding: 0 32px 24px;
  }
`;

export const ContentContainer = styled.div`
  max-width: 700px;
  padding: 40px;
  margin: 0 16px;
  
  background-color: ${colors.Neutral100};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.medium}) {
    padding: 16px;
    margin: 0 8px;
  }
`;

export const EndnotesOl = styled.ol`
  display: flex;
  flex-direction: column;
  gap: -8px;
  padding: 0 0 0 16px;
  margin: 0;
`;

export const EndnotesLi = styled.li`
  margin-bottom: 8px;

  & div {
    ${textVariantMapping.body2};
  }

  & p {
    margin: 0;
  }
`;

export const EndnotesLiContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const EndnotesLinkIconWrapper = styled.div`
  svg {
    height: 16px;
    width: 16px;
    fill: ${colors.Red300};
    stroke: ${colors.Red300};
  }

  &:hover {
    cursor: pointer;

    svg {
      fill: ${colors.Red500};
      stroke: ${colors.Red500};
    }
  }
`;

export const BibliographySingleEntry = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & div {
    ${textVariantMapping.body2};
  }
`;

export const StyledHorizontalLine = styled.hr`
  border: 1px solid ${colors.Red500};
  margin: 8px 0;

  &[data-bottom-space="true"] {
    margin-bottom: 16px;
  }
`;

export const ContributorContainer = styled.div`
  div {
    ${textVariantMapping.body2};

    .contributor-name {
      font-weight: 600;
    }
  }

  .contributor-container {
    margin: 0;
  }
`;
