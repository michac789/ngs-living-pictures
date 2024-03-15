import styled from "styled-components";
import { textVariantMapping } from "../Text/TextStyle";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  width: fit-content;
  &[data-full-width="true"] {
    width: 100%;
  }

  @media (max-width: ${breakpoints.medium}) {
    gap: 4px;
  }
`;

export const StyledInput = styled.input`
  padding: 4px 8px;
  border: 1px solid ${colors.Neutral400};
  border-radius: 4px;
  width: 100%;
  ${textVariantMapping.body1}

  @media (max-width: ${breakpoints.medium}) {
    padding: 3px 6px;
    border-radius: 3px;
  }
`;
