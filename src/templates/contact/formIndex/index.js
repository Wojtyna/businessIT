import React, { useContext, useRef, useState } from 'react';

import {
  ButtonWrap,
  InputsWrap,
  ProductTitle,
  ViewTitle,
  ViewWrap,
  WarningStyle,
} from './style';
import Input from '../../../components/input';
import Checkbox from '../../../components/checkbox';
import Button from '../../../components/button';
import { theme } from '../../../assets/globalStyles';
import SuccessInfo from '../../../components/successInfo';
import { GlobalState } from '../../../assets/state/State';
import ContentData from '../../../assets/data.json';

export default function ContactFormView({
  SendDataSuccess,
  sendFormData,
  productsView = {
    inputsTitle: '',
    msg: {},
  },
}) {
  const { state } = useContext(GlobalState);
  const { pageTitle, inputs, approvalMsg, sendButton, warning } =
    ContentData.translations[state.lang].contactPage;

  const isProductView = productsView.inputsTitle !== '';
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 767;
  const MARGIN_TOP_CONFIG = {
    marginTop: `${theme.space.m}rem`,
  };
  const WIDTH_CONFIG = {
    width: '100%',
  };
  let defaultFormData = {
    name: '',
    phone: '',
    msg: '',
    approval: false,
  };

  const ContactFormData = useRef(defaultFormData);
  const [InvalidForm, setInvalidForm] = useState({
    phone: false,
    approval: false,
  });

  const setContactFormData = (type, value) => {
    ContactFormData.current[type] = value;
  };

  const onSubmit = () => {
    if (!SendDataSuccess) {
      if (ContactFormData.current.phone === '' && !InvalidForm.phone) {
        setInvalidForm((prev) => ({ ...prev, phone: true }));
      } else if (ContactFormData.current.phone !== '' && InvalidForm.phone) {
        setInvalidForm((prev) => ({ ...prev, phone: false }));
      }

      if (!ContactFormData.current.approval && !InvalidForm.approval) {
        setInvalidForm((prev) => ({ ...prev, approval: true }));
      } else if (ContactFormData.current.approval && InvalidForm.approval) {
        setInvalidForm((prev) => ({ ...prev, approval: false }));
      }

      if (
        ContactFormData.current.phone !== '' &&
        ContactFormData.current.approval
      ) {
        sendFormData(ContactFormData.current);
      }
    }
  };

  const setName = (_ev) => {
    setContactFormData('name', _ev);
  };
  const setPhone = (_ev) => {
    setContactFormData('phone', _ev);
  };
  const setMsg = (_ev) => {
    setContactFormData('msg', _ev);
  };
  const setApproval = (_ev) => {
    setContactFormData('approval', _ev);
  };

  return (
    <ViewWrap productsView={isProductView}>
      {isProductView ? (
        <ProductTitle>{productsView.inputsTitle}</ProductTitle>
      ) : (
        <ViewTitle>{pageTitle}</ViewTitle>
      )}
      <InputsWrap>
        <Input
          placeholder={inputs.name.placeholder}
          title={inputs.name.title}
          setNewValue={setName}
          fullWidth={isMobile || !isProductView}
          style={{
            ...MARGIN_TOP_CONFIG,
            ...WIDTH_CONFIG,
            marginRight: `${theme.space.m}rem`,
          }}
        />
        <Input
          placeholder={inputs.phone.placeholder}
          title={inputs.phone.title}
          type="tel"
          setNewValue={setPhone}
          fullWidth={isMobile || !isProductView}
          maxLength={15}
          warning={InvalidForm.phone}
          style={{ ...MARGIN_TOP_CONFIG, ...WIDTH_CONFIG }}
        />
      </InputsWrap>
      <Input
        type="textarea"
        placeholder={
          isProductView ? productsView.msg.placeholder : inputs.msg.placeholder
        }
        title={isProductView ? productsView.msg.title : inputs.msg.title}
        setNewValue={setMsg}
        fullWidth
        disableResizeTextarea={!isProductView && !isMobile}
        style={{ ...MARGIN_TOP_CONFIG, ...WIDTH_CONFIG }}
      />
      <Checkbox
        setNewValue={setApproval}
        title={approvalMsg}
        warning={InvalidForm.approval}
        style={MARGIN_TOP_CONFIG}
      />
      {SendDataSuccess ? (
        <SuccessInfo />
      ) : (
        <ButtonWrap productsView={isProductView}>
          {(InvalidForm.phone || InvalidForm.approval) && (
            <WarningStyle>{warning}</WarningStyle>
          )}
          <Button
            title={sendButton}
            onClick={onSubmit}
            filled
            style={
              isProductView && !isMobile
                ? { display: 'inline-flex', alignSelf: 'center' }
                : { width: '100%' }
            }
          />
        </ButtonWrap>
      )}
    </ViewWrap>
  );
}
