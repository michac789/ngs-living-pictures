import styled from "styled-components";
import { Text } from "../../components/Text/Text";
import { breakpoints } from "../../constants/styles/breakpoints";
import { colors } from "../../constants/styles/colors";

export const ImagePlateDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 110px);

  @media (max-width: ${breakpoints.medium}) {
    height: calc(100vh - 81.5px);
  }
  @media (max-width: ${breakpoints.small}) {
    flex-direction: column;
    height: auto;
  }
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  flex: 0.45;
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

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
    aspect-ratio: 1 / 1;
    height: 400px;
  }
`;

export const DocumentContainer = styled.div`
  display: flex;
  flex: 0.55;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: ${breakpoints.medium}) {
    padding: 12px;
  }
  @media (max-width: ${breakpoints.small}) {
    padding: 8px;
  }
`;

export const DocumentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: ${colors.Neutral100};

  @media (max-width: ${breakpoints.medium}) {
    padding: 8px;
  }
  @media (max-width: ${breakpoints.small}) {
    padding: 6px;
  }
`;

export const DocumentTitleText = styled(Text)`
  margin-bottom: 16px;
  font-weight: 500;

  @media (max-width: ${breakpoints.medium}) {
    margin-bottom: 12px;
  }
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

  @media (max-width: ${breakpoints.medium}) {
    padding: 4px;
  }
`;

export const DocumentHeaderLeftText = styled(Text)`
  flex: 1;
  font-weight: 600;
  margin-left: 2px;
  display: flex;
  align-items: center;
`;

export const DocumentHeaderRightText = styled(Text)`
  flex: 2;
`;

export const DocumentDescriptionWrapper = styled.div`
  padding: 12px 8px 0;
  & > div > p {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.medium}) {
    padding: 8px 4px 0;

    & > div > p {
      font-size: 12px;
    }
  }
`;

export const DocumentSection = styled.div`
  & > div > p {
    padding: 0 8px;
  }

  @media (max-width: ${breakpoints.medium}) {
    & > div > p {
      padding: 0 4px;
      margin: 0 0 8px;
    }
  }
`;

export const DocumentSectionTitle = styled(Text)`
  border-bottom: 1px solid ${colors.Neutral600};
  margin: 0 8px 4px;

  @media (max-width: ${breakpoints.medium}) {
    margin: 0 4px 4px;
  }
`;
