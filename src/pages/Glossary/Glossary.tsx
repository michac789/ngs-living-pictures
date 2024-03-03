import React, { useRef, useState } from "react";
import {
  AlphabetListContainer,
  GlossaryContainer,
  GlossaryContentContainer,
  SingleAlphabetWrapper,
  TabContentContainer,
} from "./GlossaryStyle";
import { MetaData } from "../../components/MetaData/MetaData";
import { NavButton } from "../../components/NavButton/NavButton";
import { Tabs } from "../../components/Tabs/Tabs";
import { Text } from "../../components/Text/Text";
import { artistGlossary, artworkGlossary } from "../../constants/glossary";
import { metaData } from "../../constants/metadata";

const sortedArtworkGlossary = [...artworkGlossary].sort((a, b) => a.name.localeCompare(b.name));
const sortedArtistGlossary = [...artistGlossary].sort((a, b) => a.name.localeCompare(b.name));

const Glossary = () => {
  const [selected, setSelected] = useState<number>(0);
  const alphabetContainerRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const tabs = [
    "BY ARTIST",
    "BY ARTWORK",
  ];

  const handleLetterArtistsClick = (letter: string) => {
    const element = document.getElementById(`glossary-${letter}`);
    const containerOffsetTop = contentContainerRef.current?.offsetTop;
    if (element) {
      contentContainerRef.current?.scrollTo({
        top: element.offsetTop - containerOffsetTop! - 4,
        behavior: "smooth",
      });
    }
  }

  const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
  const tabContents = [
    (
      <TabContentContainer>
        <AlphabetListContainer ref={alphabetContainerRef}>
          {alphabet.map((letter, index) => (
            <SingleAlphabetWrapper
              key={index}
              onClick={() => handleLetterArtistsClick(letter)}
            >
              <Text variant="body1">
                {letter}
              </Text>
            </SingleAlphabetWrapper>
          ))}
        </AlphabetListContainer>
        <GlossaryContentContainer ref={contentContainerRef}>
          {alphabet.map((letter, index) => (
            <div key={index}>
              <Text
                variant="body1"
                style={{ fontWeight: 500 }}
                id={`glossary-${letter}`}
              >
                {letter}
              </Text>
              {sortedArtistGlossary.filter((item) => item.name.charAt(0).toUpperCase() === letter).map((item, index) => (
                <div key={index} style={{ paddingBottom: "4px" }}>
                  <Text variant="body1">
                    {item.name}
                  </Text>
                  <Text variant="body2">
                    {item.description}
                  </Text>
                </div>
              ))}
            </div>
          ))}
        </GlossaryContentContainer>
      </TabContentContainer>
    ),
    (
      <TabContentContainer>
        <AlphabetListContainer ref={alphabetContainerRef}>
          {alphabet.map((letter, index) => (
            <SingleAlphabetWrapper
              key={index}
              onClick={() => handleLetterArtistsClick(letter)}
            >
              <Text variant="body1">
                {letter}
              </Text>
            </SingleAlphabetWrapper>
          ))}
        </AlphabetListContainer>
        <GlossaryContentContainer ref={contentContainerRef}>
          {alphabet.map((letter, index) => (
            <div key={index}>
              <Text
                variant="body1"
                style={{ fontWeight: 500 }}
                id={`glossary-${letter}`}
              >
                {letter}
              </Text>
              {sortedArtworkGlossary.filter((item) => item.name.charAt(0).toUpperCase() === letter).map((item, index) => (
                <div key={index}>
                  <Text variant="body1">
                    {item.name}
                  </Text>
                  <Text variant="body2">
                    {item.description}
                  </Text>
                </div>
              ))}
            </div>
          ))}
        </GlossaryContentContainer>
      </TabContentContainer>
    ),
  ];
  const handleTabClick = (index: number) => {
    setSelected(index);
    if (alphabetContainerRef.current && contentContainerRef.current) {
      alphabetContainerRef.current.scrollTop = 0;
      contentContainerRef.current.scrollTop = 0;
    }
  }

  return (
    <GlossaryContainer>
      <MetaData {...metaData['glossary']} />
      <Tabs tabs={tabs} selected={selected} onTabClick={handleTabClick} fullWidth>
        {tabContents[selected]}
      </Tabs>
      <NavButton />
    </GlossaryContainer>
  );
}
export default Glossary;
