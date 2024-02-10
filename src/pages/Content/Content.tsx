import React from "react";
import { useNavigate } from "react-router-dom";
import { ContentContainer, ContentLinkText, TitleText } from "./ContentStyle";
import { Icon } from "../../components/Icon/Icon";
import { NavButton } from "../../components/NavButton/NavButton";
import { contentLinks } from "../../constants/content";

const Content = () => {
  const navigate = useNavigate();

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
      <NavButton />
    </>
  );
}
export default Content;
