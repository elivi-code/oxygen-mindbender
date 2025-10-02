import styled from 'styled-components';
import RadioContainer from './RadioContainer';

const getFlexDirection = isHorizontal => (isHorizontal ? 'row' : 'column');

const getMargin = (isHorizontal, theme) =>
  isHorizontal
    ? `margin-left: ${theme.horizontalGroupMargin}`
    : `margin-top: ${theme.verticalGroupMargin}`;

const RadioGroupWrapper = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: ${({ isHorizontal }) => getFlexDirection(isHorizontal)};
  ${RadioContainer} ~ ${RadioContainer} {
    ${props => getMargin(props.isHorizontal, props.theme)}
  }
  align-items: start;
`;

export default RadioGroupWrapper;
