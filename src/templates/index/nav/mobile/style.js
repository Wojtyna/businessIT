import styled, { css } from 'styled-components';
import { CONSTANS, theme } from '../../../../assets/globalStyles';

export const ABOUT_HEADER_HEIGHT = 10;
export const PADDING_VIEW_WRAP = theme.space.xl;

// MAIN WRAP
export const ViewWrap = styled.nav`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transform: translateX(-100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: ${PADDING_VIEW_WRAP}rem;
  text-align: center;
`;

// HEADER
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: ${ABOUT_HEADER_HEIGHT}rem;
`;
export const Logo = styled.img`
  height: ${CONSTANS.IMAGE_LENGTH_S}rem;
`;
export const CompanyTitle = styled.span`
  font-size: ${theme.font.size.mMobile};
`;

// MAIN
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Button = styled.h2`
  padding: ${theme.space.m}rem;
  font-weight: ${theme.font.weight.m};

  ${({ firstItem, lastItem }) =>
    firstItem
      ? css`
          padding-top: ${theme.space.xl}rem;
        `
      : lastItem &&
        css`
          padding-bottom: ${theme.space.xl}rem;
        `};

  :active,
  :target,
  :focus {
    opacity: 0.33;
  }
`;
export const LangButtonSpace = styled.div`
  height: ${ABOUT_HEADER_HEIGHT}rem;
`;

// LANG
export const LangView = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - ${ABOUT_HEADER_HEIGHT + PADDING_VIEW_WRAP}rem);
  top: ${ABOUT_HEADER_HEIGHT + PADDING_VIEW_WRAP}rem;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  transform: translateY(
    calc(
      100% - ${PADDING_VIEW_WRAP * 2}rem -
        ${CONSTANS.BUTTON_MIN_HEIGHT_MOBILE}rem
    )
  );
  padding-block: ${PADDING_VIEW_WRAP}rem;
`;
export const LangButtonsWrap = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  overflow-y: auto;
`;
export const SeparateLine = styled.span`
  display: block;
  margin-inline: auto;
  width: 60%;
  height: 0.1rem;
  background-color: ${theme.colors.light2};
  border-radius: 0.1rem;
`;
