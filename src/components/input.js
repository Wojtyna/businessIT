import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { CONSTANS, theme } from '../assets/globalStyles';

const InputWrap = styled.div`
  position: relative;
  display: flex;

  ${({ fullWidth }) =>
    fullWidth
      ? css`
          flex: 1;

          input,
          textarea {
            width: 100%;
          }
        `
      : css`
          flex: 0;
        `}

  input,
  input::placeholder,
  textarea,
  textarea::placeholder {
    color: inherit;
    outline: none;
    margin: 0;
    text-decoration: none;
    border: none;
    background: inherit !important;
    background-color: inherit !important;
    font-size: inherit;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
  }

  input,
  textarea {
    min-height: ${CONSTANS.BUTTON_MIN_HEIGHT_MOBILE}rem;
    padding: 1rem 2rem;
    border: ${({ warning }) =>
      warning
        ? `solid 0.1rem ${theme.colors.red}`
        : `solid 0.1rem ${theme.colors.light3}`};
    border-radius: 0.5rem;
    transition: all 0.1s ease-out;
    resize: ${({ disableResizeTextarea }) =>
      disableResizeTextarea ? 'none' : 'vertical'};

    :focus {
      border: solid 0.1rem ${theme.colors.primary};
    }

    ::placeholder {
      color: ${theme.colors.light2};
      opacity: 0;
      transition: all 0.1s ease-out;
    }

    :focus::placeholder {
      opacity: 1;
    }

    ${({ disableResizeTextarea }) =>
      disableResizeTextarea &&
      css`
        height: 12rem;
      `}

    @media ${theme.windowSize.big} {
      min-height: ${CONSTANS.BUTTON_MIN_HEIGHT}rem;
    }
  }

  label {
    position: absolute;
    left: 0;
    top: ${CONSTANS.BUTTON_MIN_HEIGHT_MOBILE / 2}rem;
    transform: translate(2rem, -50%);
    transition: all 0.1s ease-out;
    color: ${theme.colors.mid};

    @media ${theme.windowSize.big} {
      top: ${CONSTANS.BUTTON_MIN_HEIGHT / 2}rem;
    }
  }

  input:focus ~ label,
  input:not(:placeholder-shown):not(:focus) ~ label,
  textarea:focus ~ label,
  textarea:not(:placeholder-shown):not(:focus) ~ label {
    transform: translate(1.5rem, -50%);
    text-transform: uppercase;
    top: 0;
    font-size: ${theme.font.size.xsMobile};
    font-weight: ${theme.font.weight.m};
    color: ${({ warning }) => (warning ? theme.colors.red : theme.colors.mid)};

    ::before {
      z-index: -1;
      position: absolute;
      content: '';
      height: 0.3rem;
      left: ${-theme.space.xs}rem;
      top: 50%;
      width: calc(100% + ${theme.space.xs * 2}rem);
      transform: translate(0, -50%);
      background-color: ${({ specBg }) => specBg};
    }

    @media ${theme.windowSize.big} {
      font-size: ${theme.font.size.xs};
    }
  }

  input:focus ~ label,
  textarea:focus ~ label {
    color: ${theme.colors.primary};
  }
`;

const Input = ({
  title,
  placeholder,
  setNewValue,
  warning = false,
  type = 'text',
  minLength = 1,
  maxLength = 9999999,
  specBg = 'white',
  fullWidth = false,
  disableResizeTextarea = false,
  style = {},
}) => {
  const [InputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    let newValue = e.target.value;
    setNewValue(newValue);
    setInputValue(newValue);
  };

  return (
    <InputWrap
      warning={warning}
      fullWidth={fullWidth}
      specBg={specBg}
      disableResizeTextarea={disableResizeTextarea}
      style={style}
    >
      {type === 'textarea' ? (
        <textarea
          id={title.toLowerCase()}
          placeholder={placeholder}
          value={InputValue}
          onChange={onInputChange}
          autoComplete="off"
        />
      ) : (
        <input
          id={title.toLowerCase()}
          type={type}
          placeholder={placeholder}
          value={InputValue}
          onChange={onInputChange}
          minLength={minLength}
          maxLength={maxLength}
          autoComplete="off"
        />
      )}

      <label htmlFor={title.toLowerCase()}>{title}</label>
    </InputWrap>
  );
};

export default Input;
