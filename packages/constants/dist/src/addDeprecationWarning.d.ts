interface DeprecatedObjectProps {
    [key: string]: any;
}
interface DeprecationRule {
    propName: string;
    alternative: string;
}
/**
 * Wrap any object where you attach a getter which invoked will log a message
 * and return the original value.
 *
 * Example:
 *
 * const obj = {
 *   a: 1,
 *   b: 2
 * };
 *
 * addDeprecationWarning(obj, [{ propName: 'a', alternative: 'b' }])
 *
 * Now when accessing obj.a a message will be logged: a is deprecated use b instead
 *
 * @param {Object} obj
 * @param {Array} deprecationRules array which contains propName, alternative and message
 * @returns {Object}
 */
export default function addDeprecationWarning(obj: DeprecatedObjectProps, deprecationRules: DeprecationRule[]): DeprecatedObjectProps;
export {};
//# sourceMappingURL=addDeprecationWarning.d.ts.map