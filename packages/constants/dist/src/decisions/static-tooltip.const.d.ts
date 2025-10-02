import { FlattenSimpleInterpolation } from 'styled-components';
export interface TooltipTheme {
    animation: string | FlattenSimpleInterpolation;
    backgroundColor: string;
    borderWidth: string;
    borderStyle: string;
    borderColor: string;
    borderRadius: string;
    boxShadow: string;
    color: string;
    fontSize: string;
    fontFamily: string;
    lineHeight: string;
    fontWeight: string | number;
    margin: string;
    maxHeight: string;
    maxWidth: string;
    padding: string;
    zIndex: number;
    letterSpacing: string;
    textAlign: string;
    arrowSize: string;
    arrowBorderRadius: string;
    arrowMarginOffset: string;
    enableArrow: boolean;
}
declare const staticTooltip: TooltipTheme;
declare const staticTooltipNovo: TooltipTheme;
declare const staticTooltipNovoDark: TooltipTheme;
declare const staticTooltipNeoLight: TooltipTheme;
declare const staticTooltipNeoDark: TooltipTheme;
export { staticTooltip, staticTooltipNovo, staticTooltipNovoDark, staticTooltipNeoLight, staticTooltipNeoDark, };
//# sourceMappingURL=static-tooltip.const.d.ts.map