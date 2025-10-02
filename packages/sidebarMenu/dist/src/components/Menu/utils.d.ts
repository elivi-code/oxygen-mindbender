/// <reference types="react" />
import { type MenuItemProps } from '../../types';
export declare const scrollToRef: (ref: React.MutableRefObject<HTMLElement | null>) => void;
type PropsWithAll = {
    linkComponent: MenuItemProps['linkComponent'];
    link: MenuItemProps['link'];
    linkProp: MenuItemProps['linkProp'];
};
type PropsWithEither = {
    linkComponent?: MenuItemProps['linkComponent'];
    link?: MenuItemProps['link'];
    linkProp?: MenuItemProps['linkProp'];
};
export declare function getCustomButtonOverrideProps(arg0: boolean, arg1: PropsWithAll): {
    as: React.ComponentType<any>;
    linkProp: string;
};
export declare function getCustomButtonOverrideProps(arg0: boolean, arg1: PropsWithEither): Record<string, never>;
export {};
//# sourceMappingURL=utils.d.ts.map