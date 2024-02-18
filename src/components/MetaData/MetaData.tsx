import React from "react";
import { Helmet } from "react-helmet-async";
import { metaData } from "../../constants/metadata";

export interface SingleMetaData {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
};

export const MetaData = ({
  title=metaData.default.title,
  description=metaData.default.description,
  name=metaData.default.name,
  type=metaData.default.type,
}: SingleMetaData) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
