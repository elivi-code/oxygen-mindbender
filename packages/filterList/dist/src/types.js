export const OPERATOR_TYPES_STRING = {
    IS: 'is',
    IS_NOT: 'isNot',
    CONTAINS: 'contains',
    NOT_CONTAINS: 'notContains',
    STARTS_WITH: 'startsWith',
    ENDS_WITH: 'endsWith',
    NOT_STARTS_WITH: 'notStartsWith',
    NOT_ENDS_WITH: 'notEndsWith',
};
export const OPERATOR_TYPES_NUMBER = {
    EQUALS: 'equals',
    NOT_EQUALS: 'notEquals',
    LESS_THAN: 'lessThan',
    LESS_THAN_OR_EQUAL: 'lessThanOrEqual',
    GREATER_THAN: 'greaterThan',
    GREATER_THAN_OR_EQUAL: 'greaterThanOrEqual',
};
export const OPERATOR_TYPES_DATE = {
    DATE_RANGE: 'dateRange',
};
export const OPERATOR_TYPES_BOOLEAN = {
    BOOLEAN: 'boolean',
};
export const OPERATOR_TYPES = {
    ...OPERATOR_TYPES_STRING,
    ...OPERATOR_TYPES_NUMBER,
    ...OPERATOR_TYPES_DATE,
    ...OPERATOR_TYPES_BOOLEAN,
};
export const multiSelectionOperators = [
    OPERATOR_TYPES_STRING.IS,
    OPERATOR_TYPES_STRING.IS_NOT,
];
