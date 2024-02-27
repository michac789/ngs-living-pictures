import styled from "styled-components";
import { colors } from "../../constants/styles/colors";

export const GlossaryContainer = styled.div`
  margin: 0 auto;
  padding: 32px 16px;
  max-width: 800px;
`;

export const TabContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 8px;
`;

export const AlphabetListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 4px;
  height: 70vh;
  overflow-y: auto;

  background-color: ${colors.Blue100};
  border: 1px solid ${colors.Blue400};
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  *::-webkit-scrollbar-track {
    background-color: ${colors.Blue100};
  }
`;

export const SingleAlphabetWrapper = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${colors.Blue200};
    border-radius: 50%;
    div {
      color: ${colors.Blue700};
    }
  }
  text-align: center;
  padding: 0 12px;
`;

export const GlossaryContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  gap: 8px;
  height: 70vh;
  overflow-y: auto;
  width: 100%;

  background-color: ${colors.Neutral200};
  border: 1px solid ${colors.Neutral400};
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
