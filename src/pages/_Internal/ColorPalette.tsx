import React from "react";
import { colors } from "../../constants/colors";

const ColorPalette = () => {
  return (
    <div>
      {Object.keys(colors).map((color) => (
        <div
          key={color}
          style={{
            backgroundColor: colors[color as keyof typeof colors],
            padding: "20px"
          }}
        >
          {color}
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
