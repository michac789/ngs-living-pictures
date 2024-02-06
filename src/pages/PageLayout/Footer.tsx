import React from "react";
import { Text } from "../../components/Text/Text";
import { colors } from "../../constants/colors";
import { FooterContainer } from "./FooterStyle";

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <img
          src="https://www.nationalgallery.sg/nationalgallery-og.png"
          alt="National Gallery Singapore Logo"
          style={{
            width: "50px",
            marginRight: "8px",
          }}
        />
      </div>
      <Text variant="body2" color={colors.Neutral200}>
        Copyright &copy; 2024 National Gallery Singapore. All rights reserved
      </Text>
      <Text variant="body2" color={colors.Neutral200}>
        |
      </Text>
      <Text variant="body2" color={colors.Neutral200}>
        Privacy Policy
      </Text>
      <Text variant="body2" color={colors.Neutral200}>
        |
      </Text>
      <Text variant="body2" color={colors.Neutral200}>
        Website
      </Text>
    </FooterContainer>
  );
};
