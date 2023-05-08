import React from 'react';

import {
  ViewWrap,
  Title,
  BottomBgLineWrap,
  BottomBgLine,
  CompanyName,
} from './style';

import BottomLineBgImage from '../../../assets/images/bg-lines/bottom.webp';
import AnimatedLogo from '../../../components/animatedLogo';

const FooterView = ({ content: { title, bottomLineAlt }, companyName }) => (
  <ViewWrap className="spaceBetweenSections">
    <BottomBgLineWrap>
      <BottomBgLine src={BottomLineBgImage} alt={bottomLineAlt} />
    </BottomBgLineWrap>
    <Title className="animate-opacity-onEnter">{title}</Title>
    <AnimatedLogo id={2} logoWidth={7} />
    <CompanyName className="companyName">{companyName}</CompanyName>
  </ViewWrap>
);

export default FooterView;
