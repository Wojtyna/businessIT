import React, { useContext, useRef } from 'react';
import { gsap } from 'gsap';

import {
  ViewWrap,
  Button,
  CompanyTitle,
  Header,
  LangButtonsWrap,
  LangView,
  Logo,
  Main,
  LangButtonSpace,
  SeparateLine,
} from './style';
import { GlobalState } from '../../../../assets/state/State';
import IconButton from '../../../../components/iconButton';
import { CONSTANS, theme } from '../../../../assets/globalStyles';

import ContentData from '../../../../assets/data.json';
import TranslateImage from '../../../../assets/images/nav/translate.png';
import ArrowImage from '../../../../assets/images/icons/arrow.webp';
import LogoImage from '../../../../assets/images/logo-huge.png';

const LangWindow = ({
  backIconAlt,
  translateImageAlt,
  toggleNav,
  toggleLangVisible,
  state,
  dispatch,
}) => {
  const LangButtonsData = [];

  for (const [langValue, langContent] of Object.entries(
    ContentData.translations
  )) {
    if (state.lang !== langValue) {
      LangButtonsData.push({
        value: langValue,
        title: langContent.props.lang,
      });
    }
  }

  const onLangClick = (newLange) => {
    toggleNav();
    dispatch({ type: 'CHANGE_LANG', key: newLange });
  };

  return (
    <LangView id="nav-mobile-lang-view">
      <IconButton
        onClick={toggleLangVisible}
        iconSource={TranslateImage}
        alt={translateImageAlt}
        style={{
          marginBottom: theme.space.m * 10,
        }}
      />
      <SeparateLine />
      <LangButtonsWrap>
        {LangButtonsData.map(({ value, title }, index) => (
          <Button
            onClick={() => {
              onLangClick(value);
            }}
            key={`NAV_MOBILE_LANG_BUTTON_${index}`}
          >
            {title}
          </Button>
        ))}
      </LangButtonsWrap>
      <SeparateLine />

      <IconButton
        onClick={toggleLangVisible}
        iconSource={ArrowImage}
        alt={backIconAlt}
        style={{
          marginTop: theme.space.m * 10,
        }}
      />
    </LangView>
  );
};

export default function NavigationMobile({
  content: {
    buttons: { products, contact, translateImageAlt },
    mobile: { backIconAlt },
  },
  showProductsModal,
  showFormModal,
}) {
  const { state, dispatch } = useContext(GlobalState);
  const LangWindowIsVisible = useRef(false);

  const toggleLangVisible = () => {
    gsap.to('#nav-mobile-buttons-wrap', {
      duration: 0.1,
      opacity: LangWindowIsVisible.current ? 1 : 0,
      delay: LangWindowIsVisible.current ? 0.1 : 0,
    });
    gsap.to('#nav-mobile-lang-view', {
      duration: 0.2,
      transform: LangWindowIsVisible.current
        ? `translateY(calc(100% - ${CONSTANS.BUTTON_MIN_HEIGHT_MOBILE}rem))`
        : 'translateY(0)',
      onComplete: () => {
        LangWindowIsVisible.current = !LangWindowIsVisible.current;
      },
    });
  };

  const toggleNav = () => {
    // setNavMobileVisible(!NavMobileVisible);
    dispatch({ type: 'TOGGLE_BODY_SCROLL' });
    gsap.to('#nav-mobile', {
      duration: 0.2,
      transform: state.navMobileVisible ? `translateX(-100%)` : 'translateX(0)',
      onComplete: () => {
        if (LangWindowIsVisible.current) {
          toggleLangVisible();
        }
      },
    });
  };

  return (
    <>
      <IconButton
        onClick={toggleNav}
        burger={{ isOpen: state.navMobileVisible, visible: true }}
        style={{
          zIndex: 101,
          position: 'fixed',
          right: `${theme.space.l}rem`,
          top: `${theme.space.l}rem`,
        }}
      />
      <ViewWrap className="view-inline-space" id="nav-mobile">
        <LangWindow
          backIconAlt={backIconAlt}
          translateImageAlt={translateImageAlt}
          toggleNav={toggleNav}
          toggleLangVisible={toggleLangVisible}
          dispatch={dispatch}
          state={state}
        />

        <Header>
          <Logo src={LogoImage} alt={`${ContentData.companyName} Logo`} />
          <CompanyTitle className="companyName">
            {ContentData.companyName}
          </CompanyTitle>
        </Header>

        <Main id="nav-mobile-buttons-wrap">
          <Button
            onClick={() => {
              toggleNav();
              showProductsModal();
            }}
          >
            {products}
          </Button>
          <Button
            onClick={() => {
              toggleNav();
              showFormModal();
            }}
          >
            {contact}
          </Button>
        </Main>

        <LangButtonSpace />
      </ViewWrap>
    </>
  );
}
