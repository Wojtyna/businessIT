import React, { useContext, useState } from 'react';

import { theme } from '../../../assets/globalStyles';
import ContentData from '../../../assets/data.json';
import Checkbox from '../../../components/checkbox';
import Button from '../../../components/button';

import {
  ButtonOptionsWrap,
  InputOptionWrap,
  NextButton,
  PanelSubtitle,
  PanelTitle,
  PanelWrap,
  RadioOptionsWrap,
} from './style';
import { TitleBg, TitleStyle, TitleWrap, StepView } from '../style';
import { GlobalState } from '../../../assets/state/State';
import Input from '../../../components/input';

const RadioOptions = ({ options, setProductsOptions, CurrentRadioType }) => (
  <RadioOptionsWrap>
    {options.map(({ type, title }, index) => (
      <Checkbox
        key={`PRODUCT_FIRST_PNALE_OPTION_ITEM_${index}`}
        setNewValue={() => {
          setProductsOptions(type);
        }}
        title={title}
        CurrentRadio={CurrentRadioType === type}
        radioType
        style={{
          display: 'inline-flex',
          padding: `${theme.space.xs}rem ${theme.space.s}rem`,
        }}
      />
    ))}
  </RadioOptionsWrap>
);
const ButtonOptions = ({ options, toggleProduct, ProductsData }) => (
  <ButtonOptionsWrap>
    {options.map(({ title, id }, index) => (
      <Button
        key={`PRODUCT_SECOND_PNALE_OPTION_ITEM_${index}`}
        onClick={() => {
          toggleProduct(id);
        }}
        title={title}
        active={ProductsData.find((_ev) => _ev.id === id)}
      />
    ))}
  </ButtonOptionsWrap>
);
const InputOption = ({ input: { title, placeholder }, setAdditionalMsg }) => (
  <InputOptionWrap>
    <Input
      type="textarea"
      placeholder={placeholder}
      title={title}
      setNewValue={setAdditionalMsg}
      fullWidth
    />
  </InputOptionWrap>
);

export default function FirstStepView({
  content: { stepTitle, panels },
  setProducts,
  CurrentStep,
  setCurrentStep,
  nextStep,
  ProductsFormData,
}) {
  const { state } = useContext(GlobalState);
  const [StateData, setStateData] = useState({
    ProductsData: [],
    CurrentRadioType: '',
  });
  const { ProductsData, CurrentRadioType } = StateData;

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

    let newStateData = {
      ProductsData: newProductsData,
      CurrentRadioType: CurrentRadioType,
    };

    if (CurrentRadioType !== 'own') {
      newStateData.CurrentRadioType = 'own';
    }
    setProducts(newProductsData);
    setStateData(newStateData);
  };

  const setProductsOptions = (type) => {
    let newStateData = {
      ProductsData: ProductsData,
      CurrentRadioType: type,
    };

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

      newStateData.ProductsData = newProductsData;
    }
    setStateData(newStateData);
  };

  const setAdditionalMsg = (_ev) => {
    ProductsFormData.current.additionalMsg = _ev;
  };

  const onNextStepButton = () => {
    setCurrentStep(2);
  };

  if (CurrentStep !== 1) return <></>;
  return (
    <StepView>
      <TitleWrap>
        <TitleStyle>{stepTitle}</TitleStyle>
        <TitleBg>{stepTitle}</TitleBg>
      </TitleWrap>
      {panels.map(({ panelTitle, panelSubtitle, options, input }, index) => (
        <PanelWrap
          key={`PRODUCTS_SELECTOR_WRAP_ITEM_${index}`}
          firstItem={index === 0}
        >
          <PanelTitle>{panelTitle}</PanelTitle>
          <PanelSubtitle className="smallFont">{panelSubtitle}</PanelSubtitle>
          {index === 0 ? (
            <RadioOptions
              options={options}
              setProductsOptions={setProductsOptions}
              CurrentRadioType={CurrentRadioType}
            />
          ) : index === 3 ? (
            <InputOption input={input} setAdditionalMsg={setAdditionalMsg} />
          ) : (
            <ButtonOptions
              options={options}
              toggleProduct={toggleProduct}
              ProductsData={ProductsData}
            />
          )}
        </PanelWrap>
      ))}
      <Button
        onClick={onNextStepButton}
        title={nextStep}
        filled
        style={NextButton}
      />
    </StepView>
  );
}
