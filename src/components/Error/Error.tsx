import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorContainer, NotFoundErrorContainer, NotFoundImage, StyledErrorText } from "./ErrorStyle";
import { Button } from "../Button/Button"; 
import Error404Img from "../../assets/error404.webp";

const generalErrorMessage = `
Oops! An error has occured. We apologize for the inconvenience.
The developer team will be notified and will work on investigating the issue.
`;
const notFoundMessage = `
The page you are looking for does not exist or might have been removed.
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
        {generalErrorMessage}
      </StyledErrorText>
      <Button onClick={handleClick}>
        Back to home page
      </Button>
    </ErrorContainer>
  )
};

export const PageNotFoundError = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <NotFoundErrorContainer>
      <NotFoundImage src={Error404Img} alt="404 Error" />
      <StyledErrorText variant="subtitle2">
        {notFoundMessage}
      </StyledErrorText>
      <Button onClick={handleClick}>
        Back to home page
      </Button>
    </NotFoundErrorContainer>
  )
};
