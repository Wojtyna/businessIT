import styled from 'styled-components';
import { CONSTANS, theme } from '../../../assets/globalStyles';

export const CARD_CIRCLE_WIDTH = CONSTANS.MAX_CONTENT_WIDTH * 2;
export const CARD_MAX_WIDTH_MOBILE = 75;

export const CardStyle = styled.div`
  position: relative;
  width: 100%;
  background-color: ${theme.colors.primary};
  border-radius: ${theme.space.xl}rem;
  padding: ${theme.space.xl}rem;
  margin-inline: auto;
  max-width: ${CARD_MAX_WIDTH_MOBILE}rem;
  overflow: hidden;

  @media ${theme.windowSize.mid} {
    border-radius: ${theme.space.xxl}rem;
    padding: ${theme.space.xxl}rem;
  }
  @media ${theme.windowSize.big} {
    max-width: 100%;
  }
`;

export const CardContent = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

// TITLE
export const Title = styled.h1`
  color: ${theme.colors.secondary};
  text-align: center;
  padding-bottom: ${theme.space.s}rem;

  @media ${theme.windowSize.mid} {
    text-align: left;
  }
`;

export const Subtitle = styled.span`
  display: block;
  font-weight: ${theme.font.weight.l};
  color: white;
  text-transform: uppercase;
  text-align: center;

  @media ${theme.windowSize.mid} {
    text-align: left;
  }
`;

// PROMO CONTENT
export const PromoWrap = styled.div`
  padding-block: ${theme.space.xxl}rem;
  align-self: center;
  text-align: center;

  @media ${theme.windowSize.mid} {
    padding-block: ${theme.space.l}rem;
    align-self: flex-end;
    text-align: right;
  }
`;

export const PromoText = styled.h2`
  color: ${({ second }) => (second ? 'white' : theme.colors.secondary)};
  font-weight: ${theme.font.weight.l};
`;

// FOOTER
export const PriceAmount = styled.h2`
  color: ${theme.colors.secondary};
  font-weight: ${theme.font.weight.l};
  text-align: center;

  @media ${theme.windowSize.mid} {
    text-align: left;
  }
`;

export const ButtonStyled = styled.button`
  width: fit-content;
  align-self: center;
  padding: ${theme.space.s}rem ${theme.space.l}rem;
  border-radius: ${theme.space.xs}rem;
  margin-top: ${theme.space.s}rem;
  background-color: ${theme.colors.secondary};
  color: white;
  font-weight: ${theme.font.weight.l};
  text-transform: uppercase;
  cursor: pointer;

  @media ${theme.windowSize.mid} {
    align-self: flex-start;
  }
`;

// RINGS
export const RingsWrap = styled.div`
  z-index: 0;
  position: absolute;
  left: 25%;
  top: ${theme.space.xxl * 2}rem;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const Ring = styled.div`
  z-index: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${CARD_CIRCLE_WIDTH}rem;
  height: ${CARD_CIRCLE_WIDTH}rem;
  border-radius: 100%;
  border: solid ${theme.space.xs}rem ${theme.colors.transparentDark};
`;
