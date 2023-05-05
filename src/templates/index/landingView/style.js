import styled, { keyframes } from 'styled-components';
import { CONSTANS, theme } from '../../../assets/globalStyles';

// MAIN WRAP
export const ViewWrap = styled.header`
  min-height: max(${CONSTANS.MIN_PAGE_HEIGHT}rem, 100vh);
  padding-block: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

// CONTENT
export const ContentWrap = styled.div`
  max-width: ${CONSTANS.MAX_CONTENT_WIDTH_XL}rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column-reverse;
  padding-bottom: 2rem;

  @media ${theme.windowSize.big} {
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
  }
`;
export const ViewTitle = styled.h1`
  max-width: 60rem;
  margin-top: ${theme.space.xxl}rem;
  word-wrap: break-word;
  text-align: center;
  font-family: 'Yeseva One', cursive;
  color: ${theme.colors.secondary};
  text-transform: uppercase;
  letter-spacing: 0.3rem;

  .primaryColor {
    color: ${theme.colors.primary};
  }

  @media ${theme.windowSize.big} {
    margin-top: 0;
    text-align: left;
  }
`;

// SCROLL
export const ScrollWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;

  @media ${theme.windowSize.big} {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
const bounceArrow = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(1rem);
  }
`;
export const ScrollIconWrap = styled.div`
  animation: ${bounceArrow} 0.5s ease-in infinite alternate;
`;

// TOP LINE
export const TopLineWrap = styled.div`
  z-index: -99;
  position: absolute;
  width: 100%;
  left: 0;
  top: 33%;
  display: flex;
  justify-content: center;
`;
export const TopLine = styled.img`
  width: 100%;
`;

// BG
export const BgWrap = styled.div`
  z-index: -100;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: max(${CONSTANS.MIN_PAGE_HEIGHT * 1.5}rem, 150vh);
`;
export const Bg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.05;
`;
