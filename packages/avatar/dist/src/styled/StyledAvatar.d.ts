import { AvatarTheme, AvatarSize, AvatarUserStatus } from '../types';
declare const StyledAvatar: import("styled-components").StyledComponent<"div", any, {
    theme: AvatarTheme;
    hasBorder: boolean;
    hasStatusBorder: boolean;
    isActive: boolean;
    size: AvatarSize | number;
    userStatus: AvatarUserStatus;
}, never>;
declare const EditOverlay: import("styled-components").StyledComponent<"div", any, {
    theme: AvatarTheme;
    size: AvatarSize;
}, never>;
declare const EditOverlayWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
declare const StyledAvatarImage: import("styled-components").StyledComponent<"img", any, {
    theme: AvatarTheme;
    size: AvatarSize | number;
    opacity: number;
}, never>;
declare const UserStatusWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
export { StyledAvatarImage, StyledAvatar, EditOverlay, UserStatusWrapper, EditOverlayWrapper, };
//# sourceMappingURL=StyledAvatar.d.ts.map