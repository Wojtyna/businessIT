import React, { useContext, useState } from 'react';

import { GlobalState } from '../../assets/state/State';
import { ProductsWrap } from './style';
import ContentData from '../../assets/data.json';
import Modal from '../../components/modal';
import HeaderView from './header';
import IntroView from './intro';
import FirstStepView from './firstStep';
import SecondStepView from './secondStep';

export default function ProductsPage({ visible, closePage }) {
  const { state } = useContext(GlobalState);
  const [CurrentRadioType, setCurrentRadioType] = useState('');
  const [ProductsData, setProductsData] = useState([]);
  const [SendDataSuccess, setSendDataSuccess] = useState(false);

  const toggleProduct = (id) => {
    const newProductsData = ProductsData.slice();
    const itemIndex = newProductsData.findIndex((_ev) => _ev.id === id);

    if (itemIndex >= 0) {
      newProductsData.splice(itemIndex, 1);
    } else {
      if (id[0] === '0') {
        newProductsData.push(
          ContentData.translations[
            state.lang
          ].productsPage.firstStep.panels[2].options.find(
            (_ev) => _ev.id === id
          )
        );
      } else {
        newProductsData.push(
          ContentData.translations[
            state.lang
          ].productsPage.firstStep.panels[1].options.find(
            (_ev) => _ev.id === id
          )
        );
      }
    }

    if (CurrentRadioType !== 'own') {
      setCurrentRadioType('own');
    }
    setProductsData(newProductsData);
  };

  const setProductsOptions = (type) => {
    if (type !== 'own') {
      const newProductsData = [];

      ContentData.products[type].forEach((_id) => {
        newProductsData.push(
          ContentData.translations[
            state.lang
          ].productsPage.firstStep.panels[1].options.find(
            (_ev) => _ev.id === _id
          )
        );
      });

      newProductsData.push(
        ...ContentData.translations[state.lang].productsPage.firstStep.panels[2]
          .options
      );

      setProductsData(newProductsData);
    }
    setCurrentRadioType(type);
  };

  const onModalClose = () => {
    closePage();
    if (SendDataSuccess) {
      setSendDataSuccess(false);
    }
    if (CurrentRadioType !== '') {
      setCurrentRadioType('');
    }
    if (ProductsData.length > 0) {
      setProductsData([]);
    }
  };

  const sendFormData = () => {
    // TODO
    setSendDataSuccess(true);
  };

  return (
    <Modal closePage={onModalClose} visible={visible}>
      <ProductsWrap>
        <HeaderView
          content={ContentData.translations[state.lang].productsPage}
        />
        <IntroView
          content={ContentData.translations[state.lang].productsPage.intro}
        />
        <FirstStepView
          content={ContentData.translations[state.lang].productsPage.firstStep}
          toggleProduct={toggleProduct}
          ProductsData={ProductsData}
          setProductsOptions={setProductsOptions}
          CurrentRadioType={CurrentRadioType}
        />
        <SecondStepView
          content={ContentData.translations[state.lang].productsPage.secondStep}
          SendDataSuccess={SendDataSuccess}
          sendFormData={sendFormData}
        />
      </ProductsWrap>
    </Modal>
  );
}
