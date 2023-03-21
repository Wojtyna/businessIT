import React from 'react';
import styled, { css } from 'styled-components';

import { CONSTANS, theme } from '../assets/globalStyles';
import DataContent from '../assets/data.json';

const ButtonWrap = styled.div`
  position: relative;
  width: ${CONSTANS.BUTTON_MIN_HEIGHT_MOBILE}rem;
  height: ${CONSTANS.BUTTON_MIN_HEIGHT_MOBILE}rem;
  border-radius: ${CONSTANS.BUTTON_MIN_HEIGHT_MOBILE}rem;
  display: flex;
  justify-content: center;
  align-items: center;

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

  ${({ border }) =>
    border &&
    css`
      border: 0.1rem solid ${theme.colors.mid};
    `}

  ${({ addIcon }) =>
    addIcon &&
    css`
      ::after,
      ::before {
        position: absolute;
        content: '';
        width: 50%;
        height: 0.4rem;
        background-color: ${theme.colors.primary};
        display: block;
        top: 50%;
        left: 50%;
        border-radius: 0.4rem;
      }

      ::after {
        transform: translate(-50%, -50%) rotate(0deg);
      }

      ::before {
        transform: translate(-50%, -50%) rotate(-90deg);
      }
    `}

  ${({ primaryStyle }) =>
    primaryStyle &&
    css`
      border: 0.1rem solid ${theme.colors.light2};
      background-color: ${theme.colors.transparentLight};
      backdrop-filter: blur(1.4rem);
      -webkit-backdrop-filter: blur(1.4rem);
    `}

  ${({ isBurger, burgerIsOpen }) =>
    isBurger &&
    css`
      ::after,
      ::before {
        position: absolute;
        content: '';
        width: 50%;
        height: 0.2rem;
        border-radius: 0.2rem;
        background-color: ${theme.colors.dark2};
        display: block;
        top: 50%;
        left: 50%;
        transition: transform 0.3s ease-out;
      }

      ${burgerIsOpen
        ? css`
            ::after {
              transform: translate(-50%, -50%) rotate(135deg);
            }

            ::before {
              transform: translate(-50%, -50%) rotate(-135deg);
            }
          `
        : css`
            ::after {
              transform: translate(-50%, calc(-50% + 0.4rem)) rotate(0deg);
            }

            ::before {
              transform: translate(-50%, calc(-50% - 0.4rem)) rotate(0deg);
            }
          `}
    `}

  @media ${theme.windowSize.big} {
    width: ${CONSTANS.BUTTON_MIN_HEIGHT}rem;
    height: ${CONSTANS.BUTTON_MIN_HEIGHT}rem;
    border-radius: ${CONSTANS.BUTTON_MIN_HEIGHT}rem;
  }
`;

const ButtonLogo = styled.img`
  height: ${({ bigIcon }) => (bigIcon ? '60%' : '50%')};
  width: ${({ bigIcon }) => (bigIcon ? '60%' : '50%')};
  object-fit: contain;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;
`;

const IconButton = ({
  onClick,
  alt = 'Add icon',
  iconSource = undefined,
  addIcon = false,
  border = false,
  primaryStyle = false,
  burger = { visible: false, isOpen: false },
  style = {},
  iconStyle = {},
  bigIcon = false,
}) => (
  <ButtonWrap
    onClick={onClick}
    border={border}
    primaryStyle={primaryStyle || burger.visible}
    isBurger={burger.visible}
    burgerIsOpen={burger.isOpen}
    addIcon={addIcon}
    style={style}
  >
    {iconSource && (
      <ButtonLogo
        src={iconSource}
        alt={`${alt} - ${DataContent.companyName}`}
        style={iconStyle}
        bigIcon={bigIcon}
      />
    )}
  </ButtonWrap>
);

export default IconButton;
