import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorContainer, StyledErrorText } from "./ErrorStyle";
import { Button } from "../Button/Button"; 

const errorMessage = `
Oops! An error has occured. We apologize for the inconvenience.
The developer team will be notified and will work on investigating the issue.
`;

export const GeneralError = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
    window.location.reload();
  };

  return (
    <ErrorContainer>
      <StyledErrorText variant="subtitle2">
        {errorMessage}
      </StyledErrorText>
      <Button onClick={handleClick}>
        Back to home page
      </Button>
    </ErrorContainer>
  )
};
