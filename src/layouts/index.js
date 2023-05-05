import React from 'react';
import Helmet from 'react-helmet';

import State from '../assets/state/State';
import GlobalStyle from '../assets/globalStyles';
import LayoutContent from './LayoutContent';

const Layout = ({ children }) => {
  return (
    <State
      children={
        <>
          <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;900&family=Yeseva+One&display=swap"
              rel="stylesheet"
            />
          </Helmet>

          <GlobalStyle />
          <LayoutContent children={children} />
        </>
      }
    />
  );
};

export default Layout;
