import styled from "styled-components";
import { colors } from "../../constants/styles/colors";

export const ImagePlateDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 110px);
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  flex: 0.6;
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
  flex: 0.4;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  background-color: ${colors.Neutral100};
  height: 100%;
`;
