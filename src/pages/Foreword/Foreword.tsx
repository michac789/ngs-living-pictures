import React from "react";
import { forewordConstants } from "../../constants/foreword";
import { ContentButtonContainer, ForewordTextContainer, SubtitleText, TitleText } from "./ForewordStyle";
import { Markdown } from "../../components/Markdown/Markdown";
import { Button } from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";

const Foreword = () => {
  return (
    <>
      <TitleText variant="title1">
        Foreword
      </TitleText>
      <SubtitleText variant="subtitle2">
        {forewordConstants.subtitle}
      </SubtitleText>
      <ForewordTextContainer>
        <Markdown value={forewordConstants.forewordTextMd} />
      </ForewordTextContainer>
      <ContentButtonContainer>
        <Button
          icon={<Icon name="ri-arrow-left-s-line" />}
          iconPosition="left"
        >
          Back
        </Button>
        <Button
          icon={<Icon name="ri-arrow-right-s-line" />}
          iconPosition="right"
        >
          Next
        </Button>
      </ContentButtonContainer>
    </>
  );
}
export default Foreword;
