import styled from 'styled-components';

import { getSize } from './utils/getSize';
import { getColor } from './utils/getColor';
import { Size } from '../constants/size';
import { Status } from '../constants/status';

export interface Props {
  $size: Size;
  $status: Status;
}

const UserStatusWrapper = styled.div<Props>`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  ${getColor}
  ${getSize}
`;

export default UserStatusWrapper;
