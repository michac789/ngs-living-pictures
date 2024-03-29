import React, { useEffect, useRef, useState } from "react";
import { HeaderText, OptionsFlexContainer, SingleOptionWrapper } from "./ShareOptionStyle";
import { Backdrop } from "../Backdrop/Backdrop";
import { Icon } from "../Icon/Icon";
import { Portal } from "../Portal/Portal";
import { Tooltip } from "../Tooltip/Tooltip";
import { useOnClickOutside } from "../../utils/useOnClickOutside";

interface ShareOptionProps {
  onClose: () => void;
}

export const ShareOption = ({
  onClose,
}: ShareOptionProps) => {
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const singleOptionRefs = {
    header: useRef<HTMLDivElement>(null),
    facebook: useRef<HTMLDivElement>(null),
    twitter: useRef<HTMLDivElement>(null),
    pinterest: useRef<HTMLDivElement>(null),
    whatsapp: useRef<HTMLDivElement>(null),
    linkedin: useRef<HTMLDivElement>(null),
    telegram: useRef<HTMLDivElement>(null),
  }

  const timeout = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);
  const handleClose = () => {
    setIsExiting(true);
    timeout.current = setTimeout(() => {
      setIsExiting(false);
      onClose();
    }, 270);
  }

  useOnClickOutside(handleClose,
    singleOptionRefs.header,
    singleOptionRefs.facebook,
    singleOptionRefs.twitter,
    singleOptionRefs.pinterest,
    singleOptionRefs.whatsapp,
    singleOptionRefs.linkedin,
    singleOptionRefs.telegram  
  );

  const url = window.location.href;
  const title = document.title;

  const shareOnFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookShareUrl, '_blank');
  };

  const shareOnTwitter = () => {
    const twitterShareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(twitterShareUrl, '_blank');
  };

  const shareOnPinterest = () => {
    const pinterestShareUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=&description=${encodeURIComponent(title)}`;
    window.open(pinterestShareUrl, '_blank');
  };

  const shareOnWhatsApp = () => {
    const whatsAppShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} - ${url}`)}`;
    window.open(whatsAppShareUrl, '_blank');
  };

  const shareOnLinkedIn = () => {
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    window.open(linkedInShareUrl, '_blank');
  };

  const shareOnTelegram = () => {
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    window.open(telegramShareUrl, '_blank');
  };

  return (
    <Portal>
      <Backdrop isExiting={isExiting} onExit={handleClose}>
        <HeaderText variant="title2" ref={singleOptionRefs.header}>
          Share via
        </HeaderText>
        <OptionsFlexContainer>
          <Tooltip contents="Twitter" style={{
            zIndex: 500,
          }} timeout={0} position="left" hoverable>
            <SingleOptionWrapper
              data-type="twitter"
              ref={singleOptionRefs.twitter}
              onClick={shareOnTwitter}
            >
              <Icon name="ri-twitter-fill" />
            </SingleOptionWrapper>
          </Tooltip>
          <Tooltip contents="Facebook" style={{
            zIndex: 500,
          }} timeout={0} position="top" hoverable>
            <SingleOptionWrapper
              data-type="facebook"
              ref={singleOptionRefs.facebook}
              onClick={shareOnFacebook}
            >
              <Icon name="ri-facebook-fill" />
            </SingleOptionWrapper>
          </Tooltip>
          <Tooltip contents="Pinterest" style={{
            zIndex: 500,
          }} timeout={0} position="right" hoverable>
            <SingleOptionWrapper
              data-type="pinterest"
              ref={singleOptionRefs.pinterest}
              onClick={shareOnPinterest}
            >
              <Icon name="ri-pinterest-line" />
            </SingleOptionWrapper>
          </Tooltip>
        </OptionsFlexContainer>
        <OptionsFlexContainer>
          <Tooltip contents="WhatsApp" style={{
            zIndex: 500,
          }} timeout={0} position="left" hoverable>
            <SingleOptionWrapper
              data-type="whatsapp"
              ref={singleOptionRefs.whatsapp}
              onClick={shareOnWhatsApp}
            >
              <Icon name="ri-whatsapp-fill" />
            </SingleOptionWrapper>
          </Tooltip>
          <Tooltip contents="Linkedin" style={{
            zIndex: 500,
          }} timeout={0} position="bottom" hoverable>
            <SingleOptionWrapper
              data-type="linkedin"
              ref={singleOptionRefs.linkedin}
              onClick={shareOnLinkedIn}
            >
              <Icon name="ri-linkedin-fill" />
            </SingleOptionWrapper>
          </Tooltip>
          <Tooltip contents="Telegram" style={{
            zIndex: 500,
          }} timeout={0} position="right" hoverable>
            <SingleOptionWrapper
              data-type="telegram"
              ref={singleOptionRefs.telegram}
              onClick={shareOnTelegram}
            >
              <Icon name="ri-telegram-line" />
            </SingleOptionWrapper>
          </Tooltip>
        </OptionsFlexContainer>
      </Backdrop>
    </Portal>
  )
};
