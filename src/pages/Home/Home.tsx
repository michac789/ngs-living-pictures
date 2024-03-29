import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  CoverImage,
  CoverImageContainer,
  DownArrowWrapper,
  EnterButtonWrapper,
  HomeContentContainer,
  NextButtonContainer,
  StyledIcon,
  TitleOverlayWrapper,
} from "./HomeStyle";
import { Button } from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";
import { Markdown } from "../../components/Markdown/Markdown";
import { MetaData } from "../../components/MetaData/MetaData";
import { Text } from "../../components/Text/Text";
import { textVariantMapping } from "../../components/Text/TextStyle";
import { colors } from "../../constants/styles/colors";
import { homeConstants } from "../../constants/home";
import { metaData } from "../../constants/metadata";

const Home = () => {
  const navigate = useNavigate();
  const nextButtonRef = useRef<HTMLDivElement>(null);

  let coverImg;
  try {
    coverImg = require(`../../assets/${homeConstants.coverImagePath}`);
  } catch (e) {
    console.warn(`Image ${homeConstants.coverImagePath} not found, please check that you entered the correct path`);
  }

  const handleNext = () => {
    navigate('/content');
  }

  const handleEnterClick = () => {
    nextButtonRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <MetaData {...metaData.cover} />
      <CoverImageContainer>
        <CoverImage src={coverImg} alt={homeConstants.coverImageAlt} />
        <DownArrowWrapper onClick={handleEnterClick}>
          <StyledIcon name="ri-arrow-down-s-line" />
        </DownArrowWrapper>
        <TitleOverlayWrapper>
          <Text variant="title1" color={colors.Neutral200}>
            {homeConstants.coverTitle}
          </Text>
          <Text variant="title2" color={colors.Neutral200}>
            {homeConstants.coverSubtitle}
          </Text>
          <Text variant="subtitle1" color={colors.Neutral200}>
            {homeConstants.coverSubtitle2}
          </Text>
          <EnterButtonWrapper variant="button" onClick={handleEnterClick}>
            ENTER
          </EnterButtonWrapper>
          <Markdown
            value={homeConstants.creditTextMd}
            additionalStyles={{
              ...textVariantMapping.body2,
              color: colors.Neutral200,
            }}
          />
        </TitleOverlayWrapper>
      </CoverImageContainer>
      <HomeContentContainer>
        <Markdown value={homeConstants.homeTextMd} />
      </HomeContentContainer>
      <NextButtonContainer>
        <Button
          icon={<Icon name="ri-arrow-right-s-line" />}
          iconPosition="right"
          ref={nextButtonRef}
          onClick={handleNext}
        >
          Next
        </Button>
      </NextButtonContainer>
    </>
  );
}
export default Home;
