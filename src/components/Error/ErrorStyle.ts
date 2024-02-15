import styled from "styled-components";
import { Text } from "../Text/Text";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 100px;
  padding: 16px;
  text-align: center;
`;

export const StyledErrorText = styled(Text)`
  max-width: 700px;
`;
