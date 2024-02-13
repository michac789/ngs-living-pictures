import styled from "styled-components";
import { Icon } from "../../components/Icon/Icon";
import { Text } from "../../components/Text/Text";
import { colors } from "../../constants/colors";

export const CoverImageContainer = styled.div`
  position: relative;
  height: 85vh;
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

  &:hover {
    box-shadow: 0px 0px 10px 0px ${colors.Blue800};
  }
`;

export const StyledIcon = styled(Icon)`
  fill: ${colors.Neutral200};
  stroke: ${colors.Neutral200};
  transition: all 0.3s ease;

  &:hover {
    fill: ${colors.Blue100};
    stroke: ${colors.Blue100};
  }
`;

export const TitleOverlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  position: absolute;
  left: 0;
  top: 35%;
  width: 600px;
  height: 300px;
  padding: 32px 24px 12px;

  background-color: rgba(0, 0, 0, 0.5);
  color: ${colors.Neutral200};
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
`;

export const HomeContentContainer = styled.div`
  padding: 64px 64px 32px;
  margin: 0 auto;
  max-width: 900px;
`;

export const NextButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding-bottom: 32px;
`;
