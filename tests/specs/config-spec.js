require('./../../src/sign-test')(__filename);

var Config = require('./../../index').Configuration;

describe('Configuration', function () {

    it('implements o.get(label) ', function () {
        expect(typeof Config.get('email')).toBe('object');
        expect(Config.get('doesnotexist')).toBe(null);
    });

    it('implements o.full() ', function () {
        expect(typeof Config.full()).toBe('object');
    });

    it('implements o.set(label, value) ', function () {
        expect(Config.set('one', 1)).toBe(true);
        expect(Config.get('one')).toBe(1);
    });

    it('implements o.set(label, value) ', function () {
        expect(Config.set('one', 1)).toBe(true);
        expect(Config.get('one')).toBe(1);
    });

    it('implements o.package() ', function () {
        expect(Config.package().version).toBe('0.0.2');
    });
});

