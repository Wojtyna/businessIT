import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { theme } from '../assets/globalStyles';

gsap.registerPlugin(ScrollTrigger);

const LogoView = styled.div`
  width: ${({ LOGO_WIDTH }) => LOGO_WIDTH}rem;
  height: ${({ LOGO_HEIGHT }) => LOGO_HEIGHT}rem;
  display: flex;
`;

const LogoCircleWrap = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;

  ::before {
    z-index: 2;
    position: absolute;
    content: '';
    width: ${({ LOGO_HEIGHT }) => LOGO_HEIGHT}rem;
    height: ${({ LOGO_HEIGHT }) => LOGO_HEIGHT}rem;
    top: 0;
    border-radius: ${({ LOGO_HEIGHT }) => LOGO_HEIGHT}rem;
    border: solid ${({ LOGO_BORDER }) => LOGO_BORDER}rem ${theme.colors.primary};

    ${({ second }) =>
      second
        ? css`
            right: 0;
          `
        : css`
            left: 0;
          `}
  }
`;

const LogoEye = styled.div`
  position: absolute;
  top: 50%;
  width: ${({ LOGO_EYE_SPACE }) => LOGO_EYE_SPACE}rem;
  height: ${({ LOGO_EYE_SPACE }) => LOGO_EYE_SPACE}rem;
  border-radius: ${({ LOGO_EYE_SPACE }) => LOGO_EYE_SPACE}rem;

  ::before {
    position: absolute;
    content: '';
    top: ${({ LOGO_EYE_SPACE }) => LOGO_EYE_SPACE / 12}rem;
    left: ${({ LOGO_EYE_SPACE }) => LOGO_EYE_SPACE / 12}rem;
    width: ${({ LOGO_EYE_LENGTH }) => LOGO_EYE_LENGTH}rem;
    height: ${({ LOGO_EYE_LENGTH }) => LOGO_EYE_LENGTH}rem;
    border-radius: ${({ LOGO_EYE_LENGTH }) => LOGO_EYE_LENGTH}rem;
    background-color: ${theme.colors.dark};
  }

  ${({ second }) =>
    second
      ? css`
          right: ${({ LOGO_BORDER, LOGO_EYE_SPACE }) =>
            LOGO_BORDER + LOGO_EYE_SPACE / 2}rem;
          transform: translate(50%, -50%);
        `
      : css`
          left: ${({ LOGO_BORDER, LOGO_EYE_SPACE }) =>
            LOGO_BORDER + LOGO_EYE_SPACE / 2}rem;
          transform: translate(-50%, -50%);
        `}
`;

const AnimatedLogo = ({ id, logoWidth }) => {
  const LOGO_WIDTH = logoWidth;
  const LOGO_HEIGHT = LOGO_WIDTH * (203 / 330.44);
  const LOGO_BORDER = LOGO_HEIGHT / 4.5;
  const LOGO_EYE_LENGTH = LOGO_HEIGHT / 4;
  const LOGO_EYE_SPACE = LOGO_HEIGHT - LOGO_BORDER * 2;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth > 767) {
      const leftEye = document.getElementById(`LOGO_ANIMATED_LEFT_EYE_${id}`);
      const rightEye = document.getElementById(`LOGO_ANIMATED_RIGHT_EYE_${id}`);

      const setEyesPosition = (_ev) => {
        const mouseX = _ev.clientX;
        const mouseY = _ev.clientY;

        const leftEyeRect = leftEye.getBoundingClientRect();
        const rightEyeRect = rightEye.getBoundingClientRect();

        const leftAnchorX = leftEyeRect.left + leftEye.clientWidth / 2;
        const leftAnchorY = leftEyeRect.top + leftEye.clientHeight / 2;
        const rightAnchorX = rightEyeRect.left + rightEye.clientWidth / 2;
        const rightAnchorY = rightEyeRect.top + rightEye.clientHeight / 2;

        const leftRad = Math.atan2(mouseX - leftAnchorX, mouseY - leftAnchorY);
        const leftDeg = leftRad * (180 / Math.PI) * -1 + 270;
        const rightRad = Math.atan2(
          mouseX - rightAnchorX,
          mouseY - rightAnchorY
        );
        const rightDeg = rightRad * (180 / Math.PI) * -1 + 270;

        leftEye.style.transform = `translate(-50%, -50%) rotate(${
          leftDeg - 45
        }deg)`;
        rightEye.style.transform = `translate(50%, -50%) rotate(${
          rightDeg - 45
        }deg)`;
      };

      ScrollTrigger.create({
        scroller: '#wrapper',
        trigger: `#LOGO_ANIMATED_WRAP_${id}`,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => {
          window.addEventListener('mousemove', setEyesPosition);
        },
        onLeave: () => {
          window.removeEventListener('mousemove', setEyesPosition);
        },
        onEnterBack: () => {
          window.addEventListener('mousemove', setEyesPosition);
        },
        onLeaveBack: () => {
          window.removeEventListener('mousemove', setEyesPosition);
        },
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 50);
    }
    return () => {
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <LogoView
      LOGO_WIDTH={LOGO_WIDTH}
      LOGO_HEIGHT={LOGO_HEIGHT}
      id={`LOGO_ANIMATED_WRAP_${id}`}
    >
      <LogoCircleWrap LOGO_HEIGHT={LOGO_HEIGHT} LOGO_BORDER={LOGO_BORDER}>
        <LogoEye
          id={`LOGO_ANIMATED_LEFT_EYE_${id}`}
          LOGO_EYE_SPACE={LOGO_EYE_SPACE}
          LOGO_EYE_LENGTH={LOGO_EYE_LENGTH}
          LOGO_BORDER={LOGO_BORDER}
        />
      </LogoCircleWrap>

      <LogoCircleWrap
        LOGO_HEIGHT={LOGO_HEIGHT}
        LOGO_BORDER={LOGO_BORDER}
        second
      >
        <LogoEye
          id={`LOGO_ANIMATED_RIGHT_EYE_${id}`}
          second
          LOGO_EYE_SPACE={LOGO_EYE_SPACE}
          LOGO_EYE_LENGTH={LOGO_EYE_LENGTH}
          LOGO_BORDER={LOGO_BORDER}
        />
      </LogoCircleWrap>
    </LogoView>
  );
};

export default AnimatedLogo;
