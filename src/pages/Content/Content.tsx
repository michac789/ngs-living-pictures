import React from "react";
import { useNavigate } from "react-router-dom";
import { ContentButtonContainer, ContentContainer, ContentLinkText, TitleText } from "./ContentStyle";
import { Button } from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";
import { contentLinks } from "../../constants/content";

const Content = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  }
  const handleNext = () => {
    navigate('/foreword');
  }

  return (
    <>
      <TitleText variant="title1">
        Contents
      </TitleText>
      <ContentContainer>
        {contentLinks.map((link) => (
          <ContentLinkText
            variant="title3"
            key={link.path}
            onClick={() => navigate(link.path)}
          >
            {link.title}
            {link.author && (
              <span>&mdash; {link.author}</span>
            )}
            <Icon name="ri-arrow-right-line" />
          </ContentLinkText>
        ))}
      </ContentContainer>
      <ContentButtonContainer>
        <Button
          onClick={handleBack}
          icon={<Icon name="ri-arrow-left-s-line" />}
          iconPosition="left"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          icon={<Icon name="ri-arrow-right-s-line" />}
          iconPosition="right"
        >
          Next
        </Button>
      </ContentButtonContainer>
    </>
  );
}
export default Content;
