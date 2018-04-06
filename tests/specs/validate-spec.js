require('./../../src/sign-test')(__filename);

var validate = require('./../../index').Validate,
    Config = require('./../../index').Configuration,
    Joi = require('joi');

describe('validate', function () {

    it('built-in validators', function () {
        expect(validate('maass', 'email')).toBe(false);
        expect(validate('acc@dom.com', 'email')).toBe(true);
        expect(validate('111', 'email')).toBe(false);
    });

    it('can expand validators dictionary', function () {

        Config.set('username', Joi.string().alphanum().min(3).max(30));

        expect(validate('A', 'username')).toBe(false);
        expect(validate('ABDNBD0102030', 'username')).toBe(true);
        expect(validate('111111111444444444444444444444444444444444111111111111111111111111111111111111111111111111111111111111111111', 'username')).toBe(false);
    });
});
