import styled from 'styled-components';
import themes from '@8x8/oxygen-theme';
import { HEIGHT_REM } from '../constants';
import { selectBackground, selectTextColor } from '../utils';
const Wrapper = styled.div `
  ${{ ...themes.light.label01 }}
  align-items: stretch;
  background: ${selectBackground};
  border-radius: 9999em;
  color: ${selectTextColor};
  display: inline-flex;
  flex-wrap: nowrap;
  line-height: ${HEIGHT_REM};
  min-width: ${HEIGHT_REM};
  padding-left: ${({ $avatar }) => ($avatar ? '0' : '8px')};
  padding-right: ${({ $action }) => ($action ? '0' : '8px')};
  position: relative;
  white-space: nowrap;
  ${({ $hasError }) => $hasError &&
    `&:after {
      border-radius: 9999em;
      bottom: 0;
      box-shadow: 0 0 0 2px ${themes.light.error01};
      content: '';
      display: block;
      left: 0;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 5;
  }`}
`;
export default Wrapper;
