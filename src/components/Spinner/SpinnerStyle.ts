import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spinner-spin {
    to {
      transform: rotate(360deg);
    }
  }
  svg {
    animation: spinner-spin 1s linear infinite;
  }
`;
