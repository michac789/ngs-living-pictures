import React from "react";
import { MetaData } from "../../components/MetaData/MetaData";
import { NavButton } from "../../components/NavButton/NavButton";
import { Text } from "../../components/Text/Text";
import { metaData } from "../../constants/metadata";

const Glossary = () => {
  return (
    <>
      <MetaData {...metaData['glossary']} />
      <Text variant="title2">
        Glossary - TODO
      </Text>
      <NavButton />
    </>
  );
}
export default Glossary;
