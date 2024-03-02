import styled from "styled-components";
import { textVariantMapping } from "../Text/TextStyle";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: 8px 16px;
  width: fit-content;
  min-width: 100px;
  &[data-full-width="true"] {
    width: auto;
  }
  cursor: pointer;
  transition: all 0.3s ease;

  ${textVariantMapping['button']}
  color: ${colors.Neutral200};
  box-shadow: 0px 0px 2px 0px ${colors.Blue500};
  border: 1px solid ${colors.Blue800};
  background-color: ${colors.Blue500};
  &:hover {
    background-color: ${colors.Blue600};
    box-shadow: 0px 0px 5px 0px ${colors.Blue600};
  }

  svg {
    height: 24px;
    width: 24px;
    stroke: ${colors.Neutral200};
    fill: ${colors.Neutral200};
  }

  &[data-type="secondary"] {
    color: ${colors.Blue500};
    background-color: ${colors.Neutral200};
    box-shadow: 0px 0px 2px 0px ${colors.Blue500};
    border: 1px solid ${colors.Blue800};
    &:hover {
      background-color: ${colors.Blue100};
      box-shadow: 0px 0px 5px 0px ${colors.Blue600};
    }
  
    svg {
      stroke: ${colors.Blue500};
      fill: ${colors.Blue500};
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 4px;
    gap: 8px;

    svg {
      height: 20px;
      width: 20px;
    }
  }
`;
