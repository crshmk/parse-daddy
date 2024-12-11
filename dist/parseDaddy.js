'use strict';

// value !== value -> NaN check
/**
 * Excludes the following from parsing:
 *  string, number, boolean, null, undefined, symbol NaN, function, bigint.
 *
 * Approves objects and arrays for parsing
 *
 * @param value any
 * @returns boolean
 */
const isObjectOrArray = (value) => typeof value === 'object' && value !== null;

/**
 * Safely parse jason without explicit try / catch
 *
 * Always returns an object or array
 * - primitives, null, etc return an empty object
 * - malformed objects return an empty object
 * - malfomred arrays return an empty array
 *
 * @param json
 * @returns object or array
 */
const parseDaddy = json => {
    let parsed = {};
    try {
        parsed = JSON.parse(json);
        return isObjectOrArray(parsed) ? parsed : {};
    }
    catch (e) {
        if (typeof json === 'string' && json.length > 0 && json.charAt(0) === '[') {
            return [];
        }
        return parsed;
    }
};

module.exports = parseDaddy;
