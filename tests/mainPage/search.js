'use strict';

var assert = require('assert');
var chai = require('chai');
chai.should();


var searchFames = [
    {
        "name": 'Justin Timberlake',
        "idName":'justin-timberlake'
    },
    {
        "name": 'Myleene Klass',
        "idName":'myleene-klass'
    },
    {
        "name": 'Kate Beckinsale',
        "idName":'kate-beckinsale'
    }
]

describe('Fame500 search test', function () {
    searchFames.forEach(function(searchItem){
        it('check search input for ' + searchItem.name, function(done) {
        	var browser = this.browser;
            browser.get('http://game.fame500.com/')
                .waitForElementById("fame-search", 5000)
                .sendKeys(searchItem.name)
                .waitForElementByClassName("tt-suggestion", 5000)
                .click()
                .waitForElementByXPath('//a[@data-name="'+searchItem.name+'"]', 10000)
                .getAttribute('data-id')
                .then(function(el){
                    assert.equal(el, searchItem.idName);
                })
                .then(done, done);
        });
    });
});