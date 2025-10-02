import { avatarUserStatus, avatarSize } from '@8x8/oxygen-constants';

const CUSTOM_SIZE = 'custom';
const sizes = Object.values(avatarSize).concat(CUSTOM_SIZE);

export const argsConfig = {
  size: avatarSize.sizeMedium,
  customSize: 60,
  userStatus: undefined,
  isGroup: false,
  name: 'John Doe',
  src: '',
  showEditOverlay: false,
  hasStatusBorder: false,
  hasBorder: false,
  onClick: false,
  isActive: false,
  testId: '',
  'aria-label': 'Avatar John Doe',
};
export const argTypesConfig = {
  size: {
    options: sizes,
    control: { type: 'select' },
  },
  customSize: {
    control: { type: 'range', min: 16, max: 160, step: 1 },
  },
  userStatus: {
    options: Object.keys(avatarUserStatus),
  },
  src: {
    control: {
      type: 'file',
      accept: 'image/*',
    },
  },
  onClick: {
    action: 'onClick',
  },
  onEdit: {
    action: 'onEdit',
  },
};
