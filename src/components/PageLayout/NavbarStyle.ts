import styled from "styled-components";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  width: 100vw;
  background-color: ${colors.Neutral100};
  transition: width 0.3s ease;

  &[data-sidebar-open="true"] {
    width: calc(100vw - 300px);
  }
  
  svg {
    height: 28px;
    width: 28px;
  }

  @media (max-width: ${breakpoints.medium}) {
    transition: none;
    svg {
      height: 20px;
      width: 20px;
    }
  }
`;

export const StyledNavbarIcon = styled(Icon)`
  padding: 14px;
  cursor: pointer;
  flex: 0 0 auto;
  
  &:hover {
    background-color: ${colors.Blue100};
    transition: all 0.3s ease;
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 10.5px 12px;
  }
`;

export const NavbarButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px 16px;
  gap: 4px;
  cursor: pointer;
  max-width: 90%;

  &:hover {
    background-color: ${colors.Blue100};
    transition: all 0.3s ease;
  }

  svg {
    height: 24px;
    width: 24px;
  }

  @media (max-width: ${breakpoints.medium}) {
    svg {
      height: 18px;
      width: 18px;
    }
  }
`;

export const LeftButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  overflow: hidden;
`;

export const RightButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const StyledNavbarText = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledArrowIcon = styled(Icon)`
  min-width: 24px;
`;

export const ProgressionContainer = styled.div`
  height: 2px;
  width: 100vw;
  background-color: ${colors.Neutral500};

  &[data-sidebar-open="true"] {
    width: calc(100vw - 300px);
  }
  transition: width 0.3s ease;

  @media (max-width: ${breakpoints.medium}) {
    transition: none;
  }
`;

interface ProgressionBarProps {
  currPage: number;
  totalPages: number;
}
export const ProgressionBarDiv = styled.div<ProgressionBarProps>`
  height: 2px;
  position: absolute;
  top: 56px;
  left: 0;
  background-color: ${colors.Red500};

  z-index: 3;
  transition: width 0.3s ease;
  width: ${({ currPage, totalPages }) => (currPage / totalPages) * 100}%;
  &[data-sidebar-open="true"] {
    width: calc((100vw - 300px) * ${({ currPage, totalPages }) => (currPage / totalPages)});
  }

  @media (max-width: ${breakpoints.medium}) {
    top: 41px;
  }
`;
