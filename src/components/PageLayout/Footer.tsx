import React from "react";
import { Text } from "../Text/Text";
import { colors } from "../../constants/styles/colors";
import {
  FooterContainer,
  FooterImage,
  MobileColumnFlexContainer,
  MobileRowFlexContainer,
  StyledLinkText,
} from "./FooterStyle";
import footerImg from "../../assets/footerImg.png";

interface FooterProps {
  isSmallScreen: boolean;
}

export const Footer = ({
  isSmallScreen,
}: FooterProps) => {
  const footerImage = (
    <FooterImage
      src={footerImg}
      alt="National Gallery Singapore Logo"
    />
  )
  const copyrightText = (
    <Text variant="body2" color={colors.Neutral200}>
      Copyright &copy; 2024 National Gallery Singapore. All rights reserved
    </Text>
  )
  const privacyPolicyText = (
    <StyledLinkText
      variant="body2"
      onClick={() => {
        window.open("https://www.nationalgallery.sg/privacy-policy", "_blank");
      }}
    >
      Privacy Policy
    </StyledLinkText>
  )
  const websiteText = (
    <StyledLinkText
      variant="body2"
      onClick={() => {
        window.open("https://www.nationalgallery.sg/", "_blank");
      }}
    >
      Website
    </StyledLinkText>
  )
  const dividerText = (
    <Text variant="body2" color={colors.Neutral200}>
      |
    </Text>
  )

  if (!isSmallScreen) return (
    <FooterContainer>
      {footerImage}
      {copyrightText}
      {dividerText}
      {privacyPolicyText}
      {dividerText}
      {websiteText}
    </FooterContainer>
  );

  return (
    <FooterContainer>
      {footerImage}
      <MobileColumnFlexContainer>
        {copyrightText}
        <MobileRowFlexContainer>
          {privacyPolicyText}
          {dividerText}
          {websiteText}
        </MobileRowFlexContainer>
      </MobileColumnFlexContainer>
    </FooterContainer>
  )
};
