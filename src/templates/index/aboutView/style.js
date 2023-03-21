import styled from 'styled-components';
import { CONSTANS, theme } from '../../../assets/globalStyles';

const PANEL_WIDTH = 32;
const PANEL_WIDTH_MOBILE = 25;
const MAX_TOP_TITLE_WIDTH = 70;
const MAX_BOTTOM_TITLE_WIDTH = 50;

// MAIN WRAP
export const ViewWrap = styled.section`
  margin-top: ${CONSTANS.SPACE_BETWEEN_SECTIONS}rem;
`;

// ABOUT
export const AboutWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.bgDarker};
  width: 100%;
  border-radius: ${theme.space.l}rem;
  padding: 2rem;

  @media ${theme.windowSize.big} {
    width: calc(100% + 6vw);
    margin-left: -3vw;
    padding: 4rem 3vw;
    border-radius: ${theme.space.xl}rem;
  }
`;

// TOP
export const TopWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${theme.windowSize.big} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const TopTitle = styled.h2`
  color: ${theme.colors.mid};
  text-align: center;
  align-self: center;

  @media ${theme.windowSize.big} {
    align-self: flex-start;
    text-align: left;
    max-width: ${MAX_TOP_TITLE_WIDTH}rem;
  }
`;

export const NavWrap = styled.div`
  display: flex;
  width: ${CONSTANS.BUTTON_MIN_HEIGHT_MOBILE * 2 + 1}rem;
  justify-content: space-between;
  padding-top: 2rem;

  @media ${theme.windowSize.big} {
    width: ${CONSTANS.BUTTON_MIN_HEIGHT * 2 + 4}rem;
    padding-top: 0;
    padding-left: 2rem;
  }
`;

// PANEL
export const PanelsWrap = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  padding-block: ${theme.space.xl}rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const PanelStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: ${({ isFirst }) => (isFirst ? '0' : theme.space.l)}rem;
  min-width: 85%;
  width: 85%;
  max-width: 85%;
  background-color: white;
  border-radius: ${theme.space.l}rem;
  padding: ${theme.space.l}rem;

  @media ${theme.windowSize.small} {
    min-width: ${PANEL_WIDTH_MOBILE}rem;
    width: ${PANEL_WIDTH_MOBILE}rem;
    max-width: ${PANEL_WIDTH_MOBILE}rem;
  }
  @media ${theme.windowSize.big} {
    min-width: ${PANEL_WIDTH}rem;
    width: ${PANEL_WIDTH}rem;
    max-width: ${PANEL_WIDTH}rem;
    justify-content: center;
    flex-direction: row;
    margin-left: ${({ isFirst }) => (isFirst ? '0' : theme.space.xl)}rem;
    padding: ${theme.space.xl}rem;
  }
`;

export const PanelImage = styled.img`
  width: ${CONSTANS.IMAGE_LENGTH_M}rem;
  height: ${CONSTANS.IMAGE_LENGTH_M}rem;
`;

export const PanelTitle = styled.span`
  text-align: center;
  padding-top: 2rem;

  @media ${theme.windowSize.big} {
    text-align: left;
    padding-top: 0;
    padding-left: 2rem;
  }
`;

// BOTTOM
export const BottomTitle = styled.h2`
  color: ${theme.colors.mid};
  text-align: center;
  align-self: center;

  @media ${theme.windowSize.big} {
    align-self: flex-end;
    text-align: right;
    max-width: ${MAX_BOTTOM_TITLE_WIDTH}rem;
  }
`;
