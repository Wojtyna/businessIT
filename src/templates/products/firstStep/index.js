import React from 'react';
import { theme } from '../../../assets/globalStyles';

import Checkbox from '../../../components/checkbox';
import Button from '../../../components/button';

import {
  ButtonOptionsWrap,
  PanelSubtitle,
  PanelTitle,
  PanelWrap,
  RadioOptionsWrap,
} from './style';
import { TitleBg, TitleStyle, TitleWrap, StepView } from '../style';

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

export default function FirstStepView({
  content: { stepTitle, panels },
  toggleProduct,
  ProductsData,
  setProductsOptions,
  CurrentRadioType,
}) {
  return (
    <StepView>
      <TitleWrap>
        <TitleStyle>{stepTitle}</TitleStyle>
        <TitleBg>{stepTitle}</TitleBg>
      </TitleWrap>
      {panels.map(({ panelTitle, panelSubtitle, options }, index) => (
        <PanelWrap key={`PRODUCTS_SELECTOR_WRAP_ITEM_${index}`}>
          <PanelTitle>{panelTitle}</PanelTitle>
          <PanelSubtitle className="smallFont">{panelSubtitle}</PanelSubtitle>
          {index === 0 ? (
            <RadioOptions
              options={options}
              setProductsOptions={setProductsOptions}
              CurrentRadioType={CurrentRadioType}
            />
          ) : (
            <ButtonOptions
              options={options}
              toggleProduct={toggleProduct}
              ProductsData={ProductsData}
            />
          )}
        </PanelWrap>
      ))}
    </StepView>
  );
}
