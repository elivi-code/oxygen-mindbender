import styled from 'styled-components';

import SwitchBaseWrapper from './SwitchBaseWrapper';

export interface Props {
  isHorizontal: boolean;
}

const StyledSwitchBaseGroup = styled.fieldset<Props>`
  display: flex;
  flex-direction: ${({ isHorizontal }) => (isHorizontal ? 'row' : 'column')};
  border: none;
  margin: 0;
  padding: 0;
  ${SwitchBaseWrapper} ~ ${SwitchBaseWrapper} {
    ${({ isHorizontal, theme }) =>
      isHorizontal
        ? `margin-left: ${theme.horizontalGroupMargin}`
        : `margin-top: ${theme.verticalGroupMargin}`}
  }
  align-items: start;
`;

export default StyledSwitchBaseGroup;
