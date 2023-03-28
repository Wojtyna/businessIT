import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Helmet from 'react-helmet';

import State, { GlobalState } from '../assets/state/State';
import GlobalStyle, { CONSTANS } from '../assets/globalStyles';
import LoadingView from '../templates/loadingView';

export const WrapperStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: ${CONSTANS.MIN_PAGE_WIDTH}rem;
  min-height: 100%;

  ${({ disabledBodyScrolling }) =>
    disabledBodyScrolling &&
    css`
      overflow-y: hidden;
    `}
`;

const Wrapper = ({ children }) => {
  const { state } = useContext(GlobalState);

  return (
    <WrapperStyle
      id="wrapper"
      className="scrollView"
      disabledBodyScrolling={state.disabledBodyScrolling}
    >
      {children}
    </WrapperStyle>
  );
};

const Layout = ({ children }) => {
  const [LayoutState, setLayoutState] = useState({
    LoadingViewProps: { localStroageLoaded: false, showLoadingView: false },
    BrowserLangProps: {
      BrowserLang: 'en',
      BrowserLoaded: false,
    },
  });
  const { LoadingViewProps, BrowserLangProps } = LayoutState;
  const setLoadingViewProps = (_ev) => {
    setLayoutState((prev) => ({
      ...prev,
      LoadingViewProps: _ev,
    }));
  };
  const setBrowserLangProps = (_ev) => {
    setLayoutState((prev) => ({
      ...prev,
      BrowserLangProps: _ev,
    }));
  };

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

    setBrowserLangProps({
      BrowserLang: storageBrowserLang
        ? storageBrowserLang
        : userBrowserLang
        ? userBrowserLang
        : 'en',
      BrowserLoaded: true,
    });
  }, []);

  if (!BrowserLangProps.BrowserLoaded) return <></>;

  return (
    <State
      loadedLang={BrowserLangProps.BrowserLang}
      children={
        <>
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;900&display=swap"
              rel="stylesheet"
            />
          </Helmet>

          <GlobalStyle />
          {LoadingViewProps.localStroageLoaded && (
            <Wrapper>
              {LoadingViewProps.showLoadingView && <LoadingView />}
              {children}
            </Wrapper>
          )}
        </>
      }
    />
  );
};

export default Layout;
