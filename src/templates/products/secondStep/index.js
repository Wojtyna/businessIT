import React from 'react';

import { StepView, TitleBg, TitleStyle, TitleWrap } from '../style';
import ContactFormView from '../../contact/formIndex';

export default function SecondStepView({
  content: { stepTitle, inputsTitle, msg, additionalOptions },
  SendDataSuccess,
  sendFormData,
}) {
  return (
    <StepView>
      <TitleWrap>
        <TitleStyle>{stepTitle}</TitleStyle>
        <TitleBg>{stepTitle}</TitleBg>
      </TitleWrap>
      <ContactFormView
        SendDataSuccess={SendDataSuccess}
        sendFormData={sendFormData}
        productsView={{ inputsTitle, msg, additionalOptions }}
      />
    </StepView>
  );
}
