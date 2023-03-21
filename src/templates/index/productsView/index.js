import React from 'react';

import {
  ViewWrap,
  BigTitle,
  Price,
  PriceWrap,
  ProductImage,
  ProductTextWrap,
  ProductWrap,
  ProductsPanel,
  ProductsWrap,
  ShowMoreImg,
  ShowMoreTitle,
  ShowMoreWrap,
  StyledTitle,
  TitleWrap,
  ProductText,
} from './style';

import ArrowImage from '../../../assets/images/icons/arrow.webp';
import CafeImage from '../../../assets/images/products/cafe.webp';
import InternetImage from '../../../assets/images/products/internet.webp';
import SmartphoneImage from '../../../assets/images/products/smartphone.webp';

export default function ProductsView({
  content: { titleView, showMore, imageAlt, arrowAlt, priceSubtitle, products },
  onProductsClick,
}) {
  const ProductsData = [
    {
      ...products[0],
      image: InternetImage,
    },
    {
      ...products[1],
      image: CafeImage,
    },
    {
      ...products[2],
      image: SmartphoneImage,
    },
  ];

  return (
    <ViewWrap className="view-inline-space">
      <TitleWrap>
        <BigTitle>{titleView}</BigTitle>
        <StyledTitle>{titleView}</StyledTitle>
      </TitleWrap>

      <ProductsPanel onClick={onProductsClick}>
        <ProductsWrap>
          {ProductsData.map(({ image, price, content }, productsIndex) => (
            <ProductWrap
              key={`PRODUCTS_ITEM_${productsIndex}`}
              isFirst={productsIndex === 0}
              index={productsIndex}
            >
              <ProductTextWrap>
                <ProductImage src={image} alt={imageAlt} />
                {content.map((text, index) => (
                  <ProductText
                    key={`PRODUCT_${productsIndex}_ITEM_TEXT_${index}`}
                  >
                    {text}
                  </ProductText>
                ))}
              </ProductTextWrap>
              <PriceWrap>
                <span className="smallFont">{priceSubtitle}</span>
                <Price>{price}</Price>
              </PriceWrap>
            </ProductWrap>
          ))}
        </ProductsWrap>

        <ShowMoreWrap>
          <ShowMoreTitle>{showMore}</ShowMoreTitle>
          <ShowMoreImg src={ArrowImage} alt={arrowAlt} />
        </ShowMoreWrap>
      </ProductsPanel>
    </ViewWrap>
  );
}
