import styled, { keyframes } from 'styled-components';
import { theme } from '../../../assets/globalStyles';

const LANDING_VIEW_MIN_HEIGHT = 55;

// MAIN WRAP
export const ViewWrap = styled.header`
  min-height: max(${LANDING_VIEW_MIN_HEIGHT}rem, 100vh);
  padding-block: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

// CONTENT
export const ContentWrap = styled.div`
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
  top: 66%;
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
  height: max(${LANDING_VIEW_MIN_HEIGHT * 1.5}rem, 150vh);
`;
export const Bg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.1;
`;
