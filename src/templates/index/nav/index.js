import React, { useContext, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AnimatedLogo from '../../../components/animatedLogo';
import ContentData from '../../../assets/data.json';

import {
  ViewWrap,
  Button,
  ButtonsWrap,
  CompanyName,
  // ContactButtonWrap,
  // ContactImage,
  // ContactTitle,
  // ContactWrap,
  ButtonWrap,
  LangWrap,
  LangButton,
  DisableNavBg,
  TranslateImageStyle,
} from './style';
import { GlobalState } from '../../../assets/state/State';

// import ChatImage from '../../../assets/images/nav/messages.webp';
// import FormImage from '../../../assets/images/nav/sign-up.webp';
import TranslateImage from '../../../assets/images/nav/translate.webp';

gsap.registerPlugin(ScrollTrigger);

// const ContactWindow = ({
//   contactButtons: { chatTitle, formTitle, imageAlt },
//   onChatClick,
//   onFormClick,
// }) => (
//   <ContactWrap id="bottom-nav-contact">
//     <ContactButtonWrap onClick={onChatClick}>
//       <ContactImage src={ChatImage} alt={imageAlt} />
//       <ContactTitle>{chatTitle}</ContactTitle>
//     </ContactButtonWrap>
//     <ContactButtonWrap onClick={onFormClick}>
//       <ContactImage src={FormImage} alt={imageAlt} />
//       <ContactTitle>{formTitle}</ContactTitle>
//     </ContactButtonWrap>
//   </ContactWrap>
// );

const LangWindow = ({ disableWindow }) => {
  const { state, dispatch } = useContext(GlobalState);
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
    disableWindow();
    dispatch({ type: 'CHANGE_LANG', key: newLange });
  };

  return (
    <LangWrap id="bottom-nav-lang">
      {LangButtonsData.map(({ value, title }, index) => (
        <LangButton
          onClick={() => {
            onLangClick(value);
          }}
          key={`NAV_LANG_BUTTON_${index}`}
        >
          {title}
        </LangButton>
      ))}
    </LangWrap>
  );
};

export default function Navigation({
  content: {
    buttons: { products, contact, translateImageAlt },
    // contactButtons,
  },
  showProductsModal,
  showFormModal,
}) {
  const [ActiveWindow, setActiveWindow] = useState('none');
  const activeWindowProps = [
    {
      visibility: 'visible',
      pointerEvents: 'all',
      duration: 0.01,
    },
    {
      transform: 'translate(-50%, 0) scale(1)',
      opacity: 1,
      duration: 0.1,
    },
  ];
  const disableWindowProps = [
    {
      transform: 'translate(-50%, 33%) scale(0.5)',
      opacity: 0,
      duration: 0.1,
    },
    {
      visibility: 'hidden',
      pointerEvents: 'none',
      duration: 0.01,
    },
  ];

  const disableActiveWindow = () => {
    setActiveWindow('none');
    gsap
      .timeline()
      .to(`#bottom-nav-${ActiveWindow}`, disableWindowProps[0])
      .to(`#bottom-nav-${ActiveWindow}`, disableWindowProps[1]);
  };

  const turnOnProductsModal = () => {
    showProductsModal();
  };
  const turnOnFormModal = () => {
    // disableActiveWindow();
    showFormModal();
  };
  // const turnOnChat = () => {
  //   disableActiveWindow();
  //   showChat();
  // };

  const showPanelAnimation = (windowName) => {
    setActiveWindow(ActiveWindow === windowName ? 'none' : windowName);
    gsap
      .timeline()
      .to(
        `#bottom-nav-${windowName}`,
        ActiveWindow === windowName
          ? disableWindowProps[0]
          : activeWindowProps[0]
      )
      .to(
        `#bottom-nav-${windowName}`,
        ActiveWindow === windowName
          ? disableWindowProps[1]
          : activeWindowProps[1]
      );
  };

  useEffect(() => {
    gsap.to('#bottom-nav', {
      ...activeWindowProps[0],
      ...activeWindowProps[1],
      scrollTrigger: {
        scroller: '#wrapper',
        trigger: '#landing-view',
        start: '10%',
        end: '33%',
        toggleActions: 'play play reverse reverse',
      },
    });
  }, []);

  return (
    <>
      {ActiveWindow !== 'none' && (
        <DisableNavBg onClick={disableActiveWindow} />
      )}
      <ViewWrap className="view-inline-space" id="bottom-nav">
        <AnimatedLogo id={2} logoWidth={5.5} />
        <CompanyName className="companyName">
          {ContentData.companyName}
        </CompanyName>
        <ButtonsWrap>
          <Button
            disable={ActiveWindow !== 'none'}
            onClick={() => {
              if (ActiveWindow === 'none') {
                turnOnProductsModal();
              }
            }}
          >
            {products}
          </Button>

          {/* <ButtonWrap>
            <ContactWindow
              onChatClick={turnOnChat}
              onFormClick={turnOnFormModal}
              contactButtons={contactButtons}
            />
            <Button
              disable={ActiveWindow !== 'none' && ActiveWindow !== 'contact'}
              onClick={() => {
                if (ActiveWindow === 'none' || ActiveWindow === 'contact') {
                  showPanelAnimation('contact');
                }
              }}
            >
              {contact}
            </Button>
          </ButtonWrap> */}
          <Button
            disable={ActiveWindow !== 'none'}
            onClick={() => {
              if (ActiveWindow === 'none') {
                turnOnFormModal();
              }
            }}
          >
            {contact}
          </Button>

          <ButtonWrap>
            <LangWindow disableWindow={disableActiveWindow} />
            <Button
              disable={ActiveWindow !== 'none' && ActiveWindow !== 'lang'}
              onClick={() => {
                if (ActiveWindow === 'none' || ActiveWindow === 'lang') {
                  showPanelAnimation('lang');
                }
              }}
            >
              <TranslateImageStyle
                src={TranslateImage}
                alt={translateImageAlt}
              />
            </Button>
          </ButtonWrap>
        </ButtonsWrap>
      </ViewWrap>
    </>
  );
}
