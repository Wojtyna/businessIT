import React, { useContext } from 'react';
import styled from 'styled-components';

import { theme } from '../../assets/globalStyles';
import Modal from '../../components/modal';
import ContentData from '../../assets/data.json';
import { GlobalState } from '../../assets/state/State';
import ManualView from './manualView';
import ContactFormView from './formIndex';

const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media ${theme.windowSize.mid} {
    flex-direction: row;
  }
`;

export default function ContactPage({ visible, closePage }) {
  const { state } = useContext(GlobalState);

  return (
    <Modal closePage={closePage} visible={visible}>
      <ContactWrap>
        <ManualView
          content={
            ContentData.translations[state.lang].contactPage.manualContactPanel
          }
        />
        <ContactFormView
          content={ContentData.translations[state.lang].contactPage}
        />
      </ContactWrap>
    </Modal>
  );
}
