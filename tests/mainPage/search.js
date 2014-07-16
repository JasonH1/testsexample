'use strict';

var assert = require('assert');
var chai = require('chai');
chai.should();

describe('Fame500 search test', function () {
    it('check search input for Justin Timberlake', function(done) {
    	var browser = this.browser;
        browser.get('http://game.fame500.com/')
            .waitForElementById("fame-search", 5000)
            .sendKeys("Justin Timberlake")
            .waitForElementByClassName("tt-suggestion", 5000)
            .click()
            .waitForElementByXPath('//a[@data-name="Justin Timberlake"]', 10000)
            .getAttribute('data-id')
            .then(function(el){
                assert.equal(el, 'justin-timberlake');
            })
            .then(done, done);
    });
});