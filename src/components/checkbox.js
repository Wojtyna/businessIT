import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { CONSTANS, theme } from '../assets/globalStyles';

const CheckboxWrap = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  min-height: ${CONSTANS.BUTTON_MIN_HEIGHT_MOBILE}rem;
  border-radius: ${theme.space.xs};
  cursor: pointer;

  @media ${theme.windowSize.big} {
    min-height: ${CONSTANS.BUTTON_MIN_HEIGHT}rem;
  }
`;

const CheckView = styled.span`
  position: relative;
  content: '';
  width: ${CONSTANS.ICON_LENGTH}rem;
  height: ${CONSTANS.ICON_LENGTH}rem;
  border: solid 0.1rem ${theme.colors.dark2};
  margin-right: 1.5rem;
  transition: all 0.2s ease-out;

  ::before {
    position: absolute;
    content: '';
    width: 33%;
    height: 33%;
    background-color: ${theme.colors.primary};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2s ease-out;
  }

  ${({ active }) =>
    active &&
    css`
      border: solid 0.2rem ${theme.colors.primary};

      ::before {
        transform: translate(-50%, -50%) scale(1);
      }
    `}

  ${({ radio }) =>
    radio &&
    css`
      border-radius: ${CONSTANS.ICON_LENGTH}rem;

      ::before {
        border-radius: ${CONSTANS.ICON_LENGTH}rem;
      }
    `}
`;

const Checkbox = ({
  title,
  setNewValue,
  radioType = false,
  CurrentRadio = '',
  setCurrentRadio = (e) => {},
  style = {},
  titleStyle = {},
}) => {
  const [IsActive, setIsActive] = useState(false);

  const onItemClick = () => {
    setNewValue(!IsActive);
    setIsActive(!IsActive);
    if (radioType) {
      setCurrentRadio(title);
    }
  };

  useEffect(() => {
    if (radioType && CurrentRadio !== title && IsActive) {
      setIsActive(false);
    }
  }, [CurrentRadio]);

  return (
    <CheckboxWrap onClick={onItemClick} style={style}>
      <CheckView active={IsActive} radio={radioType} />

      <span style={titleStyle}>{title}</span>
    </CheckboxWrap>
  );
};

export default Checkbox;
