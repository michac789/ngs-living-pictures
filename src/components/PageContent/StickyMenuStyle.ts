import styled from "styled-components";
import { Spinner } from "../Spinner/Spinner";
import { colors } from "../../constants/styles/colors";
import { textVariantMapping } from "../Text/TextStyle";

export const StickyMenuContainer = styled.div`
  position: absolute;
  width: 24px;
  background-color: ${colors.Neutral200};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;

  svg {
    cursor: pointer;
  }
  svg {
    &:hover {
      stroke: ${colors.Green700};
      fill: ${colors.Green700};
    }
  }
`;

export const StyledSpinner = styled(Spinner)`
  cursor: not-allowed;
  opacity: 0.5;
`;

export const CitationTooltipWrapper = styled.div`
  height: 100px;
  width: 300px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  & > div {
    ${textVariantMapping.body2};
    font-size: 12px;
  }
`;
