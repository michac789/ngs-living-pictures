import React from "react";
import { Text } from "../../components/Text/Text";
import { colors } from "../../constants/colors";
import { FooterContainer, FooterImage, StyledLinkText } from "./FooterStyle";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterImage
        src="https://www.nationalgallery.sg/nationalgallery-og.png"
        alt="National Gallery Singapore Logo"
      />
      <Text variant="body2" color={colors.Neutral200}>
        Copyright &copy; 2024 National Gallery Singapore. All rights reserved
      </Text>
      <Text variant="body2" color={colors.Neutral200}>
        |
      </Text>
      <StyledLinkText
        variant="body2"
        onClick={() => {
        window.open("https://www.nationalgallery.sg/privacy-policy", "_blank");
      }}>
        Privacy Policy
      </StyledLinkText>
      <Text variant="body2" color={colors.Neutral200}>
        |
      </Text>
      <StyledLinkText
        variant="body2"
        onClick={() => {
        window.open("https://www.nationalgallery.sg/", "_blank");
      }}>
        Website
      </StyledLinkText>
    </FooterContainer>
  );
};
