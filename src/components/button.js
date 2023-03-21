import React from 'react';
import styled, { css } from 'styled-components';

import { CONSTANS, theme } from '../assets/globalStyles';

const ButtonWrap = styled.div`
  flex: 1;
  width: fit-content;
  min-width: ${CONSTANS.BUTTON_MIN_WIDTH}rem;
  min-height: ${CONSTANS.BUTTON_MIN_HEIGHT_MOBILE}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: ${theme.space.xs}rem;

  :hover {
    opacity: 0.8;
    cursor: pointer;
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

  ${({ active, filled }) =>
    filled
      ? css`
          background-color: ${theme.colors.primary};
          border: solid 0.1rem ${theme.colors.primary};
          font-weight: ${theme.font.weight.l};
          color: white;
        `
      : active
      ? css`
          border: solid 0.1rem ${theme.colors.primary};
          font-weight: ${theme.font.weight.l};
          color: ${theme.colors.primary};
        `
      : css`
          border: solid 0.1rem ${theme.colors.light3};
        `}

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
