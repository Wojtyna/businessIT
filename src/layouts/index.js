import React, { useContext } from 'react';
import Helmet from 'react-helmet';

import State, { GlobalState } from '../assets/state/State';
import GlobalStyle from '../assets/globalStyles';
import IndexView from '../templates/index';

const GlobalStyleView = () => {
  const { state } = useContext(GlobalState);

  return <GlobalStyle navMobileVisible={state.navMobileVisible} />;
};

const Layout = ({ children }) => {
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
          <IndexView />
          {children}
        </>
      }
    />
  );
};

export default Layout;
