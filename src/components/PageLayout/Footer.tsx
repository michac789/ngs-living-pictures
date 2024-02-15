import React from "react";
import { Text } from "../Text/Text";
import { colors } from "../../constants/colors";
import { FooterContainer, FooterImage, StyledLinkText } from "./FooterStyle";
import footerImg from "../../assets/footerImg.png";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterImage
        src={footerImg}
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