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
  width: 268px;
  height: calc(100vh - 32px);

  background-color: ${colors.Neutral800};
  border-right: 2px solid ${colors.Neutral500};
  padding: 16px;

  &[data-sidebar-closed="true"] {
    right: -300px;
  }
  transition: right 0.3s ease;
`;

export const SidebarMenuItem = styled(Text)`
  margin-bottom: 12px;
  cursor: pointer;
  color: ${colors.Neutral200};

  &:hover {
    color: ${colors.Neutral100};
    text-decoration: underline;
  }
`;

export const SidebarTitleText = styled(Text)`
  margin-bottom: 8px;
  font-weight: 700;
  line-height: 1.2;
  color: ${colors.Neutral200};
`;

export const SidebarSubtitleText = styled(Text)`
  margin-bottom: 24px;
  color: ${colors.Neutral200};
  font-style: italic;
`;
