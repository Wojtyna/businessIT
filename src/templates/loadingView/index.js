import React, { useContext, useEffect, useState } from 'react';
import { gsap, Power1 } from 'gsap';

import { Bg, Text, Typewrite, ViewWrap } from './style';
import { GlobalState } from '../../assets/state/State';
import ContentData from '../../assets/data.json';

export default function LoadingView() {
  const { state, dispatch } = useContext(GlobalState);
  const [FinishedLoadingView, setFinishedLoadingView] = useState(false);

  const finishView = () => {
    const tempDate = new Date();
    if (typeof window !== 'undefined') {
      localStorage.setItem('@LOADING_PAGE_TIMESTAMP', tempDate.toJSON());
    }
    setFinishedLoadingView(true);
    if (!state.disabledBodyScrolling) {
      dispatch({ type: 'TOGGLE_BODY_SCROLL' });
    }
  };

  const endAnimation = () => {
    gsap.to('#loading-view-bg-1', {
      duration: 0.6,
      ease: Power1.easeOut,
      transform: 'translateY(-100%)',
    });
    gsap.to('#loading-view-bg-2', {
      duration: 0.4,
      delay: 0.2,
      ease: Power1.easeOut,
      transform: 'translateY(-100%)',
    });
    gsap.to('#loading-view-bg-3', {
      duration: 0.25,
      delay: 0.35,
      ease: Power1.easeOut,
      transform: 'translateY(-100%)',
      onComplete: finishView,
    });
  };

  useEffect(() => {
    if (!state.disabledBodyScrolling) {
      dispatch({ type: 'TOGGLE_BODY_SCROLL' });
    }
    const endText = '...';
    const badEndText = '//';
    const word = ContentData.translations[state.lang].landingView.text;
    const badWord = word + badEndText;

    const writingTime = 300;
    const startDelay = 2500;

    let letterCount = 0;
    let currentText = '';

    let endLetterCount = 0;

    let isDelete = false;
    let correntCount = 0;

    const _changeText = () => {
      const LoadingText = document.getElementById('loading-view-text');
      if ('textContent' in LoadingText) {
        LoadingText.textContent = currentText;
      } else {
        LoadingText.innerText = currentText;
      }
    };

    const _correctWord = () => {
      if (correntCount === badEndText.length) {
        isDelete = false;
      } else {
        isDelete = true;
      }

      if (isDelete) {
        currentText = badWord.slice(0, --letterCount);
        correntCount++;
      } else {
        currentText = word + endText.slice(0, ++endLetterCount);
      }

      _changeText();

      if (isDelete || endLetterCount !== endText.length) {
        setTimeout(
          _correctWord,
          currentText.length === word.length ? writingTime * 2 : writingTime
        );
      } else {
        setTimeout(endAnimation, writingTime * 5);
      }
    };

    const _typeWord = () => {
      currentText = badWord.slice(0, ++letterCount);

      _changeText();

      if (currentText.length === badWord.length) {
        setTimeout(_correctWord, writingTime * 3);
      } else {
        setTimeout(_typeWord, writingTime);
      }
    };

    setTimeout(_typeWord, startDelay);
  }, []);

  if (FinishedLoadingView) return <></>;
  return (
    <ViewWrap id="loading-view">
      <Bg id="loading-view-bg-1">
        <Text id="loading-view-text"></Text>
        <Typewrite id="loading-view-border"></Typewrite>
      </Bg>
      <Bg id="loading-view-bg-2" second />
      <Bg id="loading-view-bg-3" third />
    </ViewWrap>
  );
}
