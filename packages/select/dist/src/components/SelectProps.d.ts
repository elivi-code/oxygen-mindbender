import React, { ForwardedRef } from 'react';
import { AvatarProps } from '@8x8/oxygen-avatar';
import { LabelProps } from '@8x8/oxygen-label';
import { Props, GroupBase } from 'react-select';
import { AsyncProps } from 'react-select/async';
import { type IconProps } from '@8x8/oxygen-icon';
import { SelectTheme } from '../types';
export interface LabelPropsExtended extends Pick<LabelProps, 'action' | 'actionLabel' | 'isRequired' | 'infoBoxText' | 'infoBoxButtonLabel' | 'otherActionProps'> {
    labelValue?: string;
    shouldWrapLabel?: boolean;
}
export interface SelectOption<OptionValue> {
    label: string;
    value?: OptionValue;
    isDisabled?: boolean;
    iconProps?: Partial<AvatarProps>;
}
export type Size = 'default' | 'small' | 'large';
export type IconSet = 'novo' | 'classic';
/**
 * All the custom select props which have default values
 */
export interface DefaultCustomSelectProps {
    testId: string;
    hasIcons: boolean;
    hasCheckbox: boolean;
    multipleSelectMaxRows: number;
    size: Size;
    hasShortMultiDisplay: boolean;
    hasError: boolean;
    inputProps: React.InputHTMLAttributes<HTMLInputElement>;
}
/**
 * All the properties which are forwarded to the custom components.
 * (not used in Select wrapper itself)
 */
export interface CustomSelectProps extends Partial<DefaultCustomSelectProps> {
    iconLeft?: React.ComponentType<IconProps>;
    isReadOnly?: boolean;
    clearIconAriaLabel: React.ReactNode;
}
/**
 * Do not let certain props to be public
 */
type CuratedCustomSelectProps = Omit<CustomSelectProps, 'isReadOnly'>;
type PickAsyncProps<Option, IsAsync, IsMulti extends boolean, Group extends GroupBase<Option>> = IsAsync extends true ? Omit<AsyncProps<Option, IsMulti, Group>, keyof Props> : unknown;
export interface OwnProps<IsAsync extends boolean = boolean> {
    forwardedRef?: ForwardedRef<any>;
    isAsync?: IsAsync;
    isCreatable?: boolean;
    hasSelectableInput?: boolean /** render a text input field if not isMulti */;
    theme?: Partial<SelectTheme> /** override react-select theme prop */;
    loadingMessage?: string /** override react-select loadingMessage */;
}
export type SelectProps<Option, IsAsync extends boolean, IsMulti extends boolean, Group extends GroupBase<Option>> = Omit<Props<Option, IsMulti, Group>, 'theme' | 'loadingMessage'> & PickAsyncProps<Option, IsAsync, IsMulti, Group> & LabelPropsExtended & Partial<CuratedCustomSelectProps> & // re-adding CustomSelectProps as optional
OwnProps<IsAsync>;
export {};
//# sourceMappingURL=SelectProps.d.ts.map