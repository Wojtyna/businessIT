import styled from 'styled-components';
import { CONSTANS, theme } from '../../../assets/globalStyles';

const PANEL_NUMBER_LENGTH = 4;
const PANEL_NUMBER_OFFSET = 1.3;
const TIP_DOT_LENGTH = 0.3;

// MAIN WRAP
export const ViewWrap = styled.section`
  position: relative;
`;

export const ViewTitle = styled.h2`
  text-align: center;
  color: ${theme.colors.bg};
  padding-inline: 2rem;
`;

// PANEL
export const PanelsWrap = styled.div`
  width: 100%;
  display: grid;
  margin-top: ${PANEL_NUMBER_LENGTH / 3 + theme.space.l}rem;
  margin-inline: auto;
  grid-gap: ${PANEL_NUMBER_LENGTH / 3 + theme.space.s}rem ${theme.space.s}rem;
  align-items: flex-start;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fit, minmax(14rem, max-content));

  @media ${theme.windowSize.small} {
    grid-template-columns: repeat(auto-fit, minmax(16rem, max-content));
  }

  @media ${theme.windowSize.mid} {
    margin-top: ${PANEL_NUMBER_LENGTH / 3 + theme.space.xl}rem;
    grid-gap: ${PANEL_NUMBER_LENGTH / 3 + theme.space.l}rem ${theme.space.l}rem;
    grid-template-columns: repeat(
      auto-fit,
      minmax(max(20%, 16rem), max-content)
    );
  }

  @media ${theme.windowSize.big} {
    margin-top: ${PANEL_NUMBER_LENGTH / 3 + theme.space.xl}rem;
    grid-gap: ${theme.space.xxl}rem ${theme.space.xl}rem;
    grid-template-columns: repeat(
      auto-fit,
      minmax(max(20%, 21rem), max-content)
    );
  }
`;

export const PanelStyle = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${theme.colors.transparentDark};
  border-radius: ${theme.space.xl}rem;
  padding: ${theme.space.l}rem;

  @media ${theme.windowSize.mid} {
    padding: ${theme.space.xl}rem;
  }
`;

export const NumberWrap = styled.div`
  position: absolute;
  width: ${PANEL_NUMBER_LENGTH}rem;
  height: ${PANEL_NUMBER_LENGTH}rem;
  left: 50%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${PANEL_NUMBER_LENGTH}rem;
  transform: translate(-50%, -${PANEL_NUMBER_OFFSET}rem);
  overflow: hidden;

  ::before {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: ${PANEL_NUMBER_OFFSET}rem;
    background-color: ${theme.colors.transparentDark};
  }
`;

export const Number = styled.span`
  font-weight: ${theme.font.weight.m};
  text-transform: uppercase;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;
`;

export const PanelImage = styled.img`
  width: ${CONSTANS.IMAGE_LENGTH_S}rem;
  height: ${CONSTANS.IMAGE_LENGTH_S}rem;
  margin-top: ${(PANEL_NUMBER_LENGTH * 1) / 3}rem;
  margin-bottom: ${theme.space.l}rem;
`;

export const PanelTitle = styled.h3`
  text-align: center;
`;

// TIP
export const TipWrap = styled.div`
  padding-top: ${theme.space.xl}rem;
`;

export const TipTitle = styled.span`
  display: block;
  color: ${theme.colors.primary};
  text-transform: uppercase;
  font-weight: ${theme.font.weight.l};
`;

export const TipText = styled.span`
  position: relative;
  display: block;
  padding-left: ${TIP_DOT_LENGTH * 3}rem;

  ::before {
    content: '';
    position: absolute;
    width: ${TIP_DOT_LENGTH}rem;
    height: ${TIP_DOT_LENGTH}rem;
    left: 0;
    top: 0.8rem;
    background-color: ${theme.colors.dark};
    border-radius: ${TIP_DOT_LENGTH}rem;
  }
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
    transform: translate(-50%, 33%);
    display: flex;
    justify-content: center;
  }
`;
export const MidBgLine = styled.img`
  width: 100%;
`;
