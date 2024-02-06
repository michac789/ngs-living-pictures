import React from "react";
import { Text } from "../../components/Text/Text";
import { textVariants } from "../../components/Text/TextStyle";

const Typography = () => {
  return (
    <>
      {textVariants.map((variant) => (
        <Text key={variant} variant={variant}>
          {variant} - A quick brown fox jumps over the lazy dog
        </Text>
      ))}
    </>
  );
};
export default Typography;
