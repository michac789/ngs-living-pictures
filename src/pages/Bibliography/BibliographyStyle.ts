import styled from "styled-components";
import { Text } from "../../components/Text/Text";
import { breakpoints } from "../../constants/styles/breakpoints";

export const BibliographyContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${breakpoints.medium}) {
    gap: 8px;
  }
`;

export const StyledIdText = styled(Text)`
  font-style: normal;
  padding-bottom: 4px;
`;
