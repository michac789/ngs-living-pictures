import styled from "styled-components";
import { colors } from "../../constants/styles/colors";

export const SearchModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 550px;
  z-index: 1100;
  background-color: ${colors.Neutral200};
`;

export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 8px;
  gap: 8px;
  max-height: 400px;
  overflow-y: auto;
`;

export const SingleResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 4px;
  box-sizing: border-box;
  border: 1px solid ${colors.Neutral400};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.Blue100};
  }
`;
