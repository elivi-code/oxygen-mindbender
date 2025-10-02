import { OPERATOR_TYPES_NUMBER } from '../types';
function isDateRange(operator) {
    return operator?.value === 'dateRange';
}
function isSingleSelection(operator) {
    return operator?.value === 'boolean';
}
function isMultiSelection(operator) {
    return operator?.value === 'is' || operator?.value === 'isNot';
}
function isNumberOperator(operator) {
    return Object.values(OPERATOR_TYPES_NUMBER).includes(operator?.value);
}
export { isDateRange, isSingleSelection, isMultiSelection, isNumberOperator };
