import React from 'react';

import {
  CheckfilledIcon,
  CheckboxIcon as CheckboxIconUncheckedNovo,
  IndeterminatefilledIcon,
  CheckboxCheckedIcon,
  CheckboxUncheckedIcon,
  CheckboxIndeterminateIcon,
} from '@8x8/oxygen-icon';

interface IconProps {
  isNovo: boolean;
}

const Checked: React.FC<IconProps> = ({ isNovo, ...rest }) =>
  isNovo ? <CheckfilledIcon {...rest} /> : <CheckboxCheckedIcon {...rest} />;

const Indeterminate: React.FC<IconProps> = ({ isNovo, ...rest }) =>
  isNovo ? (
    <IndeterminatefilledIcon {...rest} />
  ) : (
    <CheckboxIndeterminateIcon {...rest} />
  );

const Unchecked: React.FC<IconProps> = ({ isNovo, ...rest }) =>
  isNovo ? (
    <CheckboxIconUncheckedNovo {...rest} />
  ) : (
    <CheckboxUncheckedIcon {...rest} />
  );

interface CheckboxIconProps extends IconProps {
  isChecked?: boolean;
  isIndeterminate?: boolean;
}

const CheckboxIcon: React.FC<CheckboxIconProps> = ({
  isNovo,
  isChecked,
  isIndeterminate,
}) => {
  const props = {
    isNovo,
    color: 'currentColor',
    role: 'presentation',
  };

  if (isChecked) {
    return <Checked {...props} />;
  }

  if (isIndeterminate) {
    return <Indeterminate {...props} />;
  }

  return <Unchecked {...props} />;
};

export default CheckboxIcon;
