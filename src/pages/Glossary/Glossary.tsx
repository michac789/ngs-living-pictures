import React, { useState } from "react";
import { GlossaryContainer, TabContentContainer } from "./GlossaryStyle";
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
  const tabs = [
    "BY ARTIST",
    "BY ARTWORK",
  ];

  const tabContents = [
    (
      <TabContentContainer>
        {sortedArtistGlossary.map((item, index) => (
          <div key={index}>
            <Text variant="body1" style={{ fontWeight: 500 }}>
              {item.name}
            </Text>
            <Text variant="body2">
              {item.description}
            </Text>
          </div>
        ))}
      </TabContentContainer>
    ),
    (
      <TabContentContainer>
        {sortedArtworkGlossary.map((item, index) => (
          <div key={index}>
            <Text variant="body1" style={{ fontWeight: 500 }}>
              {item.name}
            </Text>
            <Text variant="body2">
              {item.description}
            </Text>
          </div>
        ))}
      </TabContentContainer>
    ),
  ];
  const handleTabClick = (index: number) => {
    setSelected(index);
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
