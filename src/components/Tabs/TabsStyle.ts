import styled from "styled-components";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";
import { textVariantMapping } from "../Text/TextStyle";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabsHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  &[data-fullwidth="true"] {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.medium}) {
    gap: 8px;
  }
`;

export const SingleTab = styled.div`
  padding: 10px;
  padding: 8px 16px;
  cursor: pointer;
  ${textVariantMapping['button']}

  color: ${colors.Neutral700};
  
  &:hover {
    border-bottom: 2px solid ${colors.Blue400};
    color: ${colors.Blue500}
  }

  &[data-selected="true"] {
    border-bottom: 2px solid ${colors.Blue600};
    color: ${colors.Blue600};
    cursor: default;
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 4px 12px;
  }
`;
