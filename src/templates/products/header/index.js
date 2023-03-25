import React from 'react';
import styled from 'styled-components';

import { CONSTANS, theme } from '../../../assets/globalStyles';

const ViewWrap = styled.div`
  padding-top: ${CONSTANS.CLOSE_BUTTON_LENGTH}rem;
  text-align: center;
`;
const TitleStyle = styled.h2`
  font-weight: ${theme.font.weight.l};
  text-transform: uppercase;
`;

export default function HeaderView({ content: { pageTitle } }) {
  return (
    <ViewWrap>
      <TitleStyle>{pageTitle}</TitleStyle>
    </ViewWrap>
  );
}
