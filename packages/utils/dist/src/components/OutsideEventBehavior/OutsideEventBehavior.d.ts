import * as React from 'react';
import PropTypes from 'prop-types';
type Props = {
    children?: React.ReactNode;
    onClick?: (event: MouseEvent) => void;
};
declare class OutsideEventBehavior extends React.Component<Props> {
    static propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: Props;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClickEvent: (event: MouseEvent) => void;
    render(): React.ReactNode;
}
export default OutsideEventBehavior;
//# sourceMappingURL=OutsideEventBehavior.d.ts.map