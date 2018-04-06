require('./../../src/sign-test')(__filename);

var trim = require('./../../src/trim');

describe('trim', function () {

    it('trims strings', function () {
        expect(trim('\t     AAFF     \t')).toBe('AAFF');
        expect(trim('\r     AAFF     \r')).toBe('AAFF');
        expect(trim('\n     AAFF     \n')).toBe('AAFF');
        expect(trim('AAFF     ')).toBe('AAFF');
        expect(trim('     AAFF')).toBe('AAFF');
    });
});
