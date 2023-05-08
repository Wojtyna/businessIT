import styled from 'styled-components';
import { CONSTANS, theme } from '../../../assets/globalStyles';

export const ViewWrap = styled.footer`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: solid 0.2rem ${theme.colors.transparentDark};
  padding: ${theme.space.xxl}rem ${theme.space.s}rem;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;

  @media ${theme.windowSize.small} {
    padding-inline: ${theme.space.l}rem;
  }

  @media ${theme.windowSize.mid} {
    padding: ${theme.space.xl}rem ${theme.space.xxl}rem
      ${CONSTANS.NAVIGATION_HEIGHT + theme.space.xl * 2}rem;
  }
`;

export const Title = styled.span`
  display: block;
  color: ${theme.colors.light2};
  margin-bottom: ${theme.space.s}rem;
`;

export const CompanyName = styled.h2`
  margin-top: ${theme.space.s}rem;
`;

// TOP LINE
export const BottomBgLineWrap = styled.div`
  display: none;

  @media ${theme.windowSize.mid} {
    z-index: 0;
    position: absolute;
    width: calc(100vw - ${CONSTANS.SCROLL_BAR_WIDTH}rem);
    min-width: 100%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
  }
`;
export const BottomBgLine = styled.img`
  width: 100%;
`;
