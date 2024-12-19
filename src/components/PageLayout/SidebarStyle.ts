import styled, { keyframes } from "styled-components";
import { Text } from "../Text/Text";
import { textVariantMapping } from "../Text/TextStyle";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  position: absolute;
  top: 0;
  right: 0;
  width: 282px;
  height: calc(100vh - 32px);

  background-color: ${colors.Neutral800};
  border-right: 2px solid ${colors.Neutral500};
  padding: 16px 16px 16px 0;
  overflow: auto;
  z-index: 2;

  &[data-sidebar-closed="true"] {
    right: -300px;
  }
  transition: right 0.3s ease;
`;

export const SidebarMenuItem = styled(Text)`
  padding: 8px 8px 8px 16px;
  cursor: pointer;
  color: ${colors.Neutral200};
  line-height: 1.3;

  border-left: 4px solid ${colors.Neutral800};
  &[data-selected="true"] {
    border-left: 4px solid ${colors.Red400};
    color: ${colors.Red400};
    cursor: default;

    &:hover {
      border-left: 4px solid ${colors.Red400};
      color: ${colors.Red400};
      text-decoration: none;
    }
  }

  &[data-subpage="true"] {
    padding: 6px 8px 6px 32px;
    font-size: 14px;
  }

  &:hover {
    color: ${colors.Neutral100};
    text-decoration: underline;
  }

  @media (max-width: ${breakpoints.medium}) {
    &[data-subpage="true"] {
      padding: 6px 8px 6px 28px;
      font-size: 12px;
    }
  }
`;

export const SidebarTitleText = styled(Text)`
  margin: 8px 0 8px 20px;
  font-weight: 700;
  line-height: 1.2;
  color: ${colors.Neutral200};
  cursor: pointer;

  &:hover {
    color: ${colors.Neutral100};
    text-decoration: underline;
  }

  @media (max-width: ${breakpoints.medium}) {
    margin-right: 64px;
  }
`;

export const SidebarSubtitleText = styled(Text)`
  margin: 0 0 24px 20px;
  color: ${colors.Neutral200};
  font-style: italic;

  @media (max-width: ${breakpoints.medium}) {
    margin: 0 0 16px 20px;
  }
`;

const glowingEffect = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

export const SidebarReadMeText = styled(Text)`
  margin: 0 8px 8px 20px;
  font-family: 'Noto Sans', 'sans-serif';
  font-size: 20px;
  font-weight: 700;

  padding: 8px 8px 8px 16px;
  cursor: pointer;
  color: ${colors.Blue100};
  line-height: 1.3;
  border: 2px solid ${colors.Blue300};
  transition: all 0.3s ease;

  background: linear-gradient(
    45deg,
    rgba(100, 50, 255, 1),
    rgba(50, 255, 200, 1),
    rgba(200, 75, 255, 1)
  );
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: ${glowingEffect} 1.5s linear infinite alternate;

  &:hover {
    color: ${colors.Blue200};
    border: 2px solid ${colors.Blue400};
    transform: scale(1.03);
    box-shadow: 0 0 15px rgba(0, 150, 255, 0.5);
  }

  @media (max-width: ${breakpoints.medium}) {
    font-size: 18px;
    margin: 0 4px 4px 20px;
    padding: 6px 6px 6px 12px;
  }
`;

export const SidebarSectionText = styled(Text)`
  margin: 16px 0 4px 20px;
  color: ${colors.Neutral500};
  border-bottom: 1px solid ${colors.Neutral500};

  @media (max-width: ${breakpoints.medium}) {
    margin: 12px 0 4px 20px;
  }
`;

export const SidebarActionText = styled(Text)`
  padding: 8px 8px 8px 20px;
  cursor: pointer;
  color: ${colors.Neutral200};
  line-height: 1.3;

  &:hover {
    color: ${colors.Neutral100};
    text-decoration: underline;
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 4px 8px 4px 20px;
  }
`;

export const SidebarCitationText = styled(Text)`
  margin: 0 0 8px 20px;
  color: ${colors.Neutral200};

  div {
    ${textVariantMapping['body2']}
    color: ${colors.Neutral200};
  }

  p {
    margin: 0;
  }

  @media (max-width: ${breakpoints.medium}) {
    margin: 0 0 4px 20px;
  }
`;

export const SidebarCitationFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  svg {
    height: 16px;
    width: 16px;
    fill: ${colors.Neutral300};
    stroke: ${colors.Neutral300};
    cursor: pointer;

    &:hover {
      fill: ${colors.Green500};
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    gap: 6px;
    svg {
      height: 14px;
      width: 14px;
    }
  }
`;

export const SidebarImage = styled.img`
  margin: 20px 4px 4px 20px;
  width: 120px;
  box-shadow: 0 0 4px 0 ${colors.Yellow500};

  @media (max-width: ${breakpoints.medium}) {
    margin-top: 12px;
  }
`;

export const SidebarBottomText = styled(Text)`
  margin: 4px 4px 4px 20px;
  color: ${colors.Neutral200};

  @media (max-width: ${breakpoints.medium}) {
    margin: 4px 4px 4px 20px;
  }
`;

export const SidebarIconWrapper = styled.div`
  display: flex;
  padding: 8px 4px 4px 20px;
  gap: 8px;

  svg {
    cursor: pointer;
    fill: ${colors.Neutral300};
    stroke: ${colors.Neutral300};
    height: 28px;
    width: 28px;

    &:hover {
      fill: ${colors.Neutral100};
      stroke: ${colors.Neutral100};
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 4px 4px 4px 20px;

    svg {
      height: 24px;
      width: 24px;
    }
  }
`;

export const MobileSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;

  background-color: ${colors.Neutral800};
  border-right: 2px solid ${colors.Neutral500};
  padding: 16px 16px 16px 0;
  overflow: auto;
  z-index: 3;
`;

export const MobileCloseButtonContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 16px;

  svg {
    fill: ${colors.Neutral200};
    stroke: ${colors.Neutral200};
    transition: transform 0.3s ease;
    height: 28px;
    width: 28px;

    &:hover {
      fill: ${colors.Yellow500};
      stroke: ${colors.Yellow500};
      transform: scale(1.2);
    }
  }
`;
