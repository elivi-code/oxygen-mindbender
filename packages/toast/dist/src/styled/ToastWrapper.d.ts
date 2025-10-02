/// <reference types="react" />
import type { ToastProps } from '../types';
type ToastWrapperProps = Omit<ToastProps, 'title' | 'description' | 'children' | 'actions' | 'hideCloseControl' | 'onCloseControlClick' | 'theme'>;
declare const ToastWrapper: import("styled-components").StyledComponent<import("react").ComponentType<{
    [key: string]: any;
    children?: any;
    pose?: import("react-pose/lib/components/PoseElement/types").CurrentPose;
    _pose?: import("react-pose/lib/components/PoseElement/types").CurrentPose;
    initialPose?: import("react-pose/lib/components/PoseElement/types").CurrentPose;
    withParent?: boolean;
    onPoseComplete?: (pose: import("react-pose/lib/components/PoseElement/types").CurrentPose) => any;
    onValueChange?: {
        [key: string]: (v: any) => any;
    };
    innerRef?: {
        current: any;
    } | ((el: Element) => any);
} & import("react-pose/lib/components/PoseElement/types").PoseContextProps & import("react").HTMLProps<any>>, import("styled-components").DefaultTheme, ToastWrapperProps, never>;
export default ToastWrapper;
//# sourceMappingURL=ToastWrapper.d.ts.map