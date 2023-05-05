import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import {
  ViewWrap,
  AboutWrap,
  BottomTitle,
  NavWrap,
  PanelImage,
  PanelStyle,
  PanelTitle,
  PanelsWrap,
  TopTitle,
  TopWrap,
} from './style';
import { theme } from '../../../assets/globalStyles';
import IconButton from '../../../components/iconButton';

import ArrowImage from '../../../assets/images/icons/arrow-thin.webp';
import BallImage from '../../../assets/images/about/ball.webp';
import ClipboardImage from '../../../assets/images/about/clipboard.webp';
import ComputerImage from '../../../assets/images/about/computer.webp';
import IdeaImage from '../../../assets/images/about/idea.webp';
import MagnifyingImage from '../../../assets/images/about/magnifying-code.webp';
import ReactImage from '../../../assets/images/about/react.webp';
import ReviewImage from '../../../assets/images/about/review.webp';
import TrophyImage from '../../../assets/images/about/trophy.webp';

gsap.registerPlugin(ScrollToPlugin);

export default function AboutView({
  content: { topTitle, bottomTitle, arrowAlt, panelImageAlt, panels },
}) {
  const ScrollItemIndex = useRef(0);

  const scroll = (prev = false) => {
    const panelsWrap = document.getElementById('ABOUT_PANELS_WRAP');
    const panelsWrapWidth = panelsWrap?.clientWidth;
    const paddingBetweenItems =
      typeof window !== 'undefined'
        ? window.innerWidth > 1200
          ? theme.space.xl * 10
          : theme.space.l * 10
        : theme.space.l * 10;
    const singlePanelWidth =
      panelsWrap?.children[0].clientWidth + paddingBetweenItems;
    const countOfVisibleItems = Math.floor(panelsWrapWidth / singlePanelWidth);

    const panelChildens =
      document.getElementById('ABOUT_PANELS_WRAP')?.children;
    const goPrev = prev && ScrollItemIndex.current > 0;
    const goNext =
      !prev &&
      ScrollItemIndex.current < panelChildens.length - countOfVisibleItems;
    if (goPrev) {
      ScrollItemIndex.current--;
    }
    if (goNext) {
      ScrollItemIndex.current++;
    }
    if (goPrev || goNext)
      gsap.to('#ABOUT_PANELS_WRAP', {
        duration: 0.5,
        scrollTo: {
          x: panelChildens[ScrollItemIndex.current],
        },
      });
  };

  const PanelsData = [
    {
      title: panels[0],
      image: BallImage,
    },
    {
      title: panels[1],
      image: ReviewImage,
    },
    {
      title: panels[2],
      image: ReactImage,
    },
    {
      title: panels[3],
      image: IdeaImage,
    },
    {
      title: panels[4],
      image: TrophyImage,
    },
    {
      title: panels[5],
      image: ClipboardImage,
    },
    {
      title: panels[6],
      image: ComputerImage,
    },
    {
      title: panels[7],
      image: MagnifyingImage,
    },
  ];

  return (
    <ViewWrap className="view-inline-space index-view">
      <AboutWrap>
        <TopWrap>
          <TopTitle>{topTitle}</TopTitle>
          <NavWrap>
            <IconButton
              onClick={() => {
                scroll(true);
              }}
              alt={arrowAlt}
              iconSource={ArrowImage}
            />
            <IconButton
              onClick={() => {
                scroll();
              }}
              alt={arrowAlt}
              iconSource={ArrowImage}
              iconStyle={{ transform: 'rotate(180deg)' }}
              border
            />
          </NavWrap>
        </TopWrap>

        <PanelsWrap id={`ABOUT_PANELS_WRAP`}>
          {PanelsData.map(({ title, image }, index) => (
            <PanelStyle isFirst={index === 0} key={`ABOUT_PANEL_${index}`}>
              <PanelImage alt={panelImageAlt} src={image} />
              <PanelTitle>{title}</PanelTitle>
            </PanelStyle>
          ))}
        </PanelsWrap>

        <BottomTitle>{bottomTitle}</BottomTitle>
      </AboutWrap>
    </ViewWrap>
  );
}
