import React from "react";
import { colors } from "../../constants/colors";

const ColorPalette = () => {
  const SinglePalette = ({ label }: { label: object }) => (
    <div>
      {Object.keys(label).map((color) => (
        <div
          key={color}
          style={{
            backgroundColor: label[color as keyof typeof label],
            padding: "20px"
          }}
        >
          {color}
        </div>
      ))}
    </div>
  )

  return (
    <div>
      <SinglePalette label={colors.Neutral} />
    </div>
  );
};

export default ColorPalette;
