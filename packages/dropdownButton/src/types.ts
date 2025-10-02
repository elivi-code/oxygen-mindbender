import { type ButtonProps } from '@8x8/oxygen-button';
import { dropdownButtonNovo } from '@8x8/oxygen-constants';

type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

export type Theme = DeepPartial<typeof dropdownButtonNovo>;

export interface CustomCloseHandler {
  target: EventTarget;
  callback: (arg0: Event) => void;
  eventName: string;
  capture: boolean;
}

export const directions = {
  top: 'top',
  right: 'right',
  bottom: 'bottom',
  left: 'left',
  'top-start': 'top-start',
  'top-end': 'top-end',
  'bottom-start': 'bottom-start',
  'bottom-end': 'bottom-end',
  'left-start': 'left-start',
  'left-end': 'left-end',
  'right-start': 'right-start',
  'right-end': 'right-end',
} as const;

export interface DropdownButtonProps extends ButtonProps {
  children: React.ReactNode;
  buttonText: React.ReactNode;
  indicatorIcon?: React.ComponentType | false;
  idealDirection?: keyof typeof directions;
  // Tells if the dropdown should close when the content of the dropdown is clicked
  shouldCloseOnInsideClick?: boolean;
  isDefaultOpen?: boolean;
  isDisabled?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  customCloseHandlers?: CustomCloseHandler[];
  // Invert the icon position within the button
  invertIconPosition?: boolean;
  forwardedRef?: React.MutableRefObject<HTMLButtonElement>;
  /* @deprecated */
  renderInPortal?: boolean;
  theme?: Partial<Theme>;
}
