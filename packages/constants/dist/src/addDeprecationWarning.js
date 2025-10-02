import React from 'react';
const logger = console.warn; // eslint-disable-line no-console
function isReactDevMode() {
    return '_self' in React.createElement('div');
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
export default function addDeprecationWarning(obj, deprecationRules) {
    if (!isReactDevMode()) {
        return obj;
    }
    const deprecationRulesMap = new Map();
    for (const deprecationRule of deprecationRules) {
        deprecationRulesMap.set(deprecationRule.propName, deprecationRule);
    }
    const objEntries = Object.entries(obj);
    const newObj = {};
    objEntries.forEach(([key, value]) => {
        if (!deprecationRulesMap.has(key)) {
            newObj[key] = value;
            return;
        }
        const deprecationRule = deprecationRulesMap.get(key);
        Object.defineProperty(newObj, key, {
            get() {
                if (deprecationRule.message) {
                    logger(deprecationRule.message);
                    return value;
                }
                logger(`${key} is deprecated in favor of ${deprecationRule.alternative}`);
                return value;
            },
        });
    });
    return newObj;
}
