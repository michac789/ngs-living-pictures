import styled from "styled-components";
import { colors } from "../../constants/colors";
import { Icon } from "../../components/Icon/Icon";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  width: 100vw;
  background-color: ${colors.Neutral100};
  border-bottom: 2px solid ${colors.Neutral500};

  &[data-sidebar-open="true"] {
    width: calc(100vw - 300px);
  }

  transition: width 0.3s ease;
`;

export const NavbarCenterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const StyledNavbarIcon = styled(Icon)`
  padding: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: ${colors.Blue100};
    transition: all 0.3s ease;
  }
`;

export const NavbarButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 10px 16px;
  gap: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.Blue100};
    transition: all 0.3s ease;
  }
`;
