import React from 'react';

import { StepView, TitleBg, TitleStyle, TitleWrap } from '../style';
import ContactFormView from '../../contact/formIndex';

export default function SecondStepView({
  content: { stepTitle, inputsTitle, msg },
  SendDataSuccess,
  sendFormData,
  CurrentStep,
}) {
  if (CurrentStep !== 2) return <></>;
  return (
    <StepView>
      <TitleWrap>
        <TitleStyle>{stepTitle}</TitleStyle>
        <TitleBg>{stepTitle}</TitleBg>
      </TitleWrap>
      <ContactFormView
        SendDataSuccess={SendDataSuccess}
        sendFormData={sendFormData}
        productsView={{ inputsTitle, msg }}
      />
    </StepView>
  );
}
