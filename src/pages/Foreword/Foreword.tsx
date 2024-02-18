import React from "react";
import { forewordConstants } from "../../constants/foreword";
import {
  ForewordBgContainer,
  ForewordTextContainer,
  SubtitleText,
  TitleText,
} from "./ForewordStyle";
import { Markdown } from "../../components/Markdown/Markdown";
import { MetaData } from "../../components/MetaData/MetaData";
import { NavButton } from "../../components/NavButton/NavButton";
import { metaData } from "../../constants/metadata";

const Foreword = () => {
  return (
    <ForewordBgContainer>
      <MetaData {...metaData.foreword} />
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
    </ForewordBgContainer>
  );
}
export default Foreword;
