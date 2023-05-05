import React from 'react';
import { gsap, Power4 } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import {
  ViewWrap,
  Bg,
  BgWrap,
  ContentWrap,
  ScrollWrap,
  TopLine,
  TopLineWrap,
  ViewTitle,
  ScrollIconWrap,
} from './style';
import IconButton from '../../../components/iconButton';
import AnimatedLogo from '../../../components/animatedLogo';

import ArrowDown from '../../../assets/images/icons/arrow.webp';
import TopLineImage from '../../../assets/images/bg-lines/top.webp';
import BgImage from '../../../assets/images/landing-bg.webp';

gsap.registerPlugin(ScrollToPlugin);

export default function LandingView({
  content: { title, topLineAlt, bgAlt, scrollDownTitle, scrollDownAlt },
}) {
  const scrollDown = () => {
    gsap.to('#wrapper', {
      duration: 0.5,
      ease: Power4.easeOut,
      scrollTo: { y: '#landing-view-scroll-down', offsetY: -70 },
    });
  };

  return (
    <ViewWrap id="landing-view">
      <TopLineWrap>
        <TopLine src={TopLineImage} alt={topLineAlt} />
      </TopLineWrap>
      <BgWrap>
        <Bg src={BgImage} alt={bgAlt} />
      </BgWrap>
      <ContentWrap className="view-inline-space">
        <ViewTitle>
          {title[0]} <span className="primaryColor">{title[1]}</span>
        </ViewTitle>
        <AnimatedLogo
          id={1}
          logoWidth={
            typeof window !== 'undefined'
              ? window.innerWidth > 767
                ? 28
                : 18
              : 24
          }
        />
      </ContentWrap>
      <ScrollWrap className="smallFont" id="landing-view-scroll-down">
        {scrollDownTitle}
        <ScrollIconWrap>
          <IconButton
            onClick={scrollDown}
            alt={scrollDownAlt}
            iconSource={ArrowDown}
          />
        </ScrollIconWrap>
      </ScrollWrap>
    </ViewWrap>
  );
}
