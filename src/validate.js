'use strict';

/**
 *
 * @param number|string input Input
 * @param string label Validator's alias
 * @return {boolean}
 */
module.exports = function Validate(input, label) {

    var Joi = require('joi'),
        definition = require('../index').Configuration.get(label);

    if (null === definition) {
        return false;
    } else {
        try {
            var schema = Joi.object()
                .keys({value: definition});
            return Joi.validate({value: input}, schema);
        } catch (err) {
            console.log(err);
            return false;
        }
    }
};