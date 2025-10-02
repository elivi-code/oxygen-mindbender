import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withTheme, withDeprecation } from '@8x8/oxygen-config';
import THEME_NAME from '../constants/themeName';
import { ActionTarget } from '../constants/targets';

import Icon from './Icon';
import Value from './Value';
import Action, { ActionProps } from './Action';
import LabelWrapper from '../styled/LabelWrapper';
import LabelIconWrapper from '../styled/LabelIconWrapper';
import { LabelTheme, showOn } from '../types';

interface Props {
  theme?: LabelTheme;
  testId?: string;
  value?: React.ReactNode;
  action?: ActionProps['action'];
  actionLabel?: string;
  actionTarget?: ActionTarget;
  htmlFor?: string;
  infoBoxText?: React.ReactNode;
  infoBoxShowOn?: keyof typeof showOn;
  infoBoxButtonLabel?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  shouldWrapText?: boolean;
  showTooltipOnOverflow?: boolean;
  otherActionProps?: Record<string, unknown>;
}

export type LabelProps = Props &
  React.PropsWithChildren & {
    theme: LabelTheme;
  };

const Label: React.FC<LabelProps> = props => {
  const propsWithDefault: LabelProps = {
    testId: 'LABEL',
    value: '',
    action: '',
    actionLabel: '',
    infoBoxShowOn: 'hover',
    isDisabled: false,
    isRequired: false,
    shouldWrapText: false,
    showTooltipOnOverflow: true,
    ...props,
  };
  const {
    theme,
    testId,
    children,
    value,
    action,
    actionLabel,
    actionTarget,
    htmlFor,
    infoBoxText,
    infoBoxShowOn,
    infoBoxButtonLabel,
    isRequired,
    isDisabled,
    shouldWrapText,
    showTooltipOnOverflow,
    otherActionProps,
    ...rest
  } = propsWithDefault;

  const showAction = action && actionLabel;

  return (
    <ThemeProvider theme={theme}>
      <LabelWrapper {...rest}>
        <LabelIconWrapper>
          {value && (
            <Value
              testId={testId}
              value={value}
              htmlFor={htmlFor}
              isRequired={isRequired}
              isDisabled={isDisabled}
              shouldWrapText={shouldWrapText}
              showTooltipOnOverflow={showTooltipOnOverflow}
            />
          )}
          {infoBoxText && (
            <Icon
              infoBoxText={infoBoxText}
              infoBoxShowOn={infoBoxShowOn}
              infoBoxButtonLabel={infoBoxButtonLabel}
              theme={theme}
              testId={testId}
            />
          )}
        </LabelIconWrapper>
        {showAction && (
          <Action
            action={action}
            actionTarget={actionTarget}
            testId={testId}
            shouldWrapText={shouldWrapText}
            {...otherActionProps}
          >
            {actionLabel}
          </Action>
        )}
        {children}
      </LabelWrapper>
    </ThemeProvider>
  );
};

export default withTheme(
  withDeprecation(Label, `Label deprecated props: "infoBoxContainer"`),
  THEME_NAME,
);
