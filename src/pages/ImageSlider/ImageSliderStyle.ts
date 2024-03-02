import styled from "styled-components";
import { Icon } from "../../components/Icon/Icon";
import { Text } from "../../components/Text/Text";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageSliderContainer = styled.div`
  position: relative;
  width: calc(100% - 8px);
  max-width: 1000px;
  aspect-ratio: 16/9;
  margin-top: 8px;

  border: 1px solid ${colors.Green500};
  box-shadow: 0px 0px 5px 0px ${colors.Green700};
  background-color: ${colors.Green200};

  @media (max-width: ${breakpoints.medium}) {
    aspect-ratio: 13/9;
  }
  @media (max-width: ${breakpoints.small}) {
    aspect-ratio: 1/1;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
  user-select: none;
`;

export const ImageCountTextWrapper = styled(Text)`
  position: absolute;
  top: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 4px 16px;
  border-radius: 4px;
  
  z-index: 2;
  background-color: ${colors.Neutral300};
  border: 1px solid ${colors.Neutral700};
  opacity: 0.8;
  user-select: none;

  @media (max-width: ${breakpoints.small}) {
    padding: 2px 12px;
  }
`;

export const LeftButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  
  cursor: pointer;
  z-index: 2;
`;

export const RightButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;

  cursor: pointer;
  z-index: 2;
`;

export const StyledIcon = styled(Icon)`
  width: 60px;
  height: 60px;
  padding: 10px 0;
  border-radius: 4px;

  fill: ${colors.Neutral400};
  opacity: 0.5;
  background-color: rgba(15, 15, 15, 0.3);
  transition: all 0.3s ease;

  &[data-disabled="false"] {
    &:hover {
      fill: ${colors.Neutral200};
      opacity: 0.9;
      background-color: rgba(15, 15, 15, 0.5);
    }
  }

  &[data-disabled="true"] {
    cursor: not-allowed;
    fill: ${colors.Neutral600};
    opacity: 0.2;
  }

  @media (max-width: ${breakpoints.small}) {
    width: 48px;
    height: 48px;
  }
`;

export const CaptionTextWrapper = styled(Text)`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 8px 16px;
  width: calc(100% - 32px);
  max-width: 1000px;

  z-index: 3;
  background-color: ${colors.Neutral800};
  color: ${colors.Neutral200};
  opacity: 0.8;
  user-select: none;

  @media (max-width: ${breakpoints.small}) {
    padding: 4px 8px;
    width: calc(100% - 16px);
  }
`;
