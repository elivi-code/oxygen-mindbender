import React from 'react';
import styled from 'styled-components';

import Checkbox, { CheckboxProps } from '@8x8/oxygen-checkbox';

const CheckboxWrapper = styled.div`
  margin: auto;
`;

type CheckboxCellProps = {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (value: boolean) => void;
  isDisabled?: boolean;
  testId?: string;
} & Pick<CheckboxProps<string>, 'inputProps'>;

const CheckboxCell: React.FC<CheckboxCellProps> = ({
  checked,
  indeterminate,
  onChange,
  isDisabled,
  ...rest
}) => {
  return (
    <CheckboxWrapper onClick={event => event.stopPropagation()}>
      <Checkbox
        isDisabled={isDisabled}
        isChecked={checked}
        isIndeterminate={indeterminate}
        onChange={() => onChange(!checked)}
        {...rest}
      />
    </CheckboxWrapper>
  );
};

export { CheckboxCell };
