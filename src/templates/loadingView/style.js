import styled, { css } from 'styled-components';
import { theme } from '../../assets/globalStyles';

// MAIN WRAP
export const ViewWrap = styled.div`
  z-index: 200;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const Bg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: ${theme.space.xl}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ second, third }) =>
    third
      ? css`
          z-index: -3;
          background-color: ${theme.colors.primary};
        `
      : second
      ? css`
          z-index: -2;
          background-color: ${theme.colors.secondary};
        `
      : css`
          z-index: -1;
          background-color: ${theme.colors.bg};
        `}
`;

export const Text = styled.h1`
  color: ${theme.colors.dark};
  text-transform: lowercase;
  display: inline;
`;

export const Typewrite = styled.h1`
  position: relative;
  display: inline;

  ::after {
    content: '';
    width: 0.4rem;
    border-right: solid 0.4rem ${theme.colors.dark};
    height: 100%;
    margin-left: ${theme.space.xs}rem;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    51% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;
