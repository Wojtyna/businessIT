import React, { useContext, useEffect, useRef, useState } from 'react';

import { GlobalState } from '../../assets/state/State';
import { ProductsWrap } from './style';
import ContentData from '../../assets/translates.json';
import Modal from '../../components/modal';
import HeaderView from './header';
import IntroView from './intro';
import FirstStepView from './firstStep';
import SecondStepView from './secondStep';

export default function ProductsPage({ visible, closePage }) {
  const { state } = useContext(GlobalState);
  const ProductsFormData = useRef({
    products: [],
    additionalMsg: '',
  });
  const [StateData, setStateData] = useState({
    SendDataSuccess: false,
    CurrentStep: 0,
  });
  const { SendDataSuccess, CurrentStep } = StateData;

  const setSendDataSuccess = (_ev) => {
    setStateData((prev) => ({ ...prev, SendDataSuccess: _ev }));
  };

  const setCurrentStep = (_ev) => {
    setStateData((prev) => ({ ...prev, CurrentStep: _ev }));
  };

  const setPrevStep = () => {
    setCurrentStep(CurrentStep - 1);
  };

  const setProductsData = (_ev) => {
    ProductsFormData.current.products = _ev;
  };

  const onModalClose = () => {
    closePage();
    if (SendDataSuccess) {
      setSendDataSuccess(false);
    }
    if (CurrentStep !== 0) {
      setCurrentStep(0);
    }
  };

  const sendFormData = (contactFormData) => {
    // TODO
    // console.log({ ...contactFormData, options: ProductsFormData.current });
    setSendDataSuccess(true);
  };

  useEffect(() => {
    if (visible) {
      const scrollView = document.getElementById('MODAL_SCROLL_VIEW');
      scrollView.scrollTo(0, 0);
    }
  }, [StateData.CurrentStep]);

  return (
    <Modal
      closePage={onModalClose}
      visible={visible}
      backIcon={{
        onClick: setPrevStep,
        visible: !SendDataSuccess && CurrentStep > 0,
      }}
    >
      <ProductsWrap>
        <HeaderView
          content={ContentData.translations[state.lang].productsPage}
        />
        <IntroView
          content={ContentData.translations[state.lang].productsPage.intro}
          setCurrentStep={setCurrentStep}
          CurrentStep={CurrentStep}
        />
        <FirstStepView
          content={ContentData.translations[state.lang].productsPage.firstStep}
          setProducts={setProductsData}
          setCurrentStep={setCurrentStep}
          CurrentStep={CurrentStep}
          nextStep={
            ContentData.translations[state.lang].productsPage.secondStep
              .stepTitle
          }
          ProductsFormData={ProductsFormData}
        />
        <SecondStepView
          content={ContentData.translations[state.lang].productsPage.secondStep}
          SendDataSuccess={SendDataSuccess}
          sendFormData={sendFormData}
          CurrentStep={CurrentStep}
        />
      </ProductsWrap>
    </Modal>
  );
}
