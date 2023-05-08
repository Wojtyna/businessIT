import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

import { CONSTANS, theme } from '../assets/globalStyles';
import { GlobalState } from '../assets/state/State';
import ContentData from '../assets/translates.json';

import HandImage from '../assets/images/form/hand.webp';

const SuccesWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${theme.space.xl}rem;
  transform: translateY(-33%) scale(0.8);
  opacity: 0;
  max-width: 30rem;
  margin-inline: auto;
  text-align: center;

  @media ${theme.windowSize.mid} {
    flex-direction: row;
    text-align: left;
    max-width: none;
  }
`;

const ImageStyle = styled.img`
  align-self: center;
  width: ${CONSTANS.IMAGE_LENGTH_L}rem;
  height: ${CONSTANS.IMAGE_LENGTH_L}rem;
  margin-bottom: ${theme.space.l}rem;
  transform: translateY(33%) scale(0.5);
  animation: rotate 0.8s linear infinite alternate;

  @media ${theme.windowSize.mid} {
    width: ${CONSTANS.IMAGE_LENGTH_M}rem;
    height: ${CONSTANS.IMAGE_LENGTH_M}rem;
    margin-right: ${theme.space.l}rem;
    margin-bottom: 0;
  }

  @keyframes rotate {
    0% {
      rotate: 5deg;
    }
    100% {
      rotate: -5deg;
    }
  }
`;

const TitleStyle = styled.h2`
  color: ${theme.colors.primary};
  font-weight: ${theme.font.weight.l};
`;

const ContentText = styled.span`
  padding-block: ${theme.space.xs}rem;
  display: inline-block;
`;

export default function SuccessInfo() {
  const { state } = useContext(GlobalState);
  const {
    sendedPanel: { imageAlt, subtitle, title },
  } = ContentData.translations[state.lang];

  useEffect(() => {
    gsap.to('#success-info-wrap', {
      delay: 0.1,
      duration: 0.2,
      opacity: 1,
      transform: 'translateY(0) scale(1)',
      ease: 'easeOut',
    });
    gsap.to('#success-info-img', {
      delay: 0.2,
      duration: 0.3,
      transform: 'translateY(0) scale(1)',
      ease: 'easeOut',
    });
  }, []);

  return (
    <SuccesWrap id="success-info-wrap">
      <ImageStyle src={HandImage} alt={imageAlt} id="success-info-img" />
      <div>
        <TitleStyle>{title}</TitleStyle>
        <ContentText
          dangerouslySetInnerHTML={{
            __html: subtitle,
          }}
        />
      </div>
    </SuccesWrap>
  );
}
