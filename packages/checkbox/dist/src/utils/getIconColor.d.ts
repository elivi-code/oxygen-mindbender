import { CheckboxIconWrapperProps } from '../styled/CheckboxIconWrapperProps';
import { CheckboxTheme } from '../types';
type Props = Partial<CheckboxIconWrapperProps> & {
    theme: CheckboxTheme;
};
export declare const getIconColor: ({ theme, isChecked, isDisabled, isFocused, isHovered, isIndeterminate, }: Props) => string | undefined;
export default getIconColor;
//# sourceMappingURL=getIconColor.d.ts.map