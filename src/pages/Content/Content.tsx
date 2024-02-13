import React from "react";
import { useNavigate } from "react-router-dom";
import { ContentContainer, ContentLinkText, TitleText } from "./ContentStyle";
import { Icon } from "../../components/Icon/Icon";
import { NavButton } from "../../components/NavButton/NavButton";
import { orderedPages } from "../../constants/pages";

const Content = () => {
  const navigate = useNavigate();

  return (
    <>
      <TitleText variant="title1">
        Contents
      </TitleText>
      <ContentContainer>
        {orderedPages.slice(2).map((page, index) => (
          <ContentLinkText
            variant="title3"
            key={index}
            onClick={() => navigate(page.link)}
          >
            {page.name}
            {page.author && (
              <span>&nbsp;&mdash;&nbsp;{page.author}</span>
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
