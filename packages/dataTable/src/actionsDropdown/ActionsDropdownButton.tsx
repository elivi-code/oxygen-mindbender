import React, {
  forwardRef,
  MouseEventHandler,
  useCallback,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

import Button, { ButtonProps, buttonSize } from '@8x8/oxygen-button';
import { ArrowUpIcon, ArrowDownIcon } from '@8x8/oxygen-icon';

import { ActionProps } from './types';
import { ActionsDropdown } from './ActionsDropdown';

const StyledArrowUpIcon = styled(ArrowUpIcon)`
  fill: currentcolor;
`;
const StyledArrowDownIcon = styled(ArrowDownIcon)`
  fill: currentcolor;
`;

const DropdownPortalNode = styled.div`
  position: fixed;
  z-index: 70;
`;

const iconSizeMap: Record<keyof typeof buttonSize, number> = {
  small: 16,
  medium: 20,
  large: 24,
  big: 24,
};

type Props = ButtonProps & { actions: ActionProps[] };

// TODO: if / when DropdownButton from oxygen button supports variants we can replace this implementation with that component
// right now it only has one variant
const ActionsDropdownButton = forwardRef<React.FC<Props>, Props>(
  (
    { actions, onClick, children, size = buttonSize.medium, testId, ...rest },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const portalTargetRef = useRef(null);
    const onButtonClick: MouseEventHandler<HTMLButtonElement> = useCallback(
      e => {
        onClick?.(e);
        setIsOpen(value => !value);
      },
      [onClick],
    );
    const iconSize = iconSizeMap[size];

    return (
      <>
        <ActionsDropdown
          actions={actions}
          portalTargetRef={portalTargetRef}
          testId={testId}
        >
          <Button
            {...rest}
            testId={testId && `${testId}_BUTTON`}
            size={size}
            onClick={onButtonClick}
            ref={ref}
          >
            {children}
            {isOpen ? (
              <StyledArrowUpIcon size={iconSize} />
            ) : (
              <StyledArrowDownIcon size={iconSize} />
            )}
          </Button>
        </ActionsDropdown>
        <DropdownPortalNode ref={portalTargetRef} />
      </>
    );
  },
);

ActionsDropdownButton.displayName = 'ActionsDropdownButton';

export { ActionsDropdownButton };
