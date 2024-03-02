import styled from "styled-components";
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
`;

export const SidebarSectionText = styled(Text)`
  margin: 16px 0 4px 20px;
  color: ${colors.Neutral500};
  border-bottom: 1px solid ${colors.Neutral500};
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
`;

export const SidebarImage = styled.img`
  margin-top: 16px;
  padding: 4px 4px 4px 20px;
  width: 120px;
`;

export const SidebarBottomText = styled(Text)`
  margin: 4px 4px 4px 20px;
  color: ${colors.Neutral200};
`;

export const SidebarIconWrapper = styled.div`
  display: flex;
  padding: 8px 4px 4px 20px;
  gap: 8px;

  svg {
    cursor: pointer;
    fill: ${colors.Neutral300};
    stroke: ${colors.Neutral300};

    &:hover {
      fill: ${colors.Neutral100};
      stroke: ${colors.Neutral100};
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
  z-index: 200;
`;

export const MobileCloseButtonContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;

  svg {
    fill: ${colors.Neutral200};
    stroke: ${colors.Neutral200};
    transition: transform 0.3s ease;

    &:hover {
      fill: ${colors.Yellow500};
      stroke: ${colors.Yellow500};
      transform: scale(1.2);
    }
  }
`;
