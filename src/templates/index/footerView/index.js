import React from 'react';

import { ViewWrap, Title, BottomBgLineWrap, BottomBgLine } from './style';

import BottomLineBgImage from '../../../assets/images/bg-lines/bottom.webp';

export default function FooterView({
  content: { title, bottomLineAlt, titleMobile },
}) {
  return typeof window !== 'undefined' ? (
    <ViewWrap className="view-inline-space">
      <BottomBgLineWrap>
        <BottomBgLine src={BottomLineBgImage} alt={bottomLineAlt} />
      </BottomBgLineWrap>
      {/* <Title
        className="textBorder animate-opacity-onEnter"
        dangerouslySetInnerHTML={{
          __html: window.innerWidth > 767 ? title : titleMobile,
        }}
      /> */}
    </ViewWrap>
  ) : (
    <ViewWrap onlyTopPadding></ViewWrap>
  );
}
