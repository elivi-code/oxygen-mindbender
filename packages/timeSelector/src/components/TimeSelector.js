import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import clone from 'clone';

import setHours from 'date-fns/setHours';
import getHours from 'date-fns/getHours';
import setMinutes from 'date-fns/setMinutes';
import getMinutes from 'date-fns/getMinutes';
import setSeconds from 'date-fns/setSeconds';
import getSeconds from 'date-fns/getSeconds';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import isValid from 'date-fns/isValid';

import {
  flip,
  FloatingFocusManager,
  FloatingPortal,
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useListNavigation,
} from '@floating-ui/react';

import Input from '@8x8/oxygen-input';
import { ClockIcon } from '@8x8/oxygen-icon';
import { keyCode } from '@8x8/oxygen-constants';
import { withTheme, getTestAttributes } from '@8x8/oxygen-config';

import { ThemeProvider } from 'styled-components';
import { TIME_PARSE_FORMATS, getTimeListItems } from './utils';
import * as Styled from '../styled';

function TimeSelector({
  hasError,
  isDisabled,
  isLeftIconVisible,
  timeDisplayFormat,
  size,
  iconLeft,
  placeholder,
  value,
  id,
  testId,
  onChange,
  onOpen,
  onClose,
  theme,
  portalRef,
}) {
  const [inputValue, setInputValue] = useState('');
  const [selectedTimeValue, setSelectedTimeValue] = useState(undefined);
  const [hasInputError, setHasInputError] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const timeListItems = getTimeListItems(timeDisplayFormat);

  const inputRef = useRef(null);
  const listRef = useRef([]);
  const virtualItemRef = useRef(null);

  const inputMaxLength = timeDisplayFormat.length + 10;

  const getTimeListIndex = query => {
    return timeListItems.indexOf(
      timeListItems.find(item => item.formatted.startsWith(query)),
    );
  };

  // Floating-UI's scrollIntoView feature seems to be exclusive to useListNavigation (keyboard).
  // More info: https://floating-ui.com/docs/useListNavigation#scrollitemintoview
  useEffect(() => {
    if (isDropdownVisible) {
      setTimeout(() => {
        document.getElementById(`option_${activeIndex}`)?.scrollIntoView({
          block: 'nearest',
          inline: 'nearest',
        });
      }, 0);
    }
  }, [isDropdownVisible]);

  const { refs, floatingStyles, context } = useFloating({
    open: isDropdownVisible,
    strategy: 'fixed',
    placement: 'bottom-start',
    middleware: [flip()],
    onOpenChange: (isOpen, event) => {
      if (isOpen) {
        const listIndex = getTimeListIndex(event.target.value);

        if (listIndex >= 0) {
          setActiveIndex(listIndex);
        }
      }
      setIsDropdownVisible(isOpen);
    },
  });

  const role = useRole(context, { role: 'listbox' });
  const click = useClick(context, {
    event: 'click',
    keyboardHandlers: false,
  });
  const dismiss = useDismiss(context, {
    ancestorScroll: true,
  });
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    virtual: true,
    virtualItemRef,
    onNavigate: setActiveIndex,
    loop: true,
    focusItemOnOpen: false,
    focusItemOnHover: false,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [click, dismiss, role, listNav],
  );

  const referenceProps = getReferenceProps();

  const formatValue = () => {
    if (!value) {
      return '';
    }

    const { hours = 0, minutes = 0, seconds = 0 } = value;

    return format(
      setHours(
        setMinutes(setSeconds(new Date(), seconds || 0), minutes),
        hours,
      ),
      timeDisplayFormat,
    );
  };

  const parseInputValue = textValue => {
    for (let i = 0; i < TIME_PARSE_FORMATS.length; i += 1) {
      const timeParseFormat = TIME_PARSE_FORMATS[i];
      const result = parse(textValue, timeParseFormat, new Date());

      if (isValid(result)) {
        return result;
      }
    }

    return undefined;
  };

  const revertSelectedValues = () => {
    setInputValue(formatValue());
    setHasInputError(false);
    setSelectedTimeValue(clone(value));
  };

  const onInputValueChange = event => {
    const { value: newInputValue } = event.target;

    setInputValue(newInputValue);

    if (!newInputValue) {
      setHasInputError(false);
      setSelectedTimeValue(undefined);

      return;
    }

    const parsedTimeValue = parseInputValue(newInputValue);

    if (!isValid(parsedTimeValue)) {
      setHasInputError(true);
      setSelectedTimeValue(undefined);

      return;
    }

    setHasInputError(false);
    setSelectedTimeValue({
      hours: getHours(parsedTimeValue),
      minutes: getMinutes(parsedTimeValue),
      seconds: getSeconds(parsedTimeValue),
    });

    const listIndex = getTimeListIndex(newInputValue);

    if (listIndex >= 0) {
      setIsDropdownVisible(true);
      setActiveIndex(listIndex);
    }
  };

  const onInputFocus = event => {
    onOpen();
    referenceProps.onFocus(event);
  };

  const onInputBlur = () => {
    onClose();

    if (!inputValue) {
      onChange(undefined);
      setIsDropdownVisible(false);

      return;
    }

    if (hasInputError) {
      revertSelectedValues();

      return;
    }

    onChange(clone(selectedTimeValue));
  };

  const onDropdownTimeSelect = selectedTime => {
    setHasInputError(false);
    setSelectedTimeValue(clone(selectedTime));
    onChange(selectedTime);
    setIsDropdownVisible(false);
  };

  const onInputKeyDown = event => {
    if (virtualItemRef.current) {
      const listIndex = getTimeListIndex(virtualItemRef.current.textContent);

      if ([keyCode.ARROW_DOWN, keyCode.ARROW_UP].includes(event.keyCode)) {
        setActiveIndex(listIndex);
      }

      if (event.keyCode === keyCode.ENTER) {
        if (activeIndex >= 0) {
          onDropdownTimeSelect(timeListItems[activeIndex].time);
        }
      }
    }

    if (event.keyCode === keyCode.ESCAPE) {
      revertSelectedValues();
    }
    referenceProps.onKeyDown(event);
  };

  useEffect(() => {
    setInputValue(formatValue());
  }, [value, timeDisplayFormat]);

  useEffect(() => {
    setHasInputError(false);
    setSelectedTimeValue(clone(value));
  }, [value]);

  const portalRoot = portalRef?.current ?? document.body;

  return (
    <ThemeProvider theme={theme}>
      <Input
        id={id}
        ref={refs.setReference}
        {...getReferenceProps()}
        value={inputValue}
        maxLength={inputMaxLength}
        placeholder={placeholder}
        size={size}
        iconLeft={isLeftIconVisible ? iconLeft : null}
        hasError={hasInputError || hasError}
        isDisabled={isDisabled}
        autoComplete="off"
        onChange={onInputValueChange}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onKeyDown={onInputKeyDown}
        theme={theme.input}
        inputRef={inputRef}
        {...getTestAttributes(`${testId}_INPUT`)}
      />

      {isDropdownVisible && !hasInputError && !!inputValue && (
        <FloatingPortal preserveTabOrder={false} root={portalRoot}>
          <FloatingFocusManager
            context={context}
            modal={false}
            initialFocus={refs.reference}
          >
            <div
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
              }}
              {...getFloatingProps()}
              tabIndex={-1}
            >
              <Styled.DropdownContainer
                {...getTestAttributes(testId)}
                tabIndex={-1}
              >
                {timeListItems.map(({ time, formatted }, index) => {
                  const isSelected = index === activeIndex;

                  return (
                    <Styled.ListItem
                      id={`option_${index}`}
                      key={formatted}
                      role="option"
                      tabIndex={index === activeIndex ? 0 : -1}
                      aria-selected={index === activeIndex}
                      ref={node => {
                        listRef.current[index] = node;
                      }}
                      {...getItemProps({
                        // Handle pointer select.
                        onClick() {
                          onDropdownTimeSelect(time);
                        },
                      })}
                      {...getTestAttributes(
                        `${testId}_ITEM_${time.hours}_${time.minutes}_${time.seconds}`,
                      )}
                      isSelected={isSelected}
                    >
                      {formatted}
                    </Styled.ListItem>
                  );
                })}
              </Styled.DropdownContainer>
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </ThemeProvider>
  );
}

TimeSelector.propTypes = {
  hasError: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLeftIconVisible: PropTypes.bool,
  timeDisplayFormat: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default']),
  iconLeft: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.elementType,
  ]),
  placeholder: PropTypes.string,
  value: PropTypes.shape({
    hours: PropTypes.number,
    minutes: PropTypes.number,
    seconds: PropTypes.number,
  }),
  id: PropTypes.string,
  testId: PropTypes.string,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  theme: PropTypes.object,
  portalRef: PropTypes.elementType,
};

TimeSelector.defaultProps = {
  hasError: false,
  isDisabled: false,
  isLeftIconVisible: false,
  timeDisplayFormat: 'h:mm a',
  size: 'default',
  iconLeft: ClockIcon,
  placeholder: '',
  value: undefined,
  id: undefined,
  testId: 'TIME_SELECTOR',
  onChange: noop,
  onOpen: noop,
  onClose: noop,
};

export default withTheme(TimeSelector, 'timeSelector');
