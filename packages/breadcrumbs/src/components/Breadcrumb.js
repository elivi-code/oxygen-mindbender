import React from 'react';
import PropTypes from 'prop-types';

import TextLink from '@8x8/oxygen-text-link';
import { withTheme } from '@8x8/oxygen-config';

import { THEME_NAME } from '../constants/themeName';
import * as Target from '../constants/targets';

const Breadcrumb = ({
  theme,
  children,
  href,
  title,
  target,
  isActive,
  onClick,
  ...otherProps
}) => (
  <TextLink
    theme={theme.textLink}
    href={href}
    target={target}
    title={title}
    isDisabled={isActive}
    onClick={onClick}
    {...otherProps}
  >
    {children}
  </TextLink>
);

Breadcrumb.propTypes = {
  /**
   * Breadcrumbs theme
   */
  theme: PropTypes.object,
  /**
   * Renders children element
   */
  children: PropTypes.node.isRequired,
  /**
   * The url or path which the breadcrumb should act as a link to
   */
  href: PropTypes.string,
  /**
   * Shows HTML title text
   */
  title: PropTypes.string,
  /**
   * The target of the link
   */
  target: PropTypes.oneOf(Object.values(Target)),
  /**
   * Tell when breadcrumb is active. Usually is the last element
   */
  isActive: PropTypes.bool,
  /**
   * Handler to be called on click
   */
  onClick: PropTypes.func,
};

Breadcrumb.defaultProps = {
  href: undefined,
  title: undefined,
  target: Target.SELF,
  isActive: false,
  onClick: undefined,
};

export default withTheme(Breadcrumb, THEME_NAME);
