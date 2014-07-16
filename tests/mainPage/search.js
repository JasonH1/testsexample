'use strict';

var assert = require('assert');
var chai = require('chai');
chai.should();

describe('Fame500 search test', function () {
    it('check search input', function(done) {
    	var browser = this.browser;
        browser.get('http://game.fame500.com/', function(){
        	browser.elementById("fame-search", function(err, el) {
        		browser.setImmediateValue(el, "Justin Timberlake", function(){
        			browser.waitForElementByClassName("tt-suggestions", browser, function(err, el){
        				browser.clickElement(el, function() {
        						done();
        				})
        			})
        		})
        	});
        });

    });
});