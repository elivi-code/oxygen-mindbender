import type { Theme } from '../../types';
type getTypographyProps = {
    structureType: 'title' | 'description';
    theme: Theme;
};
declare const getTypography: ({ structureType, theme }: getTypographyProps) => {
    fontFamily: string;
    fontSize: string;
    fontWeight: string | number;
    letterSpacing: string;
    lineHeight: string;
};
export default getTypography;
//# sourceMappingURL=getTypography.d.ts.map