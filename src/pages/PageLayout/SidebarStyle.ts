import styled from "styled-components";
import { Text } from "../../components/Text/Text";
import { colors } from "../../constants/colors";

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

  &:hover {
    color: ${colors.Neutral100};
    text-decoration: underline;
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
`;

export const SidebarSubtitleText = styled(Text)`
  margin: 0 0 24px 20px;
  color: ${colors.Neutral200};
  font-style: italic;
`;
