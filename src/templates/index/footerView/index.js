import React from 'react';

import { ViewWrap, Title, BottomBgLineWrap, BottomBgLine } from './style';

import BottomLineBgImage from '../../../assets/images/bg-lines/bottom.png';

export default function FooterView({
  content: { title, bottomLineAlt, titleMobile },
}) {
  return (
    <ViewWrap className="view-inline-space">
      <BottomBgLineWrap>
        <BottomBgLine src={BottomLineBgImage} alt={bottomLineAlt} />
      </BottomBgLineWrap>
      <Title
        className="textBorder"
        dangerouslySetInnerHTML={{
          __html:
            typeof window !== 'undefined' &&
            (window.innerWidth > 767 ? title : titleMobile),
        }}
      />
    </ViewWrap>
  );
}
