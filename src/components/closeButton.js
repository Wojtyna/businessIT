import React from 'react';
import styled, { css } from 'styled-components';

import { CONSTANS, theme } from '../assets/globalStyles';

import BackImage from '../assets/images/icons/arrow.webp';

const ButtonWrap = styled.div`
  z-index: 100;
  position: absolute;
  width: ${CONSTANS.CLOSE_BUTTON_LENGTH}rem;
  height: ${CONSTANS.CLOSE_BUTTON_LENGTH}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  cursor: pointer;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;

  ${({ backIcon }) =>
    backIcon
      ? css`
          left: -0.1rem;
          top: 0;
          border-radius: ${({ borderRadius }) =>
            borderRadius
              ? `${theme.space.l}rem 0 ${theme.space.l}rem 0`
              : `0 0  ${theme.space.l}rem 0`};
          background-color: ${theme.colors.transparentLight};
          backdrop-filter: blur(1.4rem);
          -webkit-backdrop-filter: blur(1.4rem);

          ::after {
            position: absolute;
            content: '';
            width: 40%;
            height: 40%;
            display: block;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(90deg);
            background-image: url(${BackImage});
            background-color: transparent;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
        `
      : css`
          right: 0;
          top: 0;
          border-radius: ${({ borderRadius }) =>
            borderRadius
              ? `0 ${theme.space.l}rem 0 ${theme.space.l}rem`
              : `0 0 0 ${theme.space.l}rem`};

          ::after,
          ::before {
            position: absolute;
            content: '';
            width: 50%;
            height: 0.4rem;
            background-color: white;
            display: block;
            top: 50%;
            left: 50%;
            border-radius: 0.4rem;
          }

          ::after {
            transform: translate(-50%, -50%) rotate(45deg);
          }

          ::before {
            transform: translate(-50%, -50%) rotate(-45deg);
          }
        `}
`;

const CloseButton = ({
  onClick,
  style = {},
  borderRadius = false,
  backIcon = false,
}) => (
  <ButtonWrap
    style={style}
    onClick={onClick}
    borderRadius={borderRadius}
    backIcon={backIcon}
  />
);

export default CloseButton;
