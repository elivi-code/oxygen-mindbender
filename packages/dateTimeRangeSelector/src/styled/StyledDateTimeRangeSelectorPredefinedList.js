import styled from 'styled-components';
import { ellipsis } from 'polished';

const getListItemSelectedDisplay = ({ isSelected }) => `
  display: ${isSelected ? 'block' : 'none'}
`;

const PredefinedList = styled.div`
  background: ${({ theme }) => theme.listBackgroundColor};
  border-right: ${({ theme }) =>
    `${theme.listBorderRightSize} solid ${theme.listBorderRightColor}`};
  width: ${({ theme }) => theme.listWidth};
  box-sizing: border-box;
`;

const PredefinedListItem = styled.button`
  all: unset;
  width: 100%;
  font-size: ${({ theme }) => theme.listItemFontSize};
  line-height: ${({ theme }) => theme.listItemLineHeight};
  ${ellipsis()};
  padding: ${({ theme }) =>
    `${theme.listItemPaddingVertical} ${theme.listItemPaddingHorizontal}`};
  box-sizing: border-box;
  overflow: hidden;
  color: ${({ theme }) => theme.listItemColor};
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  position: relative;
  display: block;
  text-align: left;

  &:focus-visible {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.listItemSelectedColor};
  }

  &::after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.listItemSelectedColor};
    width: ${({ theme }) => theme.listItemSelectedWidth};
    top: 0;
    right: 0;
    height: 100%;
    ${getListItemSelectedDisplay};
  }
`;

const PredefinedListInputWrapper = styled.div`
  width: ${({ theme }) => theme.listInputWidth};
  display: inline-flex;
  margin: ${({ theme }) =>
    `${theme.listInputMarginTop} ${theme.listInputMarginRight}
  ${theme.listInputMarginBottom} ${theme.listInputMarginLeft}`};
  text-align: center;
  position: relative;
`;

export { PredefinedList, PredefinedListItem, PredefinedListInputWrapper };
