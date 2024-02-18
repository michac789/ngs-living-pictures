import React from "react";
import { Text } from "../../components/Text/Text";
import { colors } from "../../constants/colors";

const getTextColor = (hexColor: string) => {
  hexColor = hexColor.replace('#', '');
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? colors.Neutral800 : colors.Neutral200;
}

const ColorPalette = () => {
  return (
    <>
      {Object.keys(colors).map((color) => (
        <Text variant="body2" style={{
          backgroundColor: colors[color as keyof typeof colors],
          color: getTextColor(colors[color as keyof typeof colors]),
          padding: "20px",
        }}>
          {color} - {colors[color as keyof typeof colors]}
        </Text>
      ))}
    </>
  );
};
export default ColorPalette;
