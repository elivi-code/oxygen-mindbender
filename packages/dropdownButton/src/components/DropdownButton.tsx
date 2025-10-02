import React, { useEffect, useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

import { buttonVariant } from '@8x8/oxygen-button';
import { Manager, Reference, Popper } from 'react-popper';
import { withTheme } from '@8x8/oxygen-config';

import DropdownWrapper, { StyledButton } from '../styled/DropdownWrapper';
import DropdownIndicator, { DropdownIcon } from '../styled/DropdownIndicator';
import ScrollWrapper from '../styled/ScrollWrapper';

import type { DropdownButtonProps, CustomCloseHandler } from '../types';
import { directions } from '../types';

const registerEventHandlers = (handlers: CustomCloseHandler[]) => {
  if (!Array.isArray(handlers)) {
    return;
  }

  for (const handler of handlers) {
    handler.target.addEventListener(
      handler.eventName,
      handler.callback,
      handler.capture,
    );
  }
};

const unregisterEventHandlers = (handlers: CustomCloseHandler[]) => {
  if (!Array.isArray(handlers)) {
    return;
  }

  for (const handler of handlers) {
    handler.target.removeEventListener(
      handler.eventName,
      handler.callback,
      handler.capture,
    );
  }
};

const DropdownButton = ({
  theme,
  customCloseHandlers,
  forwardedRef,
  shouldCloseOnInsideClick,
  isDefaultOpen,
  indicatorIcon,
  children,
  buttonText,
  idealDirection,
  isDisabled,
  onOpen,
  onClose,
  invertIconPosition,
  renderInPortal,
  ...otherProps
}: DropdownButtonProps) => {
  const buttonRef = forwardedRef || useRef<HTMLButtonElement | null>();
  const dropdownRef = useRef<HTMLElement | null>();

  // keep track of the first render to not call open/close event
  const prevIsOpen = useRef(isDefaultOpen);

  // local state to keep track of the dropdown open/close state
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  // update the local state when the default (open) state changes
  useEffect(() => {
    setIsOpen(isDefaultOpen);
  }, [isDefaultOpen]);

  // call the registred callbacks when the state changes
  useEffect(() => {
    // skip when state has not changed
    if (prevIsOpen.current === isOpen) {
      return;
    }

    if (isOpen) {
      onOpen();
    } else {
      onClose();
    }
  }, [onOpen, onClose, isOpen]);

  // update the ref to the current state value
  // !! important that this is run after the onOpen & onClose handler calls useEffect above
  useEffect(() => {
    prevIsOpen.current = isOpen;
  }, [isOpen]);

  const handleCloseDropdown = ({ target }: Event) => {
    if (
      buttonRef.current?.contains(target as Node) ||
      buttonRef.current === target ||
      dropdownRef.current?.contains(target as Node) ||
      dropdownRef.current === target
    ) {
      return;
    }
    // eslint-disable-next-line no-use-before-define
    close();
  };

  const closeHandlers = useCallback(
    () => [
      {
        target: window,
        eventName: 'click',
        callback: handleCloseDropdown,
        capture: true,
      },
      {
        target: window,
        eventName: 'contextmenu',
        callback: handleCloseDropdown,
        capture: true,
      },
      ...customCloseHandlers.map(handler => ({
        ...handler,
        callback: handleCloseDropdown,
      })),
    ],
    [customCloseHandlers],
  );

  const close = useCallback(() => {
    unregisterEventHandlers(closeHandlers());
    setIsOpen(false);
  }, [closeHandlers]);

  if (isDefaultOpen) {
    registerEventHandlers(closeHandlers());
  }

  const open = () => {
    registerEventHandlers(closeHandlers());
    setIsOpen(true);
  };

  const onButtonClick = (ev?: React.MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation();

    if (isOpen) {
      close();
    } else {
      open();
    }
  };

  const onButtonKeyDown = (ev: React.KeyboardEvent<HTMLButtonElement>) => {
    if (ev.key === 'Escape') {
      ev.stopPropagation();
      close();
    }
  };

  const onDropdownClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    ev.stopPropagation();

    if (!shouldCloseOnInsideClick) {
      return;
    }

    close();
  };

  const onDropdownKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    if (ev.key === 'Enter') {
      if (!shouldCloseOnInsideClick) {
        return;
      }
      close();
    }

    if (ev.key === 'Escape') {
      ev.preventDefault();
      close();
    }
  };

  const setButtonRef = (node: HTMLButtonElement) => {
    buttonRef.current = node;
  };

  const setDropdownRef = (node: HTMLButtonElement) => {
    dropdownRef.current = node;
  };

  const renderDropdownIndicator = () => {
    const baseProps = {
      left: invertIconPosition,
      isDisabled,
      'aria-hidden': true,
    };

    if (indicatorIcon === undefined) {
      return theme.isClassic ? (
        <DropdownIndicator {...baseProps} />
      ) : (
        <DropdownIcon {...baseProps} />
      );
    }

    // @todo properly mark as deprecated
    if (indicatorIcon) {
      return <DropdownIcon {...baseProps} as={indicatorIcon} />;
    }

    return null;
  };

  const renderDropdown = () => (
    <Popper placement={idealDirection} positionFixed innerRef={setDropdownRef}>
      {({ ref, style }) => (
        <DropdownWrapper
          style={style}
          ref={ref}
          onClick={onDropdownClick}
          onKeyDown={onDropdownKeyDown}
        >
          <ScrollWrapper>{children}</ScrollWrapper>
        </DropdownWrapper>
      )}
    </Popper>
  );

  return (
    <ThemeProvider theme={theme}>
      <Manager>
        <Reference>
          {({ ref }) => (
            <StyledButton
              variant={buttonVariant.secondary}
              isDisabled={isDisabled}
              // @todo test ref forwarding
              ref={(node: HTMLButtonElement) => {
                ref(node);
                setButtonRef(node);
              }}
              onClick={onButtonClick}
              onKeyDown={onButtonKeyDown}
              theme={theme.button}
              invertItems={invertIconPosition}
              {...otherProps}
              aria-expanded={isOpen}
              aria-haspopup
            >
              {buttonText}
              {renderDropdownIndicator()}
            </StyledButton>
          )}
        </Reference>

        {isOpen &&
          (renderInPortal
            ? ReactDOM.createPortal(renderDropdown(), document.body)
            : renderDropdown())}
      </Manager>
    </ThemeProvider>
  );
};

DropdownButton.propTypes = {
  /**
   * DropdownButton theme
   */
  theme: PropTypes.object,
  /**
   * Rendered nodes inside the dropdown
   */
  children: PropTypes.node.isRequired,
  /**
   * Rendered text inside the button
   */
  buttonText: PropTypes.node.isRequired,
  /**
   * Rendered icon inside the button
   * if `undefined` - normal rendering of built-in icon
   * if other `falsey` value it disables the rendering of the indicator icon
   */
  // indicatorIcon: PropTypes.node,
  /**
   * Sets the direction of the flyout
   */
  idealDirection: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left',
    'top-start',
    'top-end',
    'bottom-start',
    'bottom-end',
    'left-start',
    'left-end',
    'right-start',
    'right-end',
  ] as const),
  /**
   * Tells if the dropdown should close when the content of the dropdown
   * is clicked
   */
  shouldCloseOnInsideClick: PropTypes.bool,
  /**
   * Tell when dropdown is open by default
   */
  isDefaultOpen: PropTypes.bool,
  /**
   * Tell when dropdown button is disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Callback after dropdown is open
   */
  onOpen: PropTypes.func,
  /**
   * Callback after dropdown is close
   */
  onClose: PropTypes.func,
  /**
   * Array of events that should trigger the closing of the dropdown
   */
  customCloseHandlers: PropTypes.array,
  /**
   * Invert the icon position within the button
   */
  invertIconPosition: PropTypes.bool,
  /**
   * Renders the floating part in a portal
   * This is a temporary item to allow disabling portal rendering.
   * Will likely be removed in Oxygen 3
   * @deprecated
   */
  renderInPortal: PropTypes.bool,
};

DropdownButton.defaultProps = {
  idealDirection: directions.bottom,
  shouldCloseOnInsideClick: true,
  isDefaultOpen: false,
  isDisabled: false,
  onOpen: () => {},
  onClose: () => {},
  customCloseHandlers: [],
  invertIconPosition: false,
  renderInPortal: true,
};

export default withTheme(DropdownButton, 'dropdownButton');
