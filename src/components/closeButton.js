import React from 'react';
import styled from 'styled-components';

import { CONSTANS, theme } from '../assets/globalStyles';

const ButtonWrap = styled.div`
  z-index: 100;
  position: absolute;
  right: 0;
  top: 0;
  width: ${CONSTANS.CLOSE_BUTTON_LENGTH}rem;
  height: ${CONSTANS.CLOSE_BUTTON_LENGTH}rem;
  border-radius: 0 ${theme.space.l}rem 0 ${theme.space.l}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active,
  :target,
  :focus {
    opacity: 0.33;
  }

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;

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
`;

const CloseButton = ({ onClick, style = {} }) => (
  <ButtonWrap style={style} onClick={onClick} />
);

export default CloseButton;
