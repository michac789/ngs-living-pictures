import React from "react";
import { SingleContributor } from "./SingleContributor";
import { PageContent } from "../../components/PageContent/PageContent";
import { MetaData } from "../../components/MetaData/MetaData";
import { contributorList } from "../../constants/contributors";
import { metaData } from "../../constants/metadata";

const Contributors = () => {
  const imagesDict: {[key: string]: string} = {};
  contributorList.forEach((contributor) => {
    imagesDict[contributor.imageUrl] = require(
      `../../assets/${contributor.imageUrl}`);
  });

  return (
    <PageContent data={{
      title: 'Contributors',
    }}>
      <MetaData {...metaData.contributors} />
      {contributorList.map((contributor, index) => (
        <SingleContributor
          key={index}
          name={contributor.name}
          descriptionMd={contributor.descriptionMd}
          image={imagesDict[contributor.imageUrl]}
          portfolioUrl={contributor.portfolioUrl}
          essays={contributor.essays}
        />
      ))}
    </PageContent>
  );
}
export default Contributors;
