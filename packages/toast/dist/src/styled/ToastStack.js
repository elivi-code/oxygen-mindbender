import styled from 'styled-components';
import { getTestAttributes } from '@8x8/oxygen-config';
import ToastWrapper from './ToastWrapper';
const ToastStack = styled.div.attrs(() => ({
    ...getTestAttributes('TOAST_STACK'),
})) `
  ${ToastWrapper} {
    margin-bottom: ${({ theme }) => theme.stackMargin};
  }
`;
export default ToastStack;
