import React from 'react';
import styled, { css } from 'styled-components';

import { CONSTANS, theme } from '../../../assets/globalStyles';

import MagnifyingImage from '../../../assets/images/form/magnifying-dollar.webp';
import StairsImage from '../../../assets/images/form/stairs.webp';
import SwitchImage from '../../../assets/images/form/switch.webp';
import Button from '../../../components/button';

const ViewWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-block: ${theme.space.xxl}rem;

  @media ${theme.windowSize.mid} {
    margin-block: ${theme.space.xxl * 1.5}rem ${theme.space.xxl}rem;
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
  padding-block: ${theme.space.m}rem ${theme.space.xs}rem;
  color: ${theme.colors.primary};
  font-weight: ${theme.font.weight.l};
  text-transform: uppercase;
`;

const ItemSubtitle = styled.span`
  display: inline-block;
  max-width: 26rem;
`;

export default function IntroView({
  content: { content, buttonTitle },
  setCurrentStep,
  CurrentStep,
}) {
  const Images = [MagnifyingImage, SwitchImage, StairsImage];
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 767;

  const onNextStepButton = () => {
    setCurrentStep(1);
  };

  if (CurrentStep !== 0) return <></>;
  return (
    <ViewWrap id="PRODUCTS_STEP_1">
      <ContentWrap>
        {content.map(({ title, subtitle, imageAlt }, index) => (
          <ItemWrap key={`PRODUCTS_INTRO_ITEM_${index}`} isFirst={index === 0}>
            <ItemImage src={Images[index]} alt={imageAlt} />
            <ItemTitle>{title}</ItemTitle>
            <ItemSubtitle>{subtitle}</ItemSubtitle>
          </ItemWrap>
        ))}
      </ContentWrap>
      <Button
        onClick={onNextStepButton}
        title={buttonTitle}
        filled
        style={isMobile ? { width: '100%' } : {}}
      />
    </ViewWrap>
  );
}
