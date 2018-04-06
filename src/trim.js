'use strict';

/**
 * Trims
 * @param mixed string   Input
 * @returns string
 */
module.exports = function trim(string) {
    return (''+string).replace(/^\s+|\s+$/gm,'');
};