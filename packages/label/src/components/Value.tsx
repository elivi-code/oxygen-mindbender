import React, { PureComponent } from 'react';

import { getTestAttributes } from '@8x8/oxygen-config';
import ValueText from '../styled/ValueText';
import Asterisk from '../styled/Asterisk';

interface ValueProps {
  testId?: string;
  htmlFor?: string;
  value?: React.ReactNode;
  isRequired?: boolean;
  isDisabled?: boolean;
  shouldWrapText?: boolean;
  showTooltipOnOverflow?: boolean;
}

export default class Value extends PureComponent<ValueProps> {
  static defaultProps = {
    testId: 'LABEL',
    value: '',
    isRequired: false,
    isDisabled: false,
    shouldWrapText: false,
    showTooltipOnOverflow: true,
  };

  renderContent = () => {
    const { value, showTooltipOnOverflow, isRequired } = this.props;

    if (showTooltipOnOverflow && typeof value === 'string') {
      return (
        <span title={value}>
          {value}
          {isRequired && <Asterisk aria-hidden="true">*</Asterisk>}
        </span>
      );
    }

    return (
      <>
        {value}
        {isRequired && <Asterisk aria-hidden="true">*</Asterisk>}
      </>
    );
  };

  render() {
    const { htmlFor, isDisabled, shouldWrapText, testId } = this.props;

    return (
      <ValueText
        {...getTestAttributes(`${testId}_VALUE`)}
        htmlFor={htmlFor}
        isDisabled={isDisabled}
        shouldWrapText={shouldWrapText}
      >
        {this.renderContent()}
      </ValueText>
    );
  }
}
