import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

import { CONSTANS, theme } from '../assets/globalStyles';
import CloseButton from './closeButton';

const ModalWrap = styled.aside`
  z-index: 300;
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(100%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${theme.windowSize.mid} {
    transform: none;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(1.4rem);
    -webkit-backdrop-filter: blur(1.4rem);
  }
`;

const ContentWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media ${theme.windowSize.mid} {
    width: max-content;
    height: 100%;
    max-width: ${CONSTANS.MAX_CONTENT_WIDTH}rem;
    max-height: 80%;
    margin-inline: ${theme.space.xl}rem;
    border-radius: ${theme.space.l}rem;
    overflow: hidden;
  }
`;

const ChildrenWrap = styled.div`
  width: 100%;
  height: 100%;

  @media ${theme.windowSize.mid} {
    width: auto;
  }
`;

const StyledChildren = styled.div`
  background-color: white;
  /* box-shadow: 0 0 8rem -8rem black; */
  border-radius: ${theme.space.l}rem;
  min-height: 100%;
  overflow: hidden;

  @media ${theme.windowSize.mid} {
    height: auto;
    min-height: auto;
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
        <CloseButton onClick={onClose} borderRadius={!IS_MOBILE} />
        <ChildrenWrap className="scrollView">
          <StyledChildren>{children}</StyledChildren>
        </ChildrenWrap>
      </ContentWrap>
    </ModalWrap>
  ) : (
    <></>
  );
}
