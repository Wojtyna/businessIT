import React, { useContext, useState } from 'react';
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
  const [SendDataSuccess, setSendDataSuccess] = useState(false);

  const onModalClose = () => {
    if (SendDataSuccess) {
      setSendDataSuccess(false);
    }
    closePage();
  };

  const sendFormData = () => {
    // TODO
    setSendDataSuccess(true);
  };

  return (
    <Modal closePage={onModalClose} visible={visible}>
      <ContactWrap>
        <ManualView
          content={
            ContentData.translations[state.lang].contactPage.manualContactPanel
          }
        />
        <ContactFormView
          SendDataSuccess={SendDataSuccess}
          sendFormData={sendFormData}
        />
      </ContactWrap>
    </Modal>
  );
}
