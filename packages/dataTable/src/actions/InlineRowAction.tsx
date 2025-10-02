import React from 'react';
import Tooltip from '@8x8/oxygen-tooltip';
import { ActionProps } from '../actionsDropdown/types';
import { StyledIconButton } from './styled';

const InlineRowAction: React.FC<ActionProps> = ({
  label,
  onClick,
  disabled,
  icon,
  testId,
}) => {
  const Icon = (
    <StyledIconButton
      isDisabled={disabled?.isDisabled}
      title={disabled?.isDisabled ? undefined : label}
      onClick={onClick}
      testId={testId && `${testId}-iconButton`}
    >
      {icon}
    </StyledIconButton>
  );

  return disabled?.isDisabled ? (
    <Tooltip title={disabled.reason}>{Icon}</Tooltip>
  ) : (
    Icon
  );
};

export { InlineRowAction };
