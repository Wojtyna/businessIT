import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import {
  ButtonStyled,
  CardStyle,
  PriceAmount,
  PromoText,
  PromoWrap,
  Ring,
  RingsWrap,
  Subtitle,
  Title,
  CardContent,
  CARD_CIRCLE_WIDTH,
} from './style';

gsap.registerPlugin(ScrollTrigger);

const ProductsView = ({
  content: { title, subtitle, promoText, priceTitle, priceAmount, buttonTitle },
  onProductsClick,
}) => {
  useEffect(() => {
    const animtedCardsIndex = [0, 1, 2, 3, 4];
    const cardCircleCloseLength = [0.01, 0.025, 0.05, 0.1, 0.2];
    const cardCircleOpenLength = [0.02, 0.06, 0.14, 0.31, 0.6];

    const animateCard = (index) => {
      gsap.to(`#CARD_RING_${index + 1}`, {
        duration: 1.5,
        delay: 0.2 * index,
        width: CARD_CIRCLE_WIDTH * 10 * cardCircleCloseLength[index],
        height: CARD_CIRCLE_WIDTH * 10 * cardCircleCloseLength[index],
        ease: 'Power4.easeOut',
        scrollTrigger: {
          scroller: '#wrapper',
          trigger: '#CARD_WRAP',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        onComplete: () => {
          gsap.fromTo(
            `#CARD_RING_${index + 1}`,
            {
              width: CARD_CIRCLE_WIDTH * 10 * cardCircleCloseLength[index],
              height: CARD_CIRCLE_WIDTH * 10 * cardCircleCloseLength[index],
            },
            {
              duration: 3,
              width: CARD_CIRCLE_WIDTH * 10 * cardCircleOpenLength[index],
              height: CARD_CIRCLE_WIDTH * 10 * cardCircleOpenLength[index],
              repeat: -1,
              yoyo: true,
              ease: 'Power4.easeOut',
              scrollTrigger: {
                scroller: '#wrapper',
                trigger: '#CARD_WRAP',
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'play pause resume pause',
              },
            }
          );
        },
      });
    };

    animtedCardsIndex.forEach((index) => {
      animateCard(index);
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <section className="view-inline-space spaceBetweenSections animate-opacity-onEnter">
      <CardStyle id="CARD_WRAP">
        <RingsWrap>
          <Ring id="CARD_RING_1" />
          <Ring id="CARD_RING_2" />
          <Ring id="CARD_RING_3" />
          <Ring id="CARD_RING_4" />
          <Ring id="CARD_RING_5" />
        </RingsWrap>

        <CardContent>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>

          <PromoWrap>
            {promoText.map((text, productsIndex) => (
              <PromoText
                key={`PRODUCTS_ITEM_${productsIndex}`}
                second={productsIndex % 2 === 1}
              >
                {text}
              </PromoText>
            ))}
          </PromoWrap>

          <Subtitle>{priceTitle}</Subtitle>
          <PriceAmount>{priceAmount}</PriceAmount>
          <ButtonStyled onClick={onProductsClick}>{buttonTitle}</ButtonStyled>
        </CardContent>
      </CardStyle>
    </section>
  );
};

export default ProductsView;
