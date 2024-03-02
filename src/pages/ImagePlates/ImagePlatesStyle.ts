import styled from "styled-components";
import { Text } from "../../components/Text/Text";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const ImagePlatesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 32px;
  gap: 16px;

  @media (max-width: ${breakpoints.medium}) {
    padding: 16px;
    gap: 12px;
  }
`;

export const SinglePlateCard = styled.div`
  width: 300px;
  height: 380px;
  padding: 24px;

  background-color: ${colors.Neutral200};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${colors.Neutral100};
    box-shadow: 0px 4px 8px rgba(45, 0, 0, 0.25);
  }

  &.hover-out {
    animation: image-plate-card-out 0.3s ease-in-out;
  }
  @keyframes image-plate-card-out {
    from {
      box-shadow: 0px 4px 8px rgba(45, 0, 0, 0.25);
    }
    to {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 16px;
    height: 366px;
  }
`;

export const ImageWrapper = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.Neutral400};

  &.hover-out {
    animation: image-plate-wrapper-out 0.3s ease-in-out;
  }
  &.hover-in {
    animation: image-plate-wrapper-in 0.3s ease-in-out;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.75);
  }
  @keyframes image-plate-wrapper-in {
    from {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.75);
    }
    to {
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.75);
    } 
  }
  @keyframes image-plate-wrapper-out {
    from {
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.75);
    }
    to {
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.75);
    }
  }
`;

export const StyledImage = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
`;

export const TitleText = styled(Text)`
  margin-top: 16px;
  cursor: pointer;
  color: ${colors.Red500};

  height: 70px;
  overflow-y: auto;

  svg {
    padding-left: 8px;
    transform: translateY(3px);
    transition: all 0.3s ease;
    stroke: ${colors.Red500};
    fill: ${colors.Red500};
    height: 18px;
    width: 18px;
  }
  
  &.hover-out {
    svg {
      animation: image-plate-title-icon-out 0.3s ease-in-out;
    }
  }
  &.hover-in {
    color: ${colors.Red700};
    svg {
      stroke: ${colors.Red700};
      fill: ${colors.Red700};
      animation: image-plate-title-icon-in 0.3s ease-in-out;
      transform: translate(16px, 3px);
    }
  }
  @keyframes image-plate-title-icon-in {
    from {
      transform: translate(0, 3px);
    }
    to {
      transform: translate(16px, 3px);
    }
  }
  @keyframes image-plate-title-icon-out {
    from {
      transform: translate(16px, 3px);
    }
    to {
      transform: translate(0, 3px);
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    margin-top: 8px;
    height: 56px;
    svg {
      height: 14px;
      width: 14px;
    }
  }
`;
