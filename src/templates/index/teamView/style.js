import styled from 'styled-components';
import { CONSTANS, theme } from '../../../assets/globalStyles';

// MAIN WRAP
export const ViewWrap = styled.section`
  margin-top: ${CONSTANS.SPACE_BETWEEN_SECTIONS}rem;
  position: relative;
`;

export const SmallText = styled.span`
  text-transform: uppercase;
`;

export const BigText = styled.h1`
  color: ${theme.colors.primary};
`;

export const TeamText = styled.h2`
  font-weight: ${theme.font.weight.m};
  text-transform: uppercase;
`;

export const TeamImg = styled.img`
  margin-top: ${theme.space.l}rem;
  border-radius: ${theme.space.xl}rem;
  width: 100%;
  max-height: 70rem;
  object-fit: cover;
  object-position: top;

  @media ${theme.windowSize.big} {
    width: calc(100% + 6vw);
    margin-left: -3vw;
  }
`;

// TOP LINE
export const MidBgLineWrap = styled.div`
  z-index: -99;
  position: absolute;
  width: calc(100vw - ${CONSTANS.SCROLL_BAR_WIDTH}rem);
  min-width: 100%;
  bottom: ${theme.space.xxl}rem;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
`;
export const MidBgLine = styled.img`
  width: 100%;
`;
