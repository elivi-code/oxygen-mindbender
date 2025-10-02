function decorateOperatorWithLabel(operator) {
    return (operator && {
        ...operator,
        label: operator.label || operator.value,
    });
}
export default decorateOperatorWithLabel;
