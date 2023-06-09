import styled, { css } from 'styled-components';
import { CONSTANS, theme } from '../../../assets/globalStyles';

// MAIN WRAP
export const ViewWrap = styled.nav`
  z-index: 100;
  position: fixed;
  width: max-content;
  height: ${CONSTANS.NAVIGATION_HEIGHT}rem;
  bottom: ${theme.space.xl}rem;
  left: 50%;
  align-self: center;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.space.m}rem;
  padding: ${theme.space.xs}rem ${theme.space.m}rem;
  background-color: white;
  border: 0.1rem solid ${theme.colors.transparentDark};
  box-shadow: 0 0 4rem -2.3rem #00000033;

  visibility: hidden;
  pointer-events: none;
  transform: translate(-50%, 33%) scale(0.5);
  opacity: 0;
`;

// BUTTON
export const ButtonWrap = styled.div`
  position: relative;
`;

export const TextButtonsWrap = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding-inline: ${theme.space.s}rem;
  margin-inline: ${theme.space.s}rem;

  ::before,
  ::after {
    position: absolute;
    content: '';
    width: 0.2rem;
    height: 50%;
    background-color: ${theme.colors.transparentDark};
    display: block;
    top: 50%;
    transform: translateY(-50%);
  }
  ::before {
    left: 0;
  }
  ::after {
    right: 0;
  }
`;

export const Button = styled.div`
  min-height: ${CONSTANS.BUTTON_MIN_HEIGHT_MOBILE}rem;
  padding: ${theme.space.s}rem ${theme.space.m}rem;
  font-weight: ${theme.font.weight.m};
  transition: opacity 0.1s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;

  ${({ disable }) =>
    disable
      ? css`
          opacity: 0.2;
        `
      : css`
          cursor: pointer;

          :hover {
            opacity: 0.8;
          }

          :active,
          :target,
          :focus {
            opacity: 0.33;
          }
        `};

  @media ${theme.windowSize.big} {
    min-height: ${CONSTANS.BUTTON_MIN_HEIGHT}rem;
  }
`;

export const ImageStyle = styled.img`
  width: ${CONSTANS.ICON_LENGTH}rem;
  height: ${CONSTANS.ICON_LENGTH}rem;
`;

// CONTACT WINDOW
export const ContactWrap = styled.div`
  z-index: 100;
  position: absolute;
  width: max-content;
  max-width: 40rem;
  bottom: 6rem;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.space.m}rem;
  padding: ${theme.space.xs}rem ${theme.space.m}rem;
  background-color: white;
  border: 0.1rem solid ${theme.colors.transparentDark};
  box-shadow: 0 0 4rem -2.3rem #00000033;
  overflow: hidden;

  visibility: hidden;
  pointer-events: none;
  transform: translate(-50%, 33%) scale(0.5);
  opacity: 0;
`;

export const ContactButtonWrap = styled.div`
  font-weight: ${theme.font.weight.m};
  text-align: center;
  padding: ${theme.space.m}rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active,
  :target,
  :focus {
    opacity: 0.33;
  }
`;

export const ContactImage = styled.img`
  width: ${CONSTANS.IMAGE_LENGTH_S}rem;
  height: ${CONSTANS.IMAGE_LENGTH_S}rem;
`;

export const ContactTitle = styled.span`
  display: block;
  padding-top: ${theme.space.m}rem;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;
`;

// LANG
export const LangWrap = styled(ContactWrap)`
  flex-direction: column;
`;

export const LangButton = styled(ContactButtonWrap)`
  padding: ${theme.space.s}rem;
`;

// DISABLE ACTIVE WINDOW
export const DisableNavBg = styled.div`
  z-index: 98;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
