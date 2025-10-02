import styled from 'styled-components';
import { getSize } from './utils/getSize';
import { getColor } from './utils/getColor';
const UserStatusWrapper = styled.div `
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  ${getColor}
  ${getSize}
`;
export default UserStatusWrapper;
