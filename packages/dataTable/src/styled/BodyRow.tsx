import styled from 'styled-components';
import { getBaseStyles } from './Row';
import { Cell, OutlineWidth } from './Cell';
import {
  StyledRowActions,
  StyledRowActionsPaddingRight,
} from '../actions/RowActions';

interface Props {
  isActive?: boolean;
}

export const BodyRowHeight = 64;

const BodyRow = styled.tr<Props>`
  ${getBaseStyles}
  height: ${BodyRowHeight}px;
  min-width: fit-content;
  background-color: ${props => props.theme.ui06};
  border-bottom: ${props => `1px solid ${props.theme.ui01}`};
  ${({ isActive, theme }) => isActive && `background-color: ${theme.active10};`}

  &:hover {
    background-color: ${props => !props.isActive && props.theme.hover10};

    ${Cell} {
      background-color: ${props => !props.isActive && props.theme.hover10};
    }
  }

  &:focus {
    outline-offset: -2px;
    outline: ${OutlineWidth}px solid ${({ theme }) => theme.focus01} !important;

    ${StyledRowActions} {
      height: calc(100% - ${2 * OutlineWidth}px);
      margin-top: ${OutlineWidth}px;
      margin-right: ${OutlineWidth}px;
      padding-right: ${StyledRowActionsPaddingRight - OutlineWidth}px;
    }
  }
`;

export { BodyRow };
