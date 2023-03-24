import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';

import { GlobalState } from '../../assets/state/State';
import { theme } from '../../assets/globalStyles';
import ContentData from '../../assets/data.json';
import Modal from '../../components/modal';

const ProductsWrap = styled.div`
  @media ${theme.windowSize.mid} {
  }
`;

export default function ProductsPage({ visible, closePage }) {
  const { state } = useContext(GlobalState);
  const ProductsCollectData = useRef({
    name: '',
    phone: '',
    msg: '',
    approval: false,
  });
  const [InvalidForm, setInvalidForm] = useState({
    phone: false,
    approval: false,
  });

  const setProductsCollectData = (type, value) => {
    ProductsCollectData.current[type] = value;
  };

  const setToggleInvalid = (type) => {
    setInvalidForm((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const sendFormData = () => {};

  const onSubmit = () => {};

  return (
    <Modal closePage={closePage} visible={visible}>
      <ProductsWrap></ProductsWrap>
    </Modal>
  );
}
