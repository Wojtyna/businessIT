import React from 'react';
import styled from 'styled-components';

import { CONSTANS, theme } from '../../../assets/globalStyles';

const NAV_DOT_LENGTH = 1.2;
const NAV_CORNER_LENGTH = NAV_DOT_LENGTH * 4;
const NAV_CORNER_BORDER = NAV_CORNER_LENGTH / 4;

// MAIN WRAP
const ViewWrap = styled.section`
  margin-top: ${CONSTANS.SPACE_BETWEEN_SECTIONS / 2}rem;
`;

// BROWSER
const BrowserWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 100rem;
  margin-inline: auto;
  background-color: white;
  border-radius: 0 ${theme.space.l}rem ${theme.space.l}rem ${theme.space.l}rem;
  box-shadow: 0 0 8rem -8rem black;
  padding: 2rem;

  @media ${theme.windowSize.big} {
    padding: 4rem;
    border-radius: 0 ${theme.space.xl}rem ${theme.space.xl}rem
      ${theme.space.xl}rem;
  }
`;

// NAV
const Nav = styled.div`
  position: absolute;
  left: 0;
  top: -${NAV_DOT_LENGTH * 3}rem;
  display: flex;
  height: ${NAV_DOT_LENGTH * 3}rem;
  align-items: center;
  background-color: white;
  padding-inline: ${NAV_DOT_LENGTH * 2}rem;
  border-radius: ${theme.space.l}rem ${theme.space.l}rem 0 0;
`;
const NavCorner = styled.div`
  position: absolute;
  width: ${NAV_CORNER_LENGTH / 2}rem;
  height: ${NAV_CORNER_LENGTH / 2}rem;
  right: -${NAV_CORNER_LENGTH / 4}rem;
  bottom: -${NAV_CORNER_LENGTH / 4}rem;
  overflow: hidden;

  ::before {
    position: absolute;
    content: '';
    border: solid ${NAV_CORNER_BORDER}rem white;
    border-radius: ${NAV_CORNER_LENGTH}rem;
    width: ${NAV_CORNER_LENGTH}rem;
    height: ${NAV_CORNER_LENGTH}rem;
    right: -${NAV_CORNER_LENGTH / 2}rem;
    bottom: 0.1rem;
  }
`;
const NavDot = styled.div`
  width: ${NAV_DOT_LENGTH}rem;
  height: ${NAV_DOT_LENGTH}rem;
  background-color: ${({ second, third }) =>
    third ? '#8DFF7B' : second ? '#FFD27B' : '#FF7B7B'};
  border-radius: ${NAV_DOT_LENGTH}rem;
  margin-inline: 0.5rem;
`;

// LINE
const Line = styled.div`
  width: ${({ width }) => width}%;
  height: 1rem;
  margin-inline: auto;
  margin-block: 1rem;
  background-color: ${theme.colors.light1};
  border-radius: 1rem;

  @media ${theme.windowSize.big} {
    margin-block: 3rem;
  }
`;

// TEXT
const Text = styled.h2`
  text-align: center;
  padding-block: 1rem;

  @media ${theme.windowSize.big} {
    padding-block: 3rem;
  }
`;

export default function BrowserView({ content: { firstTitle, secondTitle } }) {
  return (
    <ViewWrap className="view-inline-space animate-opacity-onEnter">
      <BrowserWrap>
        <Nav>
          <NavCorner />
          <NavDot />
          <NavDot second />
          <NavDot third />
        </Nav>
        <Line width={70} />
        <Line width={60} />
        <Text>{firstTitle}</Text>
        <Line width={90} />
        <Text>{secondTitle}</Text>
        <Line width={50} />
      </BrowserWrap>
    </ViewWrap>
  );
}
