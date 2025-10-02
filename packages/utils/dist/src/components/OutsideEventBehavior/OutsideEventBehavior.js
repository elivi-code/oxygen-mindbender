import * as React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
class OutsideEventBehavior extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClickEvent = (event) => {
            const el = findDOMNode(this); // eslint-disable-line react/no-find-dom-node
            if (!this.props.onClick ||
                !el ||
                (event.target instanceof Node && el.contains(event.target)) // eslint-disable-line no-undef
            ) {
                return;
            }
            this.props.onClick(event);
        };
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClickEvent, {
            capture: true,
        });
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickEvent, {
            capture: true,
        });
    }
    render() {
        return this.props.children;
    }
}
OutsideEventBehavior.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
};
OutsideEventBehavior.defaultProps = {
    children: undefined,
    onClick: undefined,
};
export default OutsideEventBehavior;
