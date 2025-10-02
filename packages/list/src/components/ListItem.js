import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import { withTheme } from '@8x8/oxygen-config';
import { isEnterEvent, isSpaceEvent } from '@8x8/oxygen-utils';

import THEME_NAME from '../constants/themeName';
import ListItemStyled from '../styled/ListItemStyled';

export const ListItem = ({
  children,
  title,
  isDisabled,
  isActive,
  shouldWrapText,
  onClick,
  ...otherProps
}) => {
  function handleClick(e) {
    if (isDisabled) {
      e.preventDefault();
      e.stopPropagation();

      return;
    }

    onClick(e);
  }

  const handleOnKeyDown = ev => {
    if (isEnterEvent(ev) || isSpaceEvent(ev)) {
      handleClick(ev);
    }
  };

  return (
    <ListItemStyled
      tabIndex="0"
      title={title}
      isDisabled={isDisabled}
      isActive={isActive}
      shouldWrapText={shouldWrapText}
      // eslint-disable-next-line react/jsx-no-bind
      onClick={handleClick}
      {...otherProps}
      {...(isDisabled && { 'aria-disabled': true })}
      {...(!isDisabled && { onKeyDown: handleOnKeyDown })}
    >
      {children}
    </ListItemStyled>
  );
};

ListItem.propTypes = {
  /**
   * Rendered text inside list item
   */
  children: PropTypes.node.isRequired,
  /**
   * Add title attribute to list item
   */
  title: PropTypes.string,
  /**
   * Tell when list item is disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Tell when list item is active
   */
  isActive: PropTypes.bool,
  /**
   * Tell when list item should wrap text
   */
  shouldWrapText: PropTypes.bool,
  /**
   * Callback when clicking the item
   */
  onClick: PropTypes.func,
};

ListItem.defaultProps = {
  title: undefined,
  isDisabled: false,
  isActive: false,
  shouldWrapText: false,
  onClick: noop,
};

export default withTheme(ListItem, THEME_NAME);
