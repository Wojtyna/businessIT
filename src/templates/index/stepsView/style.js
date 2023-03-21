import styled from 'styled-components';
import { CONSTANS, theme } from '../../../assets/globalStyles';

const PANEL_NUMBER_LENGTH = 4;
const TIP_DOT_LENGTH = 0.3;

// MAIN WRAP
export const ViewWrap = styled.section`
  position: relative;
  margin-top: ${CONSTANS.SPACE_BETWEEN_SECTIONS}rem;
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
    grid-gap: ${theme.space.xxl}rem ${theme.space.xxl}rem;
    grid-template-columns: repeat(
      auto-fit,
      minmax(max(20%, 22rem), max-content)
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
  background-color: ${theme.colors.bgDarker};
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
  transform: translate(-50%, -33%);
  background-color: ${theme.colors.bgDarker};
`;

export const Number = styled.span`
  color: ${theme.colors.bgDarker};

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

export const PanelTitle = styled.span`
  font-weight: ${theme.font.weight.m};
  text-transform: uppercase;
  text-align: center;
`;

// TIP
export const TipWrap = styled.div`
  padding-top: ${theme.space.l}rem;
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
    top: 0.9rem;
    background-color: ${theme.colors.dark2};
    border-radius: ${TIP_DOT_LENGTH}rem;
  }
`;
