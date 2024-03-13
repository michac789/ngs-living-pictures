import styled from "styled-components";
import { Modal } from "../Modal/Modal";
import { colors } from "../../constants/styles/colors";

export const StyledSearchModal = styled(Modal)`
  /* background-color: brown; */
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
