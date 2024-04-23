import styled from "styled-components";
import { Text } from "../Text/Text";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const AudioPlayerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const PlayPauseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  svg {
    fill: ${colors.Neutral600};
    stroke: ${colors.Neutral600};
    height: 28px;
    width: 28px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-color: ${colors.Blue300};
    svg {
      transform: scale(1.1);
      fill: ${colors.Neutral700};
      stroke: ${colors.Neutral700};
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 4px;
    svg {
      height: 20px;
      width: 20px;
    }
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;

  @media (max-width: ${breakpoints.medium}) {
    padding-top: 4px;
  }
`;

export const SliderInput = styled.input`
  width: 600px;
  height: 4px;
  border-radius: 2px;
  background: ${colors.Neutral400};
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${colors.Blue300};
    cursor: pointer;
  }

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: ${breakpoints.medium}) {
    width: 400px;
    
    &::-webkit-slider-thumb {
      width: 8px;
      height: 8px;
    }
  }
  @media (max-width: ${breakpoints.small}) {
    width: 300px;
  }
`;

export const AudioInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 4px 0;

  @media (max-width: ${breakpoints.medium}) {
    padding: 4px 2px 0;
  }
`;

export const StyledAudioText = styled(Text)`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    height: 16px;
    width: 16px;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.medium}) {
    gap: 4px;
    svg {
      height: 12px;
      width: 12px;
    }
  }
`;
