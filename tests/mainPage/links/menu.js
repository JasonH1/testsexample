'use strict';

var assert = require('assert');

describe('Fame500 links test', function () {

    it('check main navigation links', function(done) {
        browser
            .url('http://game.fame500.com/')
            .click ( '.sector-Acting')
            .getAttribute('.sector-Acting', 'class', function(err, value){
                    assert.equal(value, 'sector-Acting active');
               })
            .end(done);
    });
});