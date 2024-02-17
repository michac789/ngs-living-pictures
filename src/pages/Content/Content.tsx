import React from "react";
import { useNavigate } from "react-router-dom";
import { ContentContainer, ContentLinkText, TitleText } from "./ContentStyle";
import { Icon } from "../../components/Icon/Icon";
import { MetaData } from "../../components/MetaData/MetaData";
import { NavButton } from "../../components/NavButton/NavButton";
import { metaData } from "../../constants/metadata";
import { orderedPages } from "../../constants/pages";

const Content = () => {
  const navigate = useNavigate();
  const mainContainer = document.getElementById("main-container");

  const handleLinkClick = (link: string) => {
    navigate(link);
    mainContainer?.scrollTo({ top: 0 });
  }

  return (
    <>
      <MetaData {...metaData.content} />
      <TitleText variant="title1">
        Contents
      </TitleText>
      <ContentContainer>
        {orderedPages.slice(2).map((page, index) => (
          <ContentLinkText
            variant="title3"
            key={index}
            onClick={() => handleLinkClick(page.link)}
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
