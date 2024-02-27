import styled from "styled-components";
import { colors } from "../../constants/colors";

export const ImagePlatesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 32px;
  gap: 16px;
`;

export const SinglePlate = styled.div`
  width: 300px;
  height: 400px;
  padding: 24px;

  background-color: ${colors.Neutral200};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    background-color: ${colors.Neutral100};
  }
`;

export const StyledImage = styled.img`
  object-fit: cover;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.75);
  }
`;
