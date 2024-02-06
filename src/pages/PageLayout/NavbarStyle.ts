import styled from "styled-components";
import { colors } from "../../constants/colors";
import { Icon } from "../../components/Icon/Icon";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  width: auto;
  background-color: ${colors.Neutral100};
  border-bottom: 2px solid ${colors.Neutral500};
`;

export const NavbarCenterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const StyledNavbarIcon = styled(Icon)`
  padding: 12px;
  cursor: pointer;
  
  &:hover {
    background-color: ${colors.Blue100};
    fill: ${colors.Blue100};
    transition: all 0.3s ease;
  }
`;
