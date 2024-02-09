import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  CoverImage,
  CoverImageContainer,
  DownArrowWrapper,
  EnterButtonWrapper,
  HomeContentContainer,
  TitleOverlayWrapper
} from "./HomeStyle";
import { Icon } from "../../components/Icon/Icon";
import { Markdown } from "../../components/Markdown/Markdown";
import { Text } from "../../components/Text/Text";
import { colors } from "../../constants/colors";
import { homeConstants } from "../../constants/home";

const coverImg = require(`../../assets/${homeConstants.coverImagePath}`);

const Home = () => {
  const navigate = useNavigate();
  const nextButtonRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    navigate("/content");
  }

  const handleEnterClick = () => {
    nextButtonRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <CoverImageContainer>
        <CoverImage src={coverImg} alt="test" />
        <DownArrowWrapper onClick={handleEnterClick}>
          <Icon name="hi-chevron-down" size="40px" fill={colors.Neutral800} stroke={colors.Neutral200} />
        </DownArrowWrapper>
        <TitleOverlayWrapper>
          <Text variant="title1" color={colors.Neutral200}>
            {homeConstants.coverTitle}
          </Text>
          <Text variant="title2" color={colors.Neutral200}>
            {homeConstants.coverSubtitle}
          </Text>
          <Text variant="subtitle" color={colors.Neutral200}>
            {homeConstants.coverSubtitle2}
          </Text>
          <EnterButtonWrapper variant="button" onClick={handleEnterClick}>
            ENTER
          </EnterButtonWrapper>
        </TitleOverlayWrapper>
      </CoverImageContainer>
      <HomeContentContainer>
        <Markdown value={homeConstants.homeTextMd} />
      </HomeContentContainer>
      <div ref={nextButtonRef}>
        <button onClick={handleNext}>
          Enter
        </button>
      </div>
    </>
  );
}
export default Home;
