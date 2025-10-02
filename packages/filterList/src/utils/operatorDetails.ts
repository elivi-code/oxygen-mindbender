import { OPERATOR_TYPES_NUMBER, OperatorType } from '../types';

function isDateRange(operator: OperatorType) {
  return operator?.value === 'dateRange';
}

function isSingleSelection(operator: OperatorType) {
  return operator?.value === 'boolean';
}

function isMultiSelection(operator: OperatorType) {
  return operator?.value === 'is' || operator?.value === 'isNot';
}

function isNumberOperator(operator: OperatorType) {
  return Object.values(OPERATOR_TYPES_NUMBER).includes(operator?.value);
}

export { isDateRange, isSingleSelection, isMultiSelection, isNumberOperator };
