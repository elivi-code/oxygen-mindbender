import { iconSelect } from '@8x8/oxygen-storybook-utils';
import { action } from 'storybook/actions';

const selectOptions = [
  { value: 'One', label: 'Option One' },
  { value: 'Two', label: 'Option Two', iconProps: { name: 'Option Two' } },
  {
    value: 'Three',
    label:
      'Option Three is a really long one what would be clipped. Has a few more words to make it even longer.',
  },
  {
    value: 'Secret',
    label: 'Secret Option',
    iconProps: {
      src: 'https://www.8x8.com/wp-content/uploads/2015/06/8x8-referral-rewards-logo.png',
    },
  },
  { value: 'Disabled', label: 'Disabled Option', isDisabled: true },
];

const selectOptions2 = [
  { value: '1', label: '1' },
  {
    value: '2',
    label: '2',
    iconProps: { name: 'Option Two', userStatus: 'away' },
  },
  {
    value: '3',
    label: '3',
    iconProps: {
      src: 'https://www.8x8.com/wp-content/uploads/2015/06/8x8-referral-rewards-logo.png',
    },
  },
];

const groupedOptions = [
  {
    label: 'First Header',
    options: selectOptions,
  },
  {
    label: 'Second Header',
    options: selectOptions2,
  },
];

export interface ArgsConfig {
  iconLeft: any | undefined;
  size: 'default' | 'small' | 'large';
  action: () => void;
  actionLabel: string;
  infoBoxText: string;
  infoBoxButtonLabel: string;
  labelValue: string;
  placeholder: string;
  hasCheckbox: boolean;
  hasIcons: boolean;
  hasShortMultiDisplay: boolean;
  hasError: boolean;
  isSearchable: boolean;
  isClearable: boolean;
  isDisabled: boolean;
  hasSelectableInput: boolean;
  isMulti: boolean;
  isRequired: boolean;
  shouldWrapLabel: boolean;
  menuIsOpen: boolean | undefined;
  options: Array<{
    label: string;
    options: Array<{ value: string; label: string }>;
  }>;
  testId: string;
  menuPlacement: 'bottom' | 'auto' | 'top' | undefined;
  otherActionProps: {
    isDisabled: boolean;
  };
  inputProps: {
    autoComplete: string;
  };
  multipleSelectMaxRows?: number;
  clearIconAriaLabel?: React.ReactNode;
}

export const argsConfig: ArgsConfig = {
  iconLeft: undefined,
  size: 'default',
  action: action('You have just clicked on label action'),
  actionLabel: 'Action',
  infoBoxText: 'Dropdown info box',
  infoBoxButtonLabel: 'Dropdown info tooltip',
  labelValue: 'Dropdown label',
  placeholder: 'Select...',
  hasCheckbox: false,
  hasIcons: false,
  hasShortMultiDisplay: false,
  hasError: false,
  isSearchable: true,
  isClearable: true,
  isDisabled: false,
  hasSelectableInput: false,
  isMulti: false,
  isRequired: false,
  shouldWrapLabel: false,
  menuIsOpen: undefined,
  options: groupedOptions,
  testId: 'select',
  menuPlacement: undefined,
  otherActionProps: {
    isDisabled: false,
  },
  inputProps: {
    autoComplete: 'off',
  },
};
export const argTypesConfig = {
  iconLeft: iconSelect,
  size: {
    control: {
      type: 'select',
    },
    options: ['default', 'small'],
  },
  menuIsOpen: {
    control: {
      type: 'boolean',
    },
  },
  menuPlacement: {
    control: {
      type: 'select',
    },
    options: ['bottom', 'auto', 'top'],
  },
  inputProps: {
    control: {
      type: 'object',
    },
  },
};
