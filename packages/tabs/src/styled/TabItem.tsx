import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { switchProp, prop } from 'styled-tools';

import { DARK, LIGHT } from '../constants/colorTypes';

import type { TabProps } from '../types';

function getColors(props: TabProps) {
  const { isActive, isDisabled, theme } = props;

  if (isActive) {
    if (theme.isClassic) {
      return css`
        color: ${switchProp(prop('color', LIGHT), {
          [DARK]: theme.tabTextColorDarkActive,
          [LIGHT]: theme.tabTextColorLightActive,
        })};
        border-color: ${switchProp(prop('color', LIGHT), {
          [DARK]: theme.tabBorderColorDarkActive,
          [LIGHT]: theme.tabBorderColorLightActive,
        })};
        background: ${switchProp(prop('color', LIGHT), {
          [DARK]: theme.tabBackgroundDarkActive,
          [LIGHT]: theme.tabBackgroundLightActive,
        })};

        &::after {
          background: ${switchProp(prop('color', LIGHT), {
            [DARK]: theme.tabBorderColorDarkActive,
            [LIGHT]: theme.tabBorderColorLightActive,
          })};
        }
      `;
    }

    return css`
      color: ${theme.textColorActive};
      border-color: ${theme.tabBorderColorActive};
      background: ${theme.tabBackgroundActive};

      &::after {
        background: ${theme.tabBorderColorActive};
      }
    `;
  }

  if (isDisabled) {
    if (theme.isClassic) {
      return css`
        color: ${switchProp(prop('color', LIGHT), {
          [DARK]: theme.tabTextColorDarkDisabled,
          [LIGHT]: theme.tabTextColorLightDisabled,
        })};
        border-color: ${switchProp(prop('color', LIGHT), {
          [DARK]: theme.tabBorderColorDarkDisabled,
          [LIGHT]: theme.tabBorderColorLightDisabled,
        })};
        background: ${switchProp(prop('color', LIGHT), {
          [DARK]: theme.tabBackgroundDarkDisabled,
          [LIGHT]: theme.tabBackgroundLightDisabled,
        })};

        &::after {
          background: ${switchProp(prop('color', LIGHT), {
            [DARK]: theme.tabBorderColorDarkDisabled,
            [LIGHT]: theme.tabBorderColorLightDisabled,
          })};
        }
      `;
    }

    return css`
      color: ${theme.textColorDisabled};
      border-color: ${theme.tabBorderColorDisabled};
      background: ${theme.tabBackgroundDisabled};

      &::after {
        background: ${theme.tabBorderColorDisabled};
      }
    `;
  }

  if (theme.isClassic) {
    return css`
      color: ${switchProp(prop('color', LIGHT), {
        [DARK]: theme.tabTextColorDark,
        [LIGHT]: theme.tabTextColorLight,
      })};
      border-color: ${switchProp(prop('color', LIGHT), {
        [DARK]: theme.tabBorderColorDark,
        [LIGHT]: theme.tabBorderColorLight,
      })};
      background: ${switchProp(prop('color', LIGHT), {
        [DARK]: theme.tabBackgroundDark,
        [LIGHT]: theme.tabBackgroundLight,
      })};

      &::after {
        background: ${switchProp(prop('color', LIGHT), {
          [DARK]: theme.tabBorderColorDark,
          [LIGHT]: theme.tabBorderColorLight,
        })};
      }

      &:hover,
      &:focus {
        color: ${switchProp(prop('color', LIGHT), {
          [DARK]: theme.tabTextColorDarkHover,
          [LIGHT]: theme.tabTextColorLightHover,
        })};
        border-color: ${switchProp(prop('color', LIGHT), {
          [DARK]: theme.tabBorderColorDarkHover,
          [LIGHT]: theme.tabBorderColorLightHover,
        })};
        background: ${switchProp(prop('color', LIGHT), {
          [DARK]: theme.tabBackgroundDarkHover,
          [LIGHT]: theme.tabBackgroundLightHover,
        })};

        &::after {
          background: ${switchProp(prop('color', LIGHT), {
            [DARK]: theme.tabBorderColorDarkHover,
            [LIGHT]: theme.tabBorderColorLightHover,
          })};
        }
      }
    `;
  }

  return css`
    color: ${theme.textColor};
    border-color: ${theme.tabBorderColor};
    background: ${theme.tabBackground};

    &::after {
      background: ${theme.tabBorderColor};
    }

    &:hover {
      color: ${theme.textColorHover};
      border-color: ${theme.tabBorderColorHover};
      background: ${theme.tabBackgroundHover};

      &::after {
        background: ${theme.tabBorderColorHover};
      }
    }

    &:focus-visible {
      color: ${theme.textColorFocus};
      background: ${theme.tabBackgroundHover};
    }
  `;
}

function getStretchedStyles(props: TabProps) {
  const { isStretched } = props;

  if (isStretched) {
    return css`
      align-items: stretch;
      width: 100%;
    `;
  }

  return css`
    flex: none;
    width: auto;
  `;
}

const TabItem = styled.button.attrs<TabProps>(props => ({
  disabled: props.isDisabled,
  'aria-selected': props.isActive,
  type: props.type,
}))`
  ${({ theme, isActive }: TabProps) => {
    return css`
      font-family: ${isActive ? theme.selectedFontFamily : theme.fontFamily};
      font-size: ${isActive ? theme.selectedFontSize : theme.fontSize};
      font-weight: ${isActive ? theme.selectedFontWeight : theme.fontWeight};
      line-height: ${isActive ? theme.selectedLineHeight : theme.lineHeight};
      letter-spacing: ${isActive
        ? theme.selectedLetterSpacing
        : theme.letterSpacing};
    `;
  }}
  position: relative;
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.tabGap};
  height: ${({ theme }) => `calc(${theme.tabHeight} - ${theme.tabGap})`};
  max-width: ${({ theme }) => theme.tabMaxWidth};
  min-width: ${({ theme }) => theme.tabMinWidth};
  padding: ${({ theme }) => theme.tabPadding};
  border-radius: ${({ theme }) => theme.tabBorderRadius};
  border-width: ${({ theme }) => theme.tabBorderTopSize}
    ${({ theme }) => theme.tabBorderRightSize} 0
    ${({ theme }) => theme.tabBorderLeftSize};
  border-style: solid;
  box-sizing: border-box;
  cursor: ${props => {
    if (props.isActive) {
      return 'pointer';
    }

    if (props.isDisabled) {
      return 'not-allowed';
    }

    return 'default';
  }};

  transition-property: border-color, color, background, box-shadow;
  transition-duration: ${({ theme }) => theme.tabTransitionTime};
  transition-timing-function: ease-in;

  ${props => getColors(props)};
  ${props => getStretchedStyles(props)}

  overflow-x: clip;

  &:hover {
    outline: none;
  }

  &:focus-visible {
    outline: ${({ theme }) => theme.tabBorderSizeFocus} solid
      ${({ theme }) => theme.tabBorderColorFocus};
    outline-offset: -${({ theme }) => theme.tabBorderSizeFocus};
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -${({ theme }) => theme.tabGap};
    left: 0;
    width: 100%;
    height: ${({ theme }) => theme.tabBorderBottomSize};
    transition: background ${({ theme }) => theme.tabTransitionTime} ease-in;
    z-index: 2;
  }
`;

TabItem.propTypes = {
  /**
   * Button type
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /**
   * Disabled state for button
   */
  isDisabled: PropTypes.bool,
};

TabItem.defaultProps = {
  type: 'button',
  isDisabled: false,
};

export default TabItem;
