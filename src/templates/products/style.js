import styled from 'styled-components';
import { theme } from '../../assets/globalStyles';

// MAIN WRAP
export const ProductsWrap = styled.div`
  padding: ${theme.space.l}rem;
  padding-top: 0 !important;

  @media ${theme.windowSize.mid} {
    padding: ${theme.space.xxl}rem;
  }
`;

// STEP
export const StepView = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${theme.space.xxl * 2}rem;
`;

// TITLE
export const TitleWrap = styled.div`
  z-index: 1;
  position: relative;
  font-weight: ${theme.font.weight.l};
  text-transform: uppercase;
`;
export const TitleStyle = styled.h2`
  display: inline-block;
  color: ${theme.colors.primary};
  font-weight: inherit;
`;
export const TitleBg = styled.span`
  z-index: -1;
  position: absolute;
  left: 0;
  bottom: 0;
  color: ${theme.colors.transparentDark};
  font-size: 6rem;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;
`;
