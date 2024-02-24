import styled from "styled-components";
import { Text } from "../Text/Text";
import { colors } from "../../constants/colors";

export const HeaderText = styled(Text)`
  color: ${colors.Neutral300};
  margin-bottom: 48px;
`;

export const OptionsFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SingleOptionWrapper = styled.div`
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  margin: 12px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    height: 48px;
    width: 48px;
    fill: ${colors.Neutral200};
    stroke: ${colors.Neutral200};
  }

  background-color: ${colors.Neutral200};
  &[data-type="facebook"] {
    background-color: #3b579d;
  }
  &[data-type="twitter"] {
    background-color: #57a8df;
  }
  &[data-type="pinterest"] {
    background-color: #ca1f26;
  }
  &[data-type="whatsapp"] {
    background-color: #25d366;
  }
  &[data-type="linkedin"] {
    background-color: #0077b5;
  }
  &[data-type="telegram"] {
    background-color: #229ed9;
  }

  &:hover {
    transform: scale(1.2);
  }
  transition: transform 0.2s ease-in-out;
`;
