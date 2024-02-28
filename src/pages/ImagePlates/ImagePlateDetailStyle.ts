import styled from "styled-components";
import { Text } from "../../components/Text/Text";
import { colors } from "../../constants/styles/colors";

export const ImagePlateDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 110px);
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  flex: 0.55;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
  
  background-color: ${colors.Green100};
  height: 100%;
  padding: 4px;
  border-right: 2px solid ${colors.Green700};
  box-shadow: 0 0 6px 0 rgba(0, 100, 0, 0.75);
  overflow-y: auto;
`;

export const DocumentContainer = styled.div`
  display: flex;
  flex: 0.45;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const DocumentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: ${colors.Neutral100};
`;

export const DocumentTitleText = styled(Text)`
  margin-bottom: 16px;
  font-weight: 500;
`;

export const DocumentHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${colors.Neutral600};
  border-bottom: 1px solid ${colors.Neutral600};
`;

export const DocumentSingleHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px;

  &:hover {
    background-color: ${colors.Yellow500};
  }

  & > div > div > p {
    margin: 0;
  }
`;

export const DocumentDescriptionWrapper = styled.div`
  padding: 12px 8px 0;
  & > div > p {
    font-size: 16px;
  }
`;

export const DocumentSectionTitle = styled(Text)`
  border-bottom: 1px solid ${colors.Neutral600};
  margin: 0 8px 4px;
`;
