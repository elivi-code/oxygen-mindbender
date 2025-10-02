import { InputDecoratorProps } from '../InputDecoratorProps';
export type GetBorderColorProps = Pick<InputDecoratorProps, 'theme' | 'focused' | 'hasError' | 'isReadOnly'> & {
    fixed?: boolean;
    defaultColor?: string;
};
declare const getBorderColor: ({ theme, focused, hasError, isReadOnly, fixed, defaultColor, }: GetBorderColorProps) => string;
export default getBorderColor;
//# sourceMappingURL=getBorderColor.d.ts.map