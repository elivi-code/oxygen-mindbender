import styled from 'styled-components';
import { prop, switchProp } from 'styled-tools';
import { size } from '@8x8/oxygen-constants';

export const ComponentItem = styled.div<{ width?: string }>`
  position: relative;
  color: ${({ theme }) => theme.textColor01};
  font-family: ${({ theme }) => theme.body01.fontFamily};
  font-size: ${switchProp(prop('size', size.default), {
    default: size.default,
    medium: size.medium,
  })};
  width: ${({ width }) => width || '100%'};
  box-sizing: border-box;
  padding: 0 ${size.default2x};
`;

export default ComponentItem;
