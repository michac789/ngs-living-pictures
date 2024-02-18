import styled from "styled-components";
import { colors } from "../../constants/colors";
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
`;
