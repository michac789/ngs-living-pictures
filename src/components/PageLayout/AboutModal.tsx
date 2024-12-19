import React from "react";
import { Modal } from "../Modal/Modal";
import { Text } from "../Text/Text";
import { AboutContentContainer } from "./AboutModalStyle";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal = ({
  isOpen,
  onClose,
}: AboutModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="About This Site">
      <AboutContentContainer>
        <Text variant="title3">
          Welcome to My Portfolio!
        </Text>
        <Text variant="body2" style={{ textAlign: 'justify' }}>
          Hi, I'm Michael, a software engineer based in Singapore. This website was originally developed as part of a
          volunteering project for National Gallery Singapore, in collaboration with Nanyang Technological University.
          I built a customized digital publication platform, called Living Pictures, tailored to their requirements.
          With their permission, I am showcasing this project as part of my portfolio.
        </Text>
        <Text variant="body2" style={{ textAlign: 'justify' }}>
          This project highlights my skills in frontend development (React TypeScript) and UI/UX design.
          It features entirely custom-crafted UI components, a complete design system, responsive design,
          animations, attention to detail, and various features you can explore throughout the site!
          You can view the source code{' '}
          <a href="https://github.com/michac789/ngs-living-pictures" target="_blank" rel="noopener noreferrer">
            here
          </a>.
        </Text>
        <Text variant="body2" style={{ textAlign: 'justify' }}>
          If you'd like to collaborate or discuss potential projects, feel free to reach out to me at{' '}
          <strong>(+65) 94289104</strong> or via email at <strong>michaelac978@gmail.com</strong>.
        </Text>
      </AboutContentContainer>
    </Modal>
  );
};
