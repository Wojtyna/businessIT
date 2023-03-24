import React, { useContext, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Seo from '../components/seo';
import { GlobalState } from '../assets/state/State';
import ContentData from '../assets/data.json';

import LandingView from '../templates/index/landingView';
import BrowserView from '../templates/index/browserView';
import QuoteView from '../templates/index/quoteView';
import AboutView from '../templates/index/aboutView';
import TeamView from '../templates/index/teamView';
import StepsView from '../templates/index/stepsView';
import ProductsView from '../templates/index/productsView';
import FooterView from '../templates/index/footerView';
import Navigation from '../templates/index/nav';
import NavigationMobile from '../templates/index/nav/mobile';

import ContactPage from '../templates/contact';
import ProductsPage from '../templates/products';

gsap.registerPlugin(ScrollTrigger);

export default function IndexPage() {
  const { state, dispatch } = useContext(GlobalState);
  const [WindowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' && window.innerWidth
  );
  const [PagesVisible, setPagesVisible] = useState({
    contact: false,
    products: false,
  });

  const togglePageVisible = (type) => {
    setPagesVisible((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const toggleContactPage = (toggleBodyScroll = true) => {
    if (toggleBodyScroll) {
      dispatch({ type: 'TOGGLE_BODY_SCROLL' });
    }
    togglePageVisible('contact');
  };

  const toggleProductsPage = (toggleBodyScroll = true) => {
    if (toggleBodyScroll) {
      dispatch({ type: 'TOGGLE_BODY_SCROLL' });
    }
    togglePageVisible('products');
  };

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

  useEffect(() => {
    const _sections = document.querySelectorAll('.index-view');
    _sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          y: '+=30',
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'easeInOut',
          scrollTrigger: {
            scroller: '#wrapper',
            trigger: section,
            start: 'top 75%',
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Seo title={ContentData.companyName} />
      <main>
        <ContactPage
          visible={PagesVisible.contact}
          closePage={toggleContactPage}
        />
        <ProductsPage
          visible={PagesVisible.products}
          closePage={toggleProductsPage}
        />
        {WindowWidth > 767 ? (
          <Navigation
            content={ContentData.translations[state.lang].navigation}
            showProductsModal={toggleProductsPage}
            showFormModal={toggleContactPage}
          />
        ) : (
          <NavigationMobile
            content={ContentData.translations[state.lang].navigation}
            showProductsModal={() => {
              toggleProductsPage(false);
            }}
            showFormModal={() => {
              toggleContactPage(false);
            }}
          />
        )}
        <LandingView
          content={ContentData.translations[state.lang].indexPage.landingView}
        />
        <BrowserView
          content={ContentData.translations[state.lang].indexPage.browserView}
        />
        <QuoteView
          content={ContentData.translations[state.lang].indexPage.quoteView}
        />
        <AboutView
          content={ContentData.translations[state.lang].indexPage.aboutView}
        />
        <TeamView
          content={ContentData.translations[state.lang].indexPage.teamView}
        />
        <StepsView
          content={ContentData.translations[state.lang].indexPage.stepsView}
        />
        <ProductsView
          content={ContentData.translations[state.lang].indexPage.productsView}
          onProductsClick={toggleProductsPage}
        />
        <FooterView
          content={ContentData.translations[state.lang].indexPage.footerView}
        />
      </main>
    </>
  );
}
