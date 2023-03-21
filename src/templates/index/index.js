import React, { useContext, useEffect, useState } from 'react';

import { GlobalState } from '../../assets/state/State';
import Data from '../../assets/data.json';
import LandingView from './landingView';
import BrowserView from './browserView';
import QuoteView from './quoteView';
import AboutView from './aboutView';
import TeamView from './teamView';
import StepsView from './stepsView';
import ProductsView from './productsView';
import FooterView from './footerView';
import Navigation from './nav';
import NavigationMobile from './nav/mobile';

export default function IndexView() {
  const { state } = useContext(GlobalState);
  const [WindowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' && window.innerWidth
  );

  useEffect(() => {
    const windowResize = (event) => {
      const tempWindowWidth = event.target.innerWidth;
      if (Math.abs(WindowWidth - tempWindowWidth) > 20) {
        setWindowWidth(tempWindowWidth);
      }
    };
    window.addEventListener('resize', windowResize);

    return () => window.removeEventListener('resize', windowResize);
  }, [WindowWidth]);

  return (
    <main>
      {WindowWidth > 767 ? (
        <Navigation
          content={Data.translations[state.lang].navigation}
          showProductsModal={() => {}}
          showFormModal={() => {}}
        />
      ) : (
        <NavigationMobile
          content={Data.translations[state.lang].navigation}
          showProductsModal={() => {}}
          showFormModal={() => {}}
        />
      )}
      <LandingView
        content={Data.translations[state.lang].indexPage.landingView}
      />
      <BrowserView
        content={Data.translations[state.lang].indexPage.browserView}
      />
      <QuoteView content={Data.translations[state.lang].indexPage.quoteView} />
      <AboutView content={Data.translations[state.lang].indexPage.aboutView} />
      <TeamView content={Data.translations[state.lang].indexPage.teamView} />
      <StepsView content={Data.translations[state.lang].indexPage.stepsView} />
      <ProductsView
        content={Data.translations[state.lang].indexPage.productsView}
        onProductsClick={() => {}}
      />
      <FooterView
        content={Data.translations[state.lang].indexPage.footerView}
      />
    </main>
  );
}
