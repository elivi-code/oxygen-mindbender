import type { Theme, ToastType } from '../../types';
type getColorProps = {
    type: ToastType;
    theme: Theme;
};
/**
 * TO BE DEPRECATED
 */
declare const getColor: ({ theme, type }: getColorProps) => string;
export default getColor;
//# sourceMappingURL=getColor.d.ts.map