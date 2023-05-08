import React from 'react';
import styled from 'styled-components';

import { theme } from '../../../assets/globalStyles';

const TOP_SLIDEOUT = 6;

// MAIN WRAP
const ViewWrap = styled.section`
  padding-top: ${TOP_SLIDEOUT}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const QuoteWrap = styled.div`
  position: relative;
  display: block;
  text-align: center;
  margin-inline: auto;
  font-weight: ${theme.font.weight.l};
`;

// SIGN
const QuoteSign = styled.span`
  z-index: -98;
  position: absolute;
  display: block;
  left: -5rem;
  top: -${TOP_SLIDEOUT}rem;
  color: ${theme.colors.transparentDark};
  font-size: 35rem;
  line-height: 24rem;
  font-weight: ${theme.font.weight.l};

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;
`;

// TEXT
const Quote = styled.h2`
  text-align: center;
  font-weight: ${theme.font.weight.l};
`;
const Text = styled.h2`
  text-align: right;
  color: ${theme.colors.light2};
`;

export default function QuoteView({ content: { quote, author } }) {
  return (
    <ViewWrap className="view-inline-space spaceBetweenSections animate-opacity-onEnter">
      <QuoteWrap>
        <QuoteSign>"</QuoteSign>
        <Quote> {quote}</Quote>
        <Text>{author}</Text>
      </QuoteWrap>
    </ViewWrap>
  );
}
