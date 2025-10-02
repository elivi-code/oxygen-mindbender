import styled from 'styled-components';
import { Label } from '@8x8/oxygen-storybook-utils';

const ZLabel = styled(Label)<{ position: string; zIndex: number; top: string }>`
  position: ${({ position }) => position};
  z-index: ${({ zIndex }) => zIndex};
  top: ${({ top }) => top};
  border: 3px solid #eeefff;
  padding: 16px;
  background: #fff;
  margin-bottom: 48px;
`;

export default ZLabel;
