import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Helmet from 'react-helmet';

import State, { GlobalState } from '../assets/state/State';
import GlobalStyle, { CONSTANS, theme } from '../assets/globalStyles';
import IndexView from '../templates/index';
import LoadingView from '../templates/loadingView';

export const WrapperStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: ${CONSTANS.MIN_PAGE_WIDTH}rem;
  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: ${CONSTANS.SCROLL_BAR_WIDTH}rem;
  }
  ::-webkit-scrollbar-track {
    background-color: ${theme.colors.light1};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.light2};
    border-radius: ${CONSTANS.SCROLL_BAR_WIDTH}rem;
  }

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
      disabledBodyScrolling={state.disabledBodyScrolling}
    >
      {children}
    </WrapperStyle>
  );
};

const Layout = ({ children }) => {
  const [LoadingViewProps, setLoadingViewProps] = useState({
    localStroageLoaded: false,
    showLoadingView: false,
  });

  useEffect(() => {
    const tempShowLoadingView =
      typeof window !== 'undefined' &&
      localStorage.getItem('@LOADING_PAGE_TIMESTAMP');

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
  }, []);

  return (
    <State
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
              <IndexView />
              {children}
            </Wrapper>
          )}
        </>
      }
    />
  );
};

export default Layout;
