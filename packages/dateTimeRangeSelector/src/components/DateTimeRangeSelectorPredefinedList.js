import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import { getTestAttributes } from '@8x8/oxygen-config';
import Input from '@8x8/oxygen-input';

import {
  PredefinedList,
  PredefinedListItem,
  PredefinedListInputWrapper,
} from '../styled/StyledDateTimeRangeSelectorPredefinedList';
import CUSTOM_RANGE_ID from '../utils/constants';

const getInputValueProperty = id => `inputValue[${id}]`;
const getHasErrorProperty = id => `hasError[${id}]`;

class DateTimeRangeSelectorPredefinedList extends PureComponent {
  constructor(props) {
    super(props);
    const { ranges, selectedRange } = props;
    const initialInputValues = this.getInitialState(ranges, selectedRange);

    this.state = {
      ...initialInputValues,
    };
  }

  getInitialState(ranges, selectedRange) {
    const initialState = {};

    ranges.forEach(range => {
      const { hasArgument, id } = range;

      if (hasArgument) {
        Object.assign(initialState, {
          [getInputValueProperty(id)]:
            id === selectedRange.id && selectedRange.value
              ? `${selectedRange.value}`
              : '',
          [getHasErrorProperty(id)]: false,
        });
      }
    });

    return initialState;
  }

  componentDidUpdate(prevProps) {
    const { selectedRange: { id, value } = {} } = this.props;
    const { selectedRange: { value: previousValue } = {} } = prevProps;

    if (!value || previousValue === value) {
      return;
    }

    this.updateInputValue(value, id);
  }

  onChangePredefinedRangeInputValue = ({ target: { value, name } }) => {
    const {
      onRangeSelect,
      selectedRange: { id },
    } = this.props;
    const { isNaN } = Number;

    const valueNumber = parseInt(value, 10);

    const hasError =
      !value ||
      !valueNumber ||
      isNaN(valueNumber) ||
      valueNumber < 1 ||
      valueNumber > 99;

    this.setState({
      [getInputValueProperty(name)]: `${value}`,
      [getHasErrorProperty(name)]: hasError,
    });

    if (!hasError) {
      onRangeSelect({ id, value: valueNumber });
    }
  };

  updateInputValue = (value, id) => {
    this.setState({
      [getInputValueProperty(id)]: `${value}`,
      [getHasErrorProperty(id)]: false,
    });
  };

  selectRange = ({ id, hasArgument }) => {
    const {
      selectedRange: { id: selectedId },
      onRangeSelect,
    } = this.props;

    const {
      [getInputValueProperty(id)]: currentInputValue,
      [getHasErrorProperty(id)]: hasError,
    } = this.state;

    if (id === selectedId) {
      return;
    }

    let rangeValue;

    if (hasArgument) {
      if (currentInputValue && !hasError) {
        rangeValue = parseInt(currentInputValue, 10);
      } else {
        rangeValue = '1';
      }
    }

    onRangeSelect({ id, value: rangeValue });
  };

  renderListItem = (range, isSelected) => {
    const { displayName, hasArgument, id } = range;

    const {
      theme: {
        listInputHorizontalSpacing,
        listInputMinWidth,
        listInputWidth,
        listInputVerticalSpacing,
      },
      testId,
    } = this.props;

    const listInputTheme = {
      horizontalSpacing: listInputHorizontalSpacing,
      width: listInputWidth,
      minWidth: listInputMinWidth,
      verticalSpacing: listInputVerticalSpacing,
    };

    if (isSelected && hasArgument) {
      const {
        [getInputValueProperty(id)]: currentInputValue,
        [getHasErrorProperty(id)]: hasError,
      } = this.state;
      const { selectedDisplayName } = range;
      const [firstLabel, secondLabel] = selectedDisplayName;

      return (
        <>
          {firstLabel}
          <PredefinedListInputWrapper
            {...getTestAttributes(`${testId}_INPUT_CONTAINER`)}
          >
            <Input
              testId={`${testId}_INPUT`}
              value={currentInputValue}
              name={id}
              maxLength={2}
              theme={listInputTheme}
              onChange={this.onChangePredefinedRangeInputValue}
              hasError={hasError}
              size="small"
            />
          </PredefinedListInputWrapper>
          {secondLabel}
        </>
      );
    }

    return displayName;
  };

  render() {
    const {
      ranges,
      selectedRange,
      testId,
      hideCustomRange,
      customPredefinedRangeLabel,
    } = this.props;

    return (
      <PredefinedList {...getTestAttributes(testId)}>
        {ranges.map(range => {
          const isSelected = `${range.id}` === `${selectedRange.id}`;

          return (
            <PredefinedListItem
              {...getTestAttributes(`${testId}_ITEM`)}
              key={range.id}
              isSelected={isSelected}
              onClick={() => this.selectRange(range)}
              tabIndex={0}
            >
              {this.renderListItem(range, isSelected)}
            </PredefinedListItem>
          );
        })}
        {!hideCustomRange && (
          <PredefinedListItem
            {...getTestAttributes(`${testId}_ITEM`)}
            disabled
            key="Custom"
            tabIndex={0}
            isSelected={selectedRange.id === CUSTOM_RANGE_ID}
          >
            {customPredefinedRangeLabel}
          </PredefinedListItem>
        )}
      </PredefinedList>
    );
  }
}

DateTimeRangeSelectorPredefinedList.propTypes = {
  theme: PropTypes.object,
  ranges: PropTypes.array.isRequired,
  selectedRange: PropTypes.object.isRequired,
  customPredefinedRangeLabel: PropTypes.string.isRequired,
  onRangeSelect: PropTypes.func,
  testId: PropTypes.string,
  hideCustomRange: PropTypes.bool,
};

DateTimeRangeSelectorPredefinedList.defaultProps = {
  onRangeSelect: noop,
  testId: 'DATE_TIME_RANGE_SELECTOR_DROPDOWN_PREDEFINED_LIST',
  hideCustomRange: false,
};

export default DateTimeRangeSelectorPredefinedList;
