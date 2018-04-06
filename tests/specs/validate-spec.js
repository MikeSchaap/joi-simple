require('./../../src/sign-test')(__filename);

var validate = require('./../../index').Validate;

describe('validate', function () {

    it('built-in validators', function () {
        expect(validate('maass', 'email')).toBe(false);
        expect(validate('acc@dom.com', 'email')).toBe(true);
    });
});
