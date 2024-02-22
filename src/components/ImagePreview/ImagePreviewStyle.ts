import styled from "styled-components";
import { Text } from "../Text/Text";
import { textVariantMapping } from "../Text/TextStyle";
import { colors } from "../../constants/colors";

export const StyledImagePreview = styled.img`
  width: 100%;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.75);
  }
`;

export const CaptionContainer = styled.div`
  padding: 4px 0 0;

  & div {
    ${textVariantMapping.body2};
  }
`;

export const FigureNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  svg {
    fill: ${colors.Red500};
    stroke: ${colors.Red500};
  }
  &:hover svg {
    fill: ${colors.Red600};
    stroke: ${colors.Red600};
  }
`;

export const StyledFigureName = styled(Text)`
  font-weight: 600;
  color: ${colors.Red500};

  &:hover {
    color: ${colors.Red600};
  }
`;
