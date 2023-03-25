import React from 'react';
import styled, { css } from 'styled-components';

import { CONSTANS, theme } from '../../../assets/globalStyles';

import MagnifyingImage from '../../../assets/images/form/magnifying-dollar.webp';
import StairsImage from '../../../assets/images/form/stairs.webp';
import SwitchImage from '../../../assets/images/form/switch.webp';

const ViewWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: ${theme.space.xxl}rem;

  @media ${theme.windowSize.mid} {
    flex-direction: row;
  }
`;

const ItemWrap = styled.div`
  ${({ isFirst }) =>
    !isFirst &&
    css`
      margin-top: ${theme.space.xxl}rem;

      @media ${theme.windowSize.mid} {
        margin-top: 0;
        margin-left: ${theme.space.xl}rem;
      }
    `}
`;

const ItemImage = styled.img`
  width: ${CONSTANS.IMAGE_LENGTH_S}rem;
  height: ${CONSTANS.IMAGE_LENGTH_S}rem;
`;

const ItemTitle = styled.h2`
  font-weight: ${theme.font.weight.m};
  padding-block: ${theme.space.m}rem ${theme.space.xs}rem;
  text-transform: uppercase;
`;

const ItemSubtitle = styled.span`
  display: inline-block;
  max-width: 25rem;
`;

export default function IntroView({ content }) {
  const Images = [MagnifyingImage, StairsImage, SwitchImage];

  return (
    <ViewWrap>
      {content.map(({ title, subtitle, imageAlt }, index) => (
        <ItemWrap key={`PRODUCTS_INTRO_ITEM_${index}`} isFirst={index === 0}>
          <ItemImage src={Images[index]} alt={imageAlt} />
          <ItemTitle>{title}</ItemTitle>
          <ItemSubtitle>{subtitle}</ItemSubtitle>
        </ItemWrap>
      ))}
    </ViewWrap>
  );
}
