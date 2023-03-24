import React from 'react';

import {
  ButtonWrap,
  InputsWrap,
  ViewTitle,
  ViewWrap,
  WarningStyle,
} from './style';
import Input from '../../../components/input';
import Checkbox from '../../../components/checkbox';
import Button from '../../../components/button';
import { theme } from '../../../assets/globalStyles';
import SuccessInfo from '../../../components/successInfo';

export default function ContactFormView({
  content: { pageTitle, inputs, approvalMsg, sendButton, warning },
  setContactFormData,
  isError,
  onSubmit,
  showSuccessInfo,
}) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 767;
  const INPUT_CONFIG = {
    marginTop: `${theme.space.m}rem`,
    width: '100%',
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
    <ViewWrap>
      <ViewTitle>{pageTitle}</ViewTitle>
      <InputsWrap>
        <Input
          placeholder={inputs.name.placeholder}
          title={inputs.name.title}
          setNewValue={setName}
          fullWidth
          style={{ ...INPUT_CONFIG, marginRight: `${theme.space.m}rem` }}
        />
        <Input
          placeholder={inputs.phone.placeholder}
          title={inputs.phone.title}
          type="tel"
          setNewValue={setPhone}
          fullWidth
          maxLength={15}
          warning={isError.phone}
          style={INPUT_CONFIG}
        />
      </InputsWrap>
      <Input
        type="textarea"
        placeholder={inputs.msg.placeholder}
        title={inputs.msg.title}
        setNewValue={setMsg}
        fullWidth
        disableResizeTextarea={!isMobile}
        style={INPUT_CONFIG}
      />
      <Checkbox
        setNewValue={setApproval}
        title={approvalMsg}
        warning={isError.approval}
        style={INPUT_CONFIG}
      />
      <ButtonWrap>
        {(isError.phone || isError.approval) && (
          <WarningStyle>{warning}</WarningStyle>
        )}
        <Button
          title={sendButton}
          onClick={onSubmit}
          filled
          style={{ textTransform: 'uppercase', width: '100%' }}
        />
      </ButtonWrap>
      {showSuccessInfo && <SuccessInfo />}
    </ViewWrap>
  );
}
