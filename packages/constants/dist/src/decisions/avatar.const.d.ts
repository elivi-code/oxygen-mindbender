export interface AvatarTheme {
    size3xsmall: string;
    size2xsmall: string;
    sizeXsmall: string;
    sizeSmall: string;
    sizeMedium: string;
    sizeLarge: string;
    sizeXlarge: string;
    size2xlarge: string;
    size3xlarge: string;
    font3xsmall: string;
    font2xsmall: string;
    fontXsmall: string;
    fontSmall: string;
    fontMedium: string;
    fontLarge: string;
    fontXlarge: string;
    font2xlarge: string;
    font3xlarge: string;
    icon3xsmall: number;
    icon2xsmall: number;
    iconXsmall: number;
    iconSmall: number;
    iconMedium: number;
    iconLarge: number;
    iconXlarge: number;
    icon2xlarge: number;
    icon3xlarge: number;
    avatarBackgroundColor: string;
    borderColor: string;
    initialsColor: string;
    initialsFontFamily: string;
    /**
     * @deprecated
     */
    placeholderIconColor: string;
    editOverlayColor: string;
    editIconColor: string;
    editIconSmallSize: string;
    editIconLargeSize: string;
    /**
     * @deprecated
     */
    hoverOverlayColor?: string;
    focusBorderColor?: string;
    innerBorderColor?: string;
    iconSet?: 'novo';
}
declare const avatar: AvatarTheme;
declare const avatarNovo: AvatarTheme;
declare const avatarNovoDark: AvatarTheme;
declare const avatarNeoLight: AvatarTheme;
declare const avatarNeoDark: AvatarTheme;
/**
 * @deprecated Please use the `avatarSize` object directly from the Avatar package: import { avatarSize } from '@8x8/oxygen-avatar';
 */
declare const avatarSize: {
    readonly size3xsmall: "3xsmall";
    readonly size2xsmall: "2xsmall";
    readonly sizeXsmall: "xsmall";
    readonly sizeSmall: "small";
    readonly sizeMedium: "medium";
    readonly sizeLarge: "large";
    readonly sizeXlarge: "xlarge";
    readonly size2xlarge: "2xlarge";
    readonly size3xlarge: "3xlarge";
};
/**
 * @deprecated Please use the `avatarUserStatus` object directly from the Avatar package: import { avatarUserStatus } from '@8x8/oxygen-avatar';
 */
declare const avatarUserStatus: {
    readonly available: "available";
    readonly away: "away";
    readonly busy: "busy";
    readonly doNotDisturb: "doNotDisturb";
    readonly onBreak: "onBreak";
    readonly onCall: "onCall";
    readonly onDirectCall: "onDirectCall";
    readonly offline: "offline";
    readonly workingOffline: "workingOffline";
    readonly wrapUp: "wrapUp";
};
export { avatar, avatarUserStatus, avatarSize, avatarNovo, avatarNovoDark, avatarNeoLight, avatarNeoDark, };
//# sourceMappingURL=avatar.const.d.ts.map