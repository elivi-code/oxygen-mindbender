import type { IconButtonProps, IconButtonTheme } from '../types';
type StyledIconButtonProps = Partial<IconButtonProps> & {
    theme: IconButtonTheme;
};
export declare const getIconColor: ({ isActive, isInverted, isDisabled, theme, }: Pick<IconButtonProps, 'isActive' | 'isInverted' | 'isDisabled' | 'theme'>) => string;
export declare const getDefaultBackground: (props: StyledIconButtonProps) => string;
export declare const getHoverBackground: (props: StyledIconButtonProps) => string;
export declare const getActiveBackground: (props: StyledIconButtonProps) => string;
export {};
//# sourceMappingURL=iconButton.utils.d.ts.map