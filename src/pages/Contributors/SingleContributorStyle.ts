import styled from "styled-components";
import { Icon } from "../../components/Icon/Icon";
import { Text } from "../../components/Text/Text";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const SingleContributorContainer = styled.div`
  margin-bottom: 32px;
  min-height: 144px;

  @media (max-width: ${breakpoints.medium}) {
    margin-bottom: 16px;
    ul {
      padding-left: 16px;
    }
  }
`;

export const NameHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 8px 8px 0;
  gap: 8px;

  @media (max-width: ${breakpoints.medium}) {
    svg {
      height: 20px;
      width: 20px;
    }
  }
`;

export const StyledNameText = styled(Text)`
  font-weight: 600;
`;

export const AttachmentIcon = styled(Icon)`
  cursor: pointer;
  fill: ${colors.Red500};
  stroke: ${colors.Red500};

  &:hover {
    fill: ${colors.Red700};
    stroke: ${colors.Red700};
  }
`;

export const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  float: left;
  margin: 0 16px 8px 0;

  @media (max-width: ${breakpoints.medium}) {
    width: 80px;
    height: 80px;
    margin: 0 12px 4px 0;
  }
`;

export const StyledContributionLi = styled.li`
  list-style-type: square;
  transform: translateX(16px);
  padding: 0 8px;

  &::marker {
    color: ${colors.Red500};
  }
  &:hover {
    &::marker {
      color: ${colors.Red700};
    }
  }

  @media (max-width: ${breakpoints.medium}) {
    transform: translateX(12px);
    padding: 0 4px;
  }
`;

export const StyledContributionText = styled(Text)`
  cursor: pointer;
  color: ${colors.Red500};

  &:hover {
    color: ${colors.Red700};
    text-decoration: underline;
  }
`;
