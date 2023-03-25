import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { CONSTANS, theme } from '../assets/globalStyles';

const CHECKBOX_LENGTH = 1.8;
const CHECKBOX_INSIDE_LENGTH = 0.6;

const CheckboxWrap = styled.div`
  display: flex;
  border-radius: ${theme.space.xs};
  cursor: pointer;
  align-items: center;
  align-self: flex-start;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;
`;

const CheckView = styled.span`
  display: inline-block;
  position: relative;
  content: '';
  width: ${CHECKBOX_LENGTH}rem;
  height: ${CHECKBOX_LENGTH}rem;
  min-width: ${CHECKBOX_LENGTH}rem;
  min-height: ${CHECKBOX_LENGTH}rem;
  border: solid 0.1rem ${theme.colors.dark2};
  margin-right: ${theme.space.s}rem;
  margin-top: 0.1rem;
  transition: all 0.1s ease-out;
  align-self: flex-start;

  ::before {
    position: absolute;
    content: '';
    width: ${CHECKBOX_INSIDE_LENGTH}rem;
    height: ${CHECKBOX_INSIDE_LENGTH}rem;
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
      border-radius: ${CHECKBOX_LENGTH}rem;

      ::before {
        border-radius: ${CHECKBOX_LENGTH}rem;
      }
    `}

    ${({ warning }) =>
    warning &&
    css`
      border: solid 0.1rem ${theme.colors.red};
    `}
`;

const Checkbox = ({
  title,
  setNewValue,
  radioType = false,
  CurrentRadio = false,
  warning = false,
  style = {},
  titleStyle = {},
}) => {
  const [IsActive, setIsActive] = useState(false);

  const onItemClick = () => {
    if (!radioType) {
      setIsActive(!IsActive);
    }
    if (!CurrentRadio) {
      setNewValue(!IsActive);
    }
  };

  return (
    <CheckboxWrap onClick={onItemClick} style={style}>
      <CheckView
        active={radioType ? CurrentRadio : IsActive}
        radio={radioType}
        warning={warning && !IsActive}
      />

      <span style={titleStyle}>{title}</span>
    </CheckboxWrap>
  );
};

export default Checkbox;
