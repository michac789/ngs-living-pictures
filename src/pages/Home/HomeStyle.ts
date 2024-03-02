import styled from "styled-components";
import { Icon } from "../../components/Icon/Icon";
import { Text } from "../../components/Text/Text";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const CoverImageContainer = styled.div`
  position: relative;
  height: max(85vh, 600px);

  @media (max-width: ${breakpoints.medium}) {
    height: max(70vh, 500px);
  }
  @media (max-width: ${breakpoints.small}) {
    height: max(50vh, 450px);
  }
`;

export const CoverImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const DownArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: absolute;
  left: 50%;
  top: 100%;
  height: 60px;
  width: 60px;
  transform: translate(-30px, -30px);

  border-radius: 50%;
  background-color: ${colors.Neutral800};
  box-shadow: 0px 0px 5px 0px ${colors.Neutral600};
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    height: 40px;
    width: 40px;
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px ${colors.Blue800};
  }
`;

export const StyledIcon = styled(Icon)`
  fill: ${colors.Neutral200};
  stroke: ${colors.Neutral200};
  transition: all 0.3s ease;
  height: 48px;
  width: 48px;

  &:hover {
    fill: ${colors.Blue100};
    stroke: ${colors.Blue100};
  }

  @media (max-width: ${breakpoints.medium}) {
    height: 32px;
    width: 32px;
  }
`;

export const TitleOverlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  position: absolute;
  left: 0;
  top: 35%;
  width: 650px;
  min-height: 300px;
  padding: 32px 24px 12px;
  box-sizing: border-box;

  background-color: rgba(0, 0, 0, 0.5);
  color: ${colors.Neutral200};

  @media (max-width: ${breakpoints.medium}) {
    gap: 6px;
    top: 30%;
    width: 500px;
    min-height: 250px;
    padding: 20px 16px 8px;
  }

  @media (max-width: ${breakpoints.small}) {
    gap: 4px;
    top: 25%;
    width: 100%;
    min-height: 200px;
    padding: 16px 12px 8px;
  }
`;

export const EnterButtonWrapper = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: fit-content;
  padding: 4px 8px;
  margin-top: 16px;

  border: 2px solid ${colors.Neutral200};
  box-shadow: 0px 0px 5px 0px ${colors.Neutral600};
  cursor: pointer;
  color: ${colors.Neutral200};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.Neutral200};
    color: ${colors.Neutral800};
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 2px 6px;
    margin-top: 12px;
  }
  @media (max-width: ${breakpoints.small}) {
    margin-top: 8px;
  }
`;

export const HomeContentContainer = styled.div`
  padding: 64px 64px 32px;
  margin: 0 auto;
  max-width: 900px;

  @media (max-width: ${breakpoints.medium}) {
    padding: 48px 32px 16px;
  }
`;

export const NextButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding-bottom: 32px;

  @media (max-width: ${breakpoints.medium}) {
    padding-bottom: 16px;
  }
`;
