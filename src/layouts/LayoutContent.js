import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { GlobalState } from '../assets/state/State';
import { CONSTANS } from '../assets/globalStyles';
import LoadingView from '../templates/loadingView';

import NoiseImage from '../assets/images/noise.webp';

const LayoutContent = ({ children }) => {
  const { state, dispatch } = useContext(GlobalState);
  const [LoadingViewProps, setLoadingViewProps] = useState({
    localStroageLoaded: false,
    showLoadingView: false,
  });

  useEffect(() => {
    const tempShowLoadingView =
      typeof window !== 'undefined' &&
      localStorage.getItem('@LOADING_PAGE_TIMESTAMP');

    if (tempShowLoadingView) {
      const tempLocalDate = new Date(tempShowLoadingView);
      const tempCurrentDate = new Date();
      if (
        !(
          tempLocalDate.getFullYear() === tempCurrentDate.getFullYear() &&
          tempLocalDate.getMonth() === tempCurrentDate.getMonth() &&
          tempLocalDate.getDate() === tempCurrentDate.getDate()
        )
      ) {
        setLoadingViewProps({
          localStroageLoaded: true,
          showLoadingView: true,
        });
      } else {
        setLoadingViewProps({
          localStroageLoaded: true,
          showLoadingView: false,
        });
      }
    } else {
      setLoadingViewProps({
        localStroageLoaded: true,
        showLoadingView: true,
      });
    }
  }, []);

  useEffect(() => {
    const userBrowserLang =
      typeof navigator !== 'undefined' && navigator.language.substring(0, 2);
    const storageBrowserLang =
      typeof window !== 'undefined' && localStorage.getItem('@BROWSER_LANG');

    dispatch({
      type: 'SET_LANG',
      key: storageBrowserLang || userBrowserLang || 'en',
    });
  }, []);

  if (!state.lang) return <></>;
  return (
    <WrapperStyle
      id="wrapper"
      className="scrollView"
      disabledBodyScrolling={state.disabledBodyScrolling}
    >
      {LoadingViewProps.showLoadingView && <LoadingView />}
      {LoadingViewProps.localStroageLoaded && children}
    </WrapperStyle>
  );
};

const WrapperStyle = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: ${CONSTANS.MIN_PAGE_WIDTH}rem;
  min-height: 100%;
  background-image: url(${NoiseImage});
  background-repeat: repeat;
  background-attachment: local;

  ${({ disabledBodyScrolling }) =>
    disabledBodyScrolling &&
    css`
      overflow-y: hidden;
    `}
`;

export default LayoutContent;
