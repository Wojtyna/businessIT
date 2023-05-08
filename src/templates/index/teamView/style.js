import styled from 'styled-components';
import { CONSTANS, theme } from '../../../assets/globalStyles';

// MAIN WRAP
export const ViewWrap = styled.section`
  position: relative;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
`;

export const TeamImg = styled.img`
  margin-top: ${theme.space.l}rem;
  border-radius: ${theme.space.xl}rem;
  width: 100%;
  max-height: 70rem;
  object-fit: cover;
  object-position: top;
`;

// TOP LINE
export const MidBgLineWrap = styled.div`
  display: none;

  @media ${theme.windowSize.mid} {
    z-index: -99;
    position: absolute;
    width: calc(100vw - ${CONSTANS.SCROLL_BAR_WIDTH}rem);
    min-width: 100%;
    bottom: ${theme.space.xxl}rem;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
  }
`;
export const MidBgLine = styled.img`
  width: 100%;
`;
