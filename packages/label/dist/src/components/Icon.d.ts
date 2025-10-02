import React from 'react';
import { LabelTheme, showOn } from '../types';
interface Props {
    theme?: LabelTheme;
    testId?: string;
    infoBoxText: React.ReactNode;
    infoBoxShowOn?: keyof typeof showOn;
    infoBoxButtonLabel?: string;
}
type InternalProps = Props & {
    theme: LabelTheme;
};
export declare const Icon: (props: InternalProps) => React.JSX.Element;
export default Icon;
//# sourceMappingURL=Icon.d.ts.map