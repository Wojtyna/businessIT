import styled, { css } from 'styled-components';
import { CONSTANS, theme } from '../../../assets/globalStyles';

// MAIN WRAP
export const ViewWrap = styled.div`
  display: flex;
  flex-direction: column;

  ${({ productsView }) =>
    !productsView &&
    css`
      padding: ${theme.space.l}rem;
      padding-top: ${CONSTANS.BUTTON_MIN_HEIGHT}rem;
      max-width: 60rem;

      @media ${theme.windowSize.mid} {
        padding-top: ${theme.space.l}rem;
      }
    `}
`;

export const ViewTitle = styled.h2`
  font-weight: ${theme.font.weight.m};
`;

export const InputsWrap = styled.div`
  @media ${theme.windowSize.mid} {
    display: flex;
  }
`;

export const ButtonWrap = styled.div`
  padding-top: ${theme.space.l}rem;
  display: flex;
  flex-direction: column;

  ${({ productsView }) =>
    !productsView &&
    css`
      @media ${theme.windowSize.mid} {
        align-self: flex-end;
      }
    `}
`;

export const WarningStyle = styled.span`
  display: block;
  font-weight: ${theme.font.weight.m};
  color: ${theme.colors.red};
  padding-bottom: ${theme.space.s}rem;
`;

// PRODUCTS VIEW
export const ProductTitle = styled.span`
  display: inline-block;
  font-weight: ${theme.font.weight.m};
  text-transform: uppercase;
  color: ${theme.colors.dark};
  padding-top: ${theme.space.xl}rem;
`;
