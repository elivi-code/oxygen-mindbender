import React from 'react';
import type { TagProps } from '../types';
type CloseButtonProps = TagProps['actionProps'] & {
    action: TagProps['action'];
    isFocused: TagProps['isFocused'];
    variant: TagProps['variant'];
};
declare const CloseButton: ({ action, isFocused, variant, ...rest }: CloseButtonProps) => React.JSX.Element;
export default CloseButton;
//# sourceMappingURL=CloseButton.d.ts.map