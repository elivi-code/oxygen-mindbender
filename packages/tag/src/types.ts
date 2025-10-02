import { tagNovo } from '@8x8/oxygen-constants';
import { AvatarProps } from '@8x8/oxygen-avatar';
import { variants } from './constants';

type Variant = keyof typeof variants;

export type Theme = Partial<typeof tagNovo>;

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  action?: React.MouseEventHandler<HTMLDivElement>;
  actionProps?: React.HTMLAttributes<HTMLDivElement>;
  avatar?: Pick<AvatarProps, 'name' | 'src' | 'isGroup'>;
  children?: React.ReactNode;
  hasError?: boolean;
  isFocused?: boolean;
  testId?: string;
  theme?: Partial<Theme>;
  variant?: Variant;
}

export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  $avatar?: TagProps['avatar'];
  $action?: TagProps['action'];
  $hasError?: TagProps['hasError'];
}
