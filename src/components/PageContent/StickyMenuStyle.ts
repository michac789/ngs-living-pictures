import styled from "styled-components";
import { Spinner } from "../Spinner/Spinner";
import { colors } from "../../constants/colors";

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
