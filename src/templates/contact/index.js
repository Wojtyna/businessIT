import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';

import { theme } from '../../assets/globalStyles';
import Modal from '../../components/modal';
import ContentData from '../../assets/data.json';
import { GlobalState } from '../../assets/state/State';
import ManualView from './manualView';
import ContactFormView from './formIndex';

const ContactWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  max-width: 35rem;
  margin-inline: auto;

  @media ${theme.windowSize.mid} {
    flex-direction: row;
    max-width: none;
  }
`;

export default function ContactPage({ visible, closePage }) {
  const { state } = useContext(GlobalState);
  const defaultFormData = {
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
  const [SendDataSuccess, setSendDataSuccess] = useState(false);

  const tempClosePage = () => {
    closePage();
    if (SendDataSuccess) {
      setSendDataSuccess(false);
    }
    ContactFormData.current = defaultFormData;
  };

  const setContactFormData = (type, value) => {
    ContactFormData.current[type] = value;
  };

  const sendFormData = () => {
    // TODO
    setSendDataSuccess(true);
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
        sendFormData();
      }
    }
  };

  return (
    <Modal closePage={tempClosePage} visible={visible}>
      <ContactWrap>
        <ManualView
          content={
            ContentData.translations[state.lang].contactPage.manualContactPanel
          }
        />
        <ContactFormView
          content={ContentData.translations[state.lang].contactPage}
          setContactFormData={setContactFormData}
          onSubmit={onSubmit}
          isError={InvalidForm}
          showSuccessInfo={SendDataSuccess}
        />
      </ContactWrap>
    </Modal>
  );
}
