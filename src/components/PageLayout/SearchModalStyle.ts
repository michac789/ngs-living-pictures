import styled from "styled-components";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
  height: 400px;
  width: 750px;
  padding-right: 8px;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: ${breakpoints.large}) {
    width: 650px;
  }
  @media (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;

export const SingleResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${colors.Neutral400};
  border-radius: 5px;
  cursor: pointer;
  padding: 4px;

  &:hover {
    background-color: ${colors.Blue100};
  }
`;

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    color: ${colors.Red700};
  }
`;

export const NotFoundImage = styled.img`
  width: 300px;
  height: 300px;

  @media (max-width: ${breakpoints.medium}) {
    width: 200px;
    height: 200px;
  }
`;
