import React, { useContext, useEffect, useState } from 'react';
import Helmet from 'react-helmet';

import State, { GlobalState } from '../assets/state/State';
import GlobalStyle from '../assets/globalStyles';
import IndexView from '../templates/index';
import LoadingView from '../templates/loadingView';

const GlobalStyleView = () => {
  const { state } = useContext(GlobalState);

  return <GlobalStyle disabledBodyScrolling={state.disabledBodyScrolling} />;
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

          <GlobalStyleView />
          {LoadingViewProps.localStroageLoaded && (
            <>
              {LoadingViewProps.showLoadingView && <LoadingView />}
              <IndexView />
              {children}
            </>
          )}
        </>
      }
    />
  );
};

export default Layout;
