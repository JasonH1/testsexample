'use strict';

var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should()

var main_links = [

	{
		"href": "#sector/all",
		"class": "sector-all active"
	},
	{
		"href": "#sector/TV",
		"class": "sector-TV active"
	},
	{
		"href": "#sector/Acting",
		"class": "sector-Acting active"
	},
	{
		"href": "#sector/Music",
		"class": "sector-Music active"
	},
	{
		"href": "#sector/Sport",
		"class": "sector-Sport active"
	},
	{
		"href": "#sector/Establishment",
		"class": "sector-Establishment active"
	},
	{
		"href": "#sector/Fashion",
		"class": "sector-Fashion active"
	}
]



describe('Fame500 main navigation links test', function () {
	before(function(done){
		var browser = this.browser;
		browser.setWindowSize(1500, 850).get('http://game.fame500.com/')
		.then(done)
	})
	main_links.forEach(function(link) { 
	    it('check navigation href: ' + link.href, function(done) {
	    	
	        this.browser.waitForElementByXPath("//a[@href='" + link.href + "']", 5000)
	        //.elementByXPath("//a[@href='" + link.href + "']")
	        .click()
	        .waitForElementByXPath("//a[@href='" + link.href + "']", 5000)
	        .getAttribute("class")
	        .then(function(elts) {
	        	//console.log("");
				assert.equal(elts, link.class);
			})
			.eval("window.location.href")
			.then(function(href) {
	        	// console.log(href);
				href.should.include(link.href);
			})
	       .then(done, done);
	    });
	})
});

describe('Fame500 facebook links test', function () {
	beforeEach(function(done){
		var browser = this.browser;
		browser.setWindowSize(1500, 850).get('http://game.fame500.com/')
		.then(done)
	})
    it('check login href: /login/', function(done) {
    	
        this.browser.waitForElementByXPath("//a[@href='/login/']", 5000)
        //.elementByXPath("//a[@href='" + link.href + "']")
        .click()
        .waitForElementByXPath("//html[@id='facebook']", 5000)
		.eval("window.location.href")
		.then(function(href) {
        	// console.log(href);
			href.should.include("facebook");
		})
       .then(done, done);
    });
    it('check login href: /signup/', function(done) {
    	
        this.browser.waitForElementByXPath("//a[@href='/signup/']", 5000)
        //.elementByXPath("//a[@href='" + link.href + "']")
        .click()
        .waitForElementByXPath("//html[@id='facebook']", 5000)
		.eval("window.location.href")
		.then(function(href) {
        	// console.log(href);
			href.should.include("facebook");
		})
       .then(done, done);
    });
});


// var paginationValues = [
// 	{
// 		"link": "100",
// 		"expectedHref": ""
// 	}
// ]
// describe('Fame500 pagination links test ', function () {
// 	beforeEach(function(done){
// 		var browser = this.browser;
// 		browser.setWindowSize(1500, 850).get('http://game.fame500.com/')
// 		.then(done)
// 	})
//     it('check 0-100', function(done) {
    	
//         this.browser
//         .waitForElementByXPath("//body", 5000)
//         .waitForElementByClassName("fame-paging-right", 5000)
//         .click()
//         .eval("$('.fame-rank-headessr')[0]")
// 		.text()
// 		.then(function(text){
// 			assert.equal(text, "1");
// 		})
// 		// .then(function(href) {
//   //       	// console.log(href);
// 		// 	href.should.include("/100");
// 		// })
//        .then(done, done);
//     });
// });
