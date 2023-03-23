import styled from 'styled-components';
import { CONSTANS, theme } from '../../../assets/globalStyles';

import BgImage from '../../../assets/images/pexels-hakeem-james-hausley.webp';

// MAIN WRAP
export const ViewWrap = styled.div`
  position: relative;
  margin-inline: ${theme.space.s}rem;
  padding: ${theme.space.l}rem;
  border-radius: ${theme.space.m}rem;
  background-image: url(${BgImage});
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  font-weight: ${theme.font.weight.m};
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${theme.windowSize.mid} {
    border-radius: ${theme.space.l}rem;
    padding: ${theme.space.xl}rem;
    margin-inline: 0;
  }
`;

// HEADER
export const Header = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
`;
export const LogoWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: ${theme.space.s}rem;
`;
export const Logo = styled.img`
  height: ${CONSTANS.IMAGE_LENGTH_XS}rem;
`;
export const CompanyTitle = styled.h2`
  padding-left: ${theme.space.l}rem;
`;

// CONTACT DATA
export const ContactDataWrap = styled.div`
  margin-block: ${theme.space.xl}rem;
`;
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ isFirst }) => (isFirst ? '0' : theme.space.m)}rem;
`;
export const ContactIcon = styled.img`
  width: ${CONSTANS.ICON_LENGTH}rem;
  height: ${CONSTANS.ICON_LENGTH}rem;
  margin-right: ${theme.space.m}rem;
`;

// SOCIAL MEDIA
export const SocialMediaWrap = styled.div`
  display: flex;
  margin-left: -${CONSTANS.BUTTON_MIN_HEIGHT_MOBILE / 4}rem;

  @media ${theme.windowSize.big} {
    margin-left: -${CONSTANS.BUTTON_MIN_HEIGHT / 4}rem;
  }
`;
