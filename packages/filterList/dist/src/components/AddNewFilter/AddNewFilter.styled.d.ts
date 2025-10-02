/// <reference types="react" />
declare const AddFilterTag: import("styled-components").StyledComponent<import("react").FunctionComponent<import("@8x8/oxygen-button").ButtonProps> & import("react").ForwardRefExoticComponent<Omit<import("@8x8/oxygen-button").ButtonProps, "ref"> & import("react").RefAttributes<unknown>>, import("styled-components").DefaultTheme, {}, never>;
declare const AddFilterSearch: import("styled-components").StyledComponent<{
    new (props: import("@8x8/oxygen-input").InputProps): {
        state: import("@8x8/oxygen-input/dist/src/components/Input").InputState;
        inputFieldRef: import("react").MutableRefObject<HTMLInputElement>;
        componentDidMount(): void;
        setInputFieldRef: (element: HTMLInputElement) => void;
        handleFocus: (event: import("react").FocusEvent<HTMLInputElement, Element>) => void;
        handleBlur: (event: import("react").FocusEvent<HTMLInputElement, Element>) => void;
        render(): import("react").JSX.Element;
        context: unknown;
        setState<K extends "focused">(state: import("@8x8/oxygen-input/dist/src/components/Input").InputState | ((prevState: Readonly<import("@8x8/oxygen-input/dist/src/components/Input").InputState>, props: Readonly<import("@8x8/oxygen-input").InputProps>) => import("@8x8/oxygen-input/dist/src/components/Input").InputState | Pick<import("@8x8/oxygen-input/dist/src/components/Input").InputState, K>) | Pick<import("@8x8/oxygen-input/dist/src/components/Input").InputState, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<import("@8x8/oxygen-input").InputProps>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<import("@8x8/oxygen-input").InputProps>, nextState: Readonly<import("@8x8/oxygen-input/dist/src/components/Input").InputState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("@8x8/oxygen-input").InputProps>, prevState: Readonly<import("@8x8/oxygen-input/dist/src/components/Input").InputState>): any;
        componentDidUpdate?(prevProps: Readonly<import("@8x8/oxygen-input").InputProps>, prevState: Readonly<import("@8x8/oxygen-input/dist/src/components/Input").InputState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("@8x8/oxygen-input").InputProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("@8x8/oxygen-input").InputProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("@8x8/oxygen-input").InputProps>, nextState: Readonly<import("@8x8/oxygen-input/dist/src/components/Input").InputState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("@8x8/oxygen-input").InputProps>, nextState: Readonly<import("@8x8/oxygen-input/dist/src/components/Input").InputState>, nextContext: any): void;
    };
    defaultProps: Required<Pick<import("@8x8/oxygen-input").InputProps, "testId" | "type" | "autoFocus" | "prefix" | "fixed" | "size" | "isDisabled" | "autoPrefixWidth" | "autoSuffixWidth" | "focus" | "fullWidth" | "hasError" | "isReadOnly" | "isRequired" | "placeholder" | "suffix">>;
    contextType?: import("react").Context<any>;
} & import("react").ForwardRefExoticComponent<import("@8x8/oxygen-input").InputProps & import("react").RefAttributes<unknown>>, import("styled-components").DefaultTheme, {}, never>;
declare const ListWrapper: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export { AddFilterTag, AddFilterSearch, ListWrapper };
//# sourceMappingURL=AddNewFilter.styled.d.ts.map