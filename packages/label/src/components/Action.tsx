import React, { MouseEvent, PropsWithChildren } from 'react';
import isFunction from 'lodash.isfunction';
import { getTestAttributes } from '@8x8/oxygen-config';

import ActionText from '../styled/ActionText';
import renderTitle from '../utils/renderTitle';

import { ActionTarget } from '../constants/targets';

export interface ActionProps {
  action?: ((event: MouseEvent) => void) | string;
  actionTarget?: ActionTarget;
  isDisabled?: boolean;
  shouldWrapText?: boolean;
  testId?: string;
}

const Action: React.FC<PropsWithChildren<ActionProps>> = props => {
  const {
    action,
    actionTarget = '_self',
    isDisabled = false,
    shouldWrapText = false,
    testId = 'LABEL',
    children,
  } = props;

  const handleOnClick = (event: MouseEvent) => {
    if (isDisabled) {
      event.preventDefault();

      return;
    }

    if (isFunction(action)) {
      event.preventDefault();
      action(event);
    }
  };

  return (
    <ActionText
      tabIndex={0}
      as={isFunction(action) ? 'button' : undefined}
      type={isFunction(action) ? 'button' : undefined}
      aria-disabled={isDisabled}
      {...getTestAttributes(`${testId}_ACTION`)}
      {...(actionTarget && { target: `${actionTarget}` })}
      {...{ [isFunction(action) ? 'onClick' : 'href']: action }}
      title={renderTitle(children)}
      isDisabled={isDisabled}
      shouldWrapText={shouldWrapText}
      onClick={handleOnClick}
    >
      {children}
    </ActionText>
  );
};

export default Action;
