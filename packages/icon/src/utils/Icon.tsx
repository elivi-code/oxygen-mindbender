import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { icon } from '@8x8/oxygen-constants';
import { withTheme } from '@8x8/oxygen-config';

export interface IconProps extends React.HTMLAttributes<SVGElement> {
  active?: boolean;
  children?: React.ReactNode;
  color?: string;
  disabled?: boolean;
  forwardedRef?: React.RefObject<SVGSVGElement>;
  invertColors?: boolean;
  link?: boolean;
  selected?: boolean;
  size?: number;
  theme?: Partial<typeof icon>;
  title?: string;
}

type getIconColor = Pick<
  IconProps,
  | 'active'
  | 'color'
  | 'disabled'
  | 'invertColors'
  | 'link'
  | 'selected'
  | 'theme'
>;

function getIconColor({
  active,
  color,
  disabled,
  invertColors,
  link,
  selected,
  theme,
}: getIconColor) {
  if (color) {
    return `fill: ${color}`;
  }

  if (disabled) {
    return `fill: ${
      invertColors ? theme.disabledInvertColor : theme.disabledColor
    }`;
  }

  if (active) {
    return `fill: ${invertColors ? theme.hoverInvertColor : theme.hoverColor}`;
  }

  if (selected) {
    return `fill: ${
      invertColors ? theme.selectedInvertColor : theme.selectedColor
    }`;
  }

  if (link) {
    return `fill: ${invertColors ? theme.linkInvertColor : theme.linkColor}`;
  }

  return `fill: ${invertColors ? theme.noLinkInvertColor : theme.color}`;
}

const StyledComponent = styled.svg<IconProps>`
  height: ${({ size, theme }) => (size ? `${size}px` : theme.size)};
  width: ${({ size, theme }) => (size ? `${size}px` : theme.size)};
  min-height: ${({ size, theme }) => (size ? `${size}px` : theme.size)};
  min-width: ${({ size, theme }) => (size ? `${size}px` : theme.size)};
  cursor: ${({ link, disabled }) => link && !disabled && 'pointer'};
  user-select: ${({ link }) => (link ? 'none' : 'auto')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  ${getIconColor};

  ${({ theme, invertColors, link }) =>
    link
      ? `
    &:hover {
    ${getIconColor({
      theme,
      invertColors,
      link,
      active: true,
    })};
    }

    &:focus {
    ${getIconColor({
      theme,
      invertColors,
      link,
      active: true,
    })};
    }

    &[disabled] {
    ${getIconColor({
      theme,
      invertColors,
      link,
      disabled: true,
    })};
    }
  `
      : ''}
`;

const Icon: React.FunctionComponent<IconProps> = props => {
  const { children, title, forwardedRef, ...rest } = props;
  const { theme } = rest;

  return (
    <StyledComponent
      role={title ? 'img' : 'presentation'}
      {...rest}
      viewBox={theme.viewBox}
      ref={forwardedRef}
    >
      {title && <title>{title}</title>}
      {children}
    </StyledComponent>
  );
};

Icon.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  color: PropTypes.string,
  invertColors: PropTypes.bool,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  selected: PropTypes.bool,
  size: PropTypes.number,
  title: PropTypes.string,
  theme: PropTypes.object,
};

Icon.defaultProps = {
  active: false,
  children: undefined,
  disabled: false,
  color: null,
  forwardedRef: null,
  invertColors: false,
  link: false,
  selected: false,
  size: null,
  title: undefined,
};

export default withTheme(Icon, 'icon');
