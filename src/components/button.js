import React from 'react';
import styled, { css } from 'styled-components';

import { CONSTANS, theme } from '../assets/globalStyles';

const ButtonWrap = styled.div`
  min-height: ${CONSTANS.BUTTON_MIN_HEIGHT_MOBILE}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.space.xs}rem;
  transition: border-color 0.2s ease-in-out;
  border: solid 0.1rem ${theme.colors.light3};
  padding: 0.8rem 1.6rem;

  :hover {
    cursor: pointer;
  }

  :active,
  :target,
  :focus {
  }

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;

  ${({ active, filled }) =>
    filled
      ? css`
          min-width: ${CONSTANS.BUTTON_MIN_WIDTH}rem;
          background-color: ${theme.colors.primary};
          border: solid 0.1rem ${theme.colors.primary};
          font-weight: ${theme.font.weight.l};
          color: white;
          text-transform: uppercase;
        `
      : active
      ? css`
          border: solid 0.3rem ${theme.colors.primary};
          color: black;
          padding: 0.6rem 1.4rem !important;

          @media ${theme.windowSize.mid} {
            padding: 0.8rem 2rem !important;
          }
        `
      : css``}

  @media ${theme.windowSize.mid} {
    padding: 1rem 2.2rem;
  }

  @media ${theme.windowSize.big} {
    min-height: ${CONSTANS.BUTTON_MIN_HEIGHT}rem;
  }
`;

const Button = ({
  title,
  onClick,
  active = false,
  filled = false,
  style = {},
}) => (
  <ButtonWrap active={active} filled={filled} style={style} onClick={onClick}>
    {title}
  </ButtonWrap>
);

export default Button;
