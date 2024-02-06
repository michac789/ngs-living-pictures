import React from "react";
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
      <div>
        Copyright &copy; 2024 National Gallery Singapore. All rights reserved
      </div>
      <div>
        |
      </div>
      <div>
        Privacy Policy
      </div>
      <div>
        |
      </div>
      <div>
        Website
      </div>
    </FooterContainer>
  );
};
