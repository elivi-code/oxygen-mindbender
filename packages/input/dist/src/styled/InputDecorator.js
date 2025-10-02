import styled from 'styled-components';
import { ellipsis } from 'polished';
import getFont from './utils/getFont';
import getBorderColor from './utils/getBorderColor';
import getDecoratorBorderRadius from './utils/getDecoratorBorderRadius';
import getDecoratorBackgroundColor from './utils/getDecoratorBackgroundColor';
import getDecoratorBorder from './utils/getDecoratorBorder';
const getDecoratorBorderColor = ({ isRight, theme, ...props }) => {
    if (theme.prefixSuffixInsideInput) {
        return theme.borderColorSemanticBlock;
    }
    if (isRight) {
        return getBorderColor({
            theme,
            defaultColor: theme.borderColorSemanticBlock,
            ...props,
        });
    }
    return theme.borderColorSemanticBlock;
};
const InputDecorator = styled.div `
  align-items: center;
  background-color: ${({ theme, isReadOnly }) => getDecoratorBackgroundColor({ theme, isReadOnly })};
  border: ${({ theme, isReadOnly }) => getDecoratorBorder({ theme, isReadOnly })};
  border-right-color: ${props => getDecoratorBorderColor({ ...props, isRight: Boolean(props.isPrefix) })};
  border-left-color: ${props => getDecoratorBorderColor({ ...props, isRight: !props.isPrefix })};
  box-sizing: border-box;
  color: ${({ theme }) => theme.colorSemanticBlock};
  display: flex;
  padding: 0 ${({ theme }) => theme.prefixSuffixHorizontalSpacing};
  text-align: left;
  transition: border-color ${({ theme }) => theme.borderTransitionTiming};
  transition-timing-function: ease-in-out;
  width: ${({ theme, autoWidth }) => autoWidth ? 'auto' : theme.widthSemanticBlock};
  border-radius: ${({ theme, isSuffix, isPrefix }) => getDecoratorBorderRadius({ theme, isSuffix, isPrefix })};
  & > span {
    ${getFont}
    ${ellipsis()}
  }
`;
InputDecorator.displayName = 'InputDecorator';
export default InputDecorator;
