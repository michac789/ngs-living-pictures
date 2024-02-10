import React from "react";
import { forewordConstants } from "../../constants/foreword";
import { ForewordTextContainer, SubtitleText, TitleText } from "./ForewordStyle";
import { Markdown } from "../../components/Markdown/Markdown";
import { NavButton } from "../../components/NavButton/NavButton";

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
      <NavButton />
    </>
  );
}
export default Foreword;
