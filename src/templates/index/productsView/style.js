import styled from 'styled-components';
import { CONSTANS, theme } from '../../../assets/globalStyles';

const TIP_DOT_LENGTH = 0.3;
const PRODUCT_IMAGE_BG_LENGHT_MOBILE = 8;
const PRODUCT_IMAGE_BG_LENGHT = 12;
const MIN_WIDTH_PRODUCT_WRAP = 22;

// MAIN WRAP
export const ViewWrap = styled.section`
  margin-top: ${CONSTANS.SPACE_BETWEEN_SECTIONS}rem;
  display: flex;
  flex-direction: column;
`;

// TITLE
export const TitleWrap = styled.div`
  position: relative;
  padding-top: ${theme.space.xxl}rem;
`;
export const BigTitle = styled.h1`
  z-index: -80;
  position: absolute;
  width: calc(100vw - ${CONSTANS.SCROLL_BAR_WIDTH}rem);
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  text-align: center;
  color: ${theme.colors.bgDarker};

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;
`;
export const StyledTitle = styled.h2`
  font-weight: ${theme.font.weight.l};
  text-transform: uppercase;
  text-align: center;
  padding-inline: ${theme.space.l}rem;
`;

// PRODUCTS
export const ProductsPanel = styled.div`
  display: flex;
  align-self: center;
  margin-top: ${theme.space.l}rem;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 0 8rem -8rem black;
  border-radius: ${theme.space.l}rem;
  padding: ${theme.space.l}rem;
  cursor: pointer;
  overflow: hidden;

  :hover {
    opacity: 0.8;
  }

  :active,
  :target,
  :focus {
    opacity: 0.33;
  }

  @media ${theme.windowSize.big} {
    padding: ${theme.space.xl}rem;
    border-radius: ${theme.space.xl}rem;
  }
`;
export const ProductsWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media ${theme.windowSize.mid} {
    flex-direction: row;
  }
`;

// PRODUCT ITEM
export const ProductWrap = styled.div`
  z-index: 1;
  position: relative;
  flex: 1;
  min-width: ${MIN_WIDTH_PRODUCT_WRAP}rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: ${({ isFirst }) =>
    isFirst ? 0 : theme.space.l + PRODUCT_IMAGE_BG_LENGHT_MOBILE / 3}rem;

  ::before {
    z-index: -1;
    content: '';
    position: absolute;
    width: ${PRODUCT_IMAGE_BG_LENGHT_MOBILE}rem;
    height: ${PRODUCT_IMAGE_BG_LENGHT_MOBILE}rem;
    left: calc(50% - ${PRODUCT_IMAGE_BG_LENGHT_MOBILE / 3}rem);
    top: -${PRODUCT_IMAGE_BG_LENGHT_MOBILE / 3}rem;
    background-color: ${({ index }) =>
      index === 0 ? '#ADCEF4' : index === 1 ? '#ADF4B0' : '#F4E0AD'};
    border-radius: ${PRODUCT_IMAGE_BG_LENGHT_MOBILE}rem;
  }

  @media ${theme.windowSize.mid} {
    margin-top: 0;
    margin-left: ${({ isFirst }) => (isFirst ? 0 : theme.space.xl)}rem;

    ::before {
      width: ${PRODUCT_IMAGE_BG_LENGHT}rem;
      height: ${PRODUCT_IMAGE_BG_LENGHT * 1.4}rem;
      left: 50%;
      top: -${PRODUCT_IMAGE_BG_LENGHT}rem;
      transform: translate(-50%, 0);
      border-radius: 100%;
    }
  }
`;
export const ProductTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProductImage = styled.img`
  width: ${CONSTANS.IMAGE_LENGTH_M}rem;
  height: ${CONSTANS.IMAGE_LENGTH_M}rem;
  align-self: center;
  margin-bottom: ${theme.space.l}rem;

  @media ${theme.windowSize.mid} {
    width: ${CONSTANS.IMAGE_LENGTH_M}rem;
    height: ${CONSTANS.IMAGE_LENGTH_M}rem;
  }
`;
export const ProductText = styled.span`
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
export const PriceWrap = styled.div`
  align-self: flex-end;
  text-align: right;
  text-transform: uppercase;
  padding-top: ${theme.space.xs}rem;
`;
export const Price = styled.h2`
  color: ${theme.colors.primary};
  font-weight: ${theme.font.weight.l};
`;

// SHOW MORE
export const ShowMoreWrap = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${theme.space.l}rem;

  @media ${theme.windowSize.big} {
    padding-top: ${theme.space.xl}rem;
  }
`;
export const ShowMoreTitle = styled.span`
  font-weight: ${theme.font.weight.m};
  padding-right: ${theme.space.s}rem;
`;
export const ShowMoreImg = styled.img`
  width: ${CONSTANS.ICON_LENGTH}rem;
  transform: rotate(-135deg);
`;
