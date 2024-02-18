import React, { useState } from "react";
import { MetaData } from "../../components/MetaData/MetaData";
import { NavButton } from "../../components/NavButton/NavButton";
import { Tabs } from "../../components/Tabs/Tabs";
import { Text } from "../../components/Text/Text";
import { metaData } from "../../constants/metadata";

const Glossary = () => {
  const [selected, setSelected] = useState<number>(0);
  const tabs = [
    "BY ARTIST",
    "BY ARTWORK",
  ];

  const tabContents = [
    <div>Tab 1 Content</div>,
    <div>Tab 2 Content</div>,
  ];
  const handleTabClick = (index: number) => {
    setSelected(index);
  }

  return (
    <>
      <MetaData {...metaData['glossary']} />
      <Text variant="title2">
        Glossary - TODO
      </Text>
      <Tabs tabs={tabs} selected={selected} onTabClick={handleTabClick} fullWidth>
        {tabContents[selected]}
      </Tabs>
      <NavButton />
    </>
  );
}
export default Glossary;
