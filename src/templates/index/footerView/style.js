import styled from 'styled-components';
import { CONSTANS, theme } from '../../../assets/globalStyles';

export const ViewWrap = styled.footer`
  position: relative;
  padding-block: ${CONSTANS.SPACE_BETWEEN_SECTIONS}rem
    ${CONSTANS.SPACE_BETWEEN_SECTIONS}rem;
`;

export const Title = styled.h2`
  color: ${theme.colors.bg};
  text-align: center;
`;

// TOP LINE
export const BottomBgLineWrap = styled.div`
  z-index: -99;
  position: absolute;
  width: calc(100vw - ${CONSTANS.SCROLL_BAR_WIDTH}rem);
  min-width: 100%;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
`;
export const BottomBgLine = styled.img`
  width: 100%;
`;
