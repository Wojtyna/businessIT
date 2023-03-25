import React from 'react';

import { StepView, TitleBg, TitleStyle, TitleWrap } from '../style';
import ContactFormView from '../../contact/formIndex';

export default function SecondStepView({
  content: { stepTitle, inputsTitle, textAreaTitle, textAreaPlaceholder },
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
        productsView={{ inputsTitle, textAreaTitle, textAreaPlaceholder }}
      />
    </StepView>
  );
}
