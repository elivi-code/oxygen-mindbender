import styled, { css } from 'styled-components';
import { switchProp, prop } from 'styled-tools';
import { DARK, LIGHT } from '../constants/colorTypes';
const TabsBar = styled.div `
  position: relative;
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  padding: ${({ theme }) => theme.tabsBarPadding};
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.tabsBarBorderRadius};
  border-style: solid;
  border-width: ${({ theme }) => theme.tabsBarBorderTopSize}
    ${({ theme }) => theme.tabsBarBorderRightSize} 0
    ${({ theme }) => theme.tabsBarBorderLeftSize};
  box-sizing: border-box;

  ${props => {
    const { theme } = props;
    if (theme.isClassic) {
        return css `
        border-color: ${switchProp(prop('color', LIGHT), {
            [DARK]: theme.tabsBarBorderColorDark,
            [LIGHT]: theme.tabsBarBorderColorLight,
        })};
        background: ${switchProp(prop('color', LIGHT), {
            [DARK]: theme.tabsBarBackgroundDark,
            [LIGHT]: theme.tabsBarBackgroundLight,
        })};

        &::after {
          background-color: ${switchProp(prop('color', LIGHT), {
            [DARK]: theme.tabsBarBorderColorDark,
            [LIGHT]: theme.tabsBarBorderColorLight,
        })};
        }
      `;
    }
    return css `
      border-color: ${theme.tabsBarBorderColor};
      background: ${theme.tabsBarBackground};

      &::after {
        background: ${theme.tabsBarBorderColor};
      }
    `;
}};

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${({ theme }) => theme.tabsBarBorderBottomSize};

    z-index: 1;
  }
`;
export default TabsBar;
