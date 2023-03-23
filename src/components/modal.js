import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { CONSTANS, theme } from '../assets/globalStyles';
import CloseButton from './closeButton';

export const ModalWrap = styled.aside`
  z-index: 300;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: translateX(100%);

  @media ${theme.windowSize.mid} {
    transform: none;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.transparentLight};
    backdrop-filter: blur(0.7rem);
    -webkit-backdrop-filter: blur(0.7rem);
  }
`;

export const ContentWrap = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: ${CONSTANS.SCROLL_BAR_WIDTH}rem;
  }
  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.light1};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.light2};
    border-radius: ${CONSTANS.SCROLL_BAR_WIDTH}rem;
  }

  @media ${theme.windowSize.mid} {
    width: max-content;
    max-width: ${CONSTANS.MAX_CONTENT_WIDTH}rem;
    height: max-content;
    max-height: 80%;
    background-color: ${theme.colors.transparentLight};
    backdrop-filter: blur(0.7rem);
    -webkit-backdrop-filter: blur(0.7rem);
    border-radius: ${theme.space.l}rem;
  }
`;

export default function Modal({ children, closePage, visible }) {
  const ModalIsVisible = useRef(false);
  const IS_MOBILE = typeof window !== 'undefined' && window.innerWidth < 767;

  const onClose = () => {
    ModalIsVisible.current = false;
    modalAnimation(closePage);
  };

  const modalAnimation = (onComplete = () => {}) => {
    gsap.to('#modal-wrap', {
      transform: IS_MOBILE
        ? ModalIsVisible.current
          ? 'translateX(0)'
          : 'translateX(100%)'
        : 'none',
      opacity: !IS_MOBILE ? (ModalIsVisible.current ? '1' : '0') : '1',
      duration: 0.2,
      onComplete: onComplete,
    });
  };

  useEffect(() => {
    if (visible) {
      ModalIsVisible.current = true;
      modalAnimation();
    }
  }, [visible]);

  return visible ? (
    <ModalWrap id="modal-wrap">
      <ContentWrap>
        <CloseButton onClick={onClose} />
        {children}
      </ContentWrap>
    </ModalWrap>
  ) : (
    <></>
  );
}
