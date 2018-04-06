'use strict';

var instance = null,
    Joi = require('joi');

function Config() {

    var conf = {
        'email': Joi.string().email()
    }; // private

    this.package = function() {
        return JSON.parse(JSON.stringify(require('./../package.json')));
    };

    this.full = function() {
        return conf;
    };

    /**
     * Sets a key
     * @param string key
     * @param mixed value
     * @return {boolean} Op status
     */
    this.set = function(key, value) {
        conf[''+key] = value;
        return (conf[''+key] === value);
    };

    /**
     * Gets definition by key (label)
     * @param key
     * @return {null|mixed}
     */
    this.get = function(key) {
        return (!conf[key]) ? null : conf[key];
    };
}

if (instance === null) {
    instance = new Config();
}

module.exports = instance;
