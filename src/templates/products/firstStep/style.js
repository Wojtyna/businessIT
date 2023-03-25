import styled from 'styled-components';
import { theme } from '../../../assets/globalStyles';

// PANELS
export const PanelWrap = styled.div`
  padding-top: ${theme.space.xl}rem;
`;
export const PanelTitle = styled.span`
  text-transform: uppercase;
  display: block;
  font-weight: ${theme.font.weight.m};
  color: ${theme.colors.dark2};
`;
export const PanelSubtitle = styled.span`
  display: block;
  color: ${theme.colors.light3};
  font-weight: ${theme.font.weight.m};
`;

// OPTIONS
export const RadioOptionsWrap = styled.div`
  margin-inline: -${theme.space.m}rem;
  margin-top: ${theme.space.xs}rem;
`;
export const ButtonOptionsWrap = styled.div`
  padding-block: ${theme.space.xs}rem;
  margin-inline: -${theme.space.xs}rem;
`;
