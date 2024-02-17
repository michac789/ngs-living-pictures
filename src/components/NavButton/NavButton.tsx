import React, { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavButtonContainer } from "./NavButtonStyle";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { orderedPages } from "../../constants/pages";

export const NavButton = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ ...props }, ref) => {
    const navigate = useNavigate();
    const [backLink, setBackLink] = useState<string | null>(null);
    const [nextLink, setNextLink] = useState<string | null>(null);
    const mainContainer = document.getElementById("main-container");

    useEffect(() => {
      const currentPath = window.location.pathname;
      const currentIndex = orderedPages.findIndex((page) => page.link === currentPath);
      if (currentIndex > 0) {
        setBackLink(orderedPages[currentIndex - 1].link);
      } else {
        setBackLink(null);
      }
      if (currentIndex < orderedPages.length - 1) {
        setNextLink(orderedPages[currentIndex + 1].link);
      } else {
        setNextLink(null);
      }
    }, [navigate]);

    const handleBackClick = () => {
      if (backLink) {
        navigate(backLink);
        mainContainer?.scrollTo({ top: 0 });
      }
    }
    const handleNextClick = () => {
      if (nextLink) {
        navigate(nextLink);
        mainContainer?.scrollTo({ top: 0 });
      }
    }

    return (
      <NavButtonContainer ref={ref} {...props}>
        {backLink && (
            <Button
              onClick={handleBackClick}
              icon={<Icon name="ri-arrow-left-s-line" />}
              iconPosition="left"
            >
              Back
            </Button>
          )
        }
        {nextLink && (
          <Button
            onClick={handleNextClick}
            icon={<Icon name="ri-arrow-right-s-line" />}
            iconPosition="right"
          >
            Next
          </Button>
        )}
      </NavButtonContainer>
    )
  }
);
