import { OperatorType } from '../types';

function decorateOperatorWithLabel(operator?: OperatorType) {
  return (
    operator && {
      ...operator,
      label: operator.label || operator.value,
    }
  );
}

export default decorateOperatorWithLabel;
