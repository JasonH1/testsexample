'use strict';

var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
// var wd = require('wd');
chai.use(chaiAsPromised);
chai.should();

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
    	
        this.browser
        .waitForElementByClassName("fame-celeb-image", 5000)
        .waitForElementByXPath("//a[@href='/login/']", 5000)
        .click()
        .waitForElementByXPath("//html[@id='facebook']", 5000)
		.eval("window.location.href")
		.then(function(href) {
			href.should.include("facebook");
		})
       .then(done, done);
    });
    it('check login href: /signup/', function(done) {
    	
        this.browser
        .waitForElementByClassName("fame-celeb-image", 5000)
        .waitForElementByXPath("//a[@href='/signup/']", 5000)
        .click()
        .waitForElementByXPath("//html[@id='facebook']", 5000)
		.eval("window.location.href")
		.then(function(href) {
			href.should.include("facebook");
		})
       .then(done, done);
    });
});


var paginationValues = [
	{
		"page": "101-200",
		"expectedHref": ""
	},
	{
		"page": "201-300",
		"expectedHref": ""
	},
	{
		"page": "301-400",
		"expectedHref": ""
	},
	{
		"page": "401-500",
		"expectedHref": ""
	},
	{
		"page": "501-600",
		"expectedHref": ""
	}
]


describe('Fame500 pagination links test ', function () {
	before(function(){
		chaiAsPromised.transferPromiseness = this.wd.transferPromiseness;
		this.browser.setWindowSize(1500, 850).get('http://game.fame500.com/')

	})

	paginationValues.forEach(function(item){
		it('check' + item.page, function(done) {
	    	var browser = this.browser

	        browser
			   .waitForElementByClassName("fame-celeb-image", 5000)
	        	.execute('$(".fame-paging-right").click()')
	        	.waitForElementByClassName("fame-celeb-image", 5000)
	        	.waitForElementById("fame-paging-label", 5000)
	        	.text()
				.should.eventually.include(item.page)

	       .nodeify(done);
	    });
	});
    
});




// describe('Fame500 news change links test ', function () {
// 	before(function(){
// 		chaiAsPromised.transferPromiseness = this.wd.transferPromiseness;
// 		this.browser.setWindowSize(1500, 850).get('http://game.fame500.com/')
// 		// this.asserters = this.wd.asserters;
// 	})

	
// 	it('check news', function(done) {
//     	var browser = this.browser;
//     	var news_id = null;
//     	// console.log(this.wd.asserters);
//     	var asserters = this.wd.asserters;
//         browser
// 		   .waitForElementByClassName("fame-celeb-image", 5000)
// 			.eval('$($("#news-container-0").children()[0]).attr("data-news-id")')
// 		   .then(function(attr){
// 		   		news_id = attr;
// 		   		// console.log(asserters)
// 		   })
// 		   .waitForElementByClassName("fame-news-next", 5000)
// 		   .click()
// 		   .waitForElementById("news-container-1", this.wd.asserters.isDisplayed , 5000)
// 		   .eval('$($("#news-container-1").children()[0]).attr("data-news-id")')
// 		   .then(function(attr){
// 		   		console.log(attr);
// 		   		console.log(news_id);
// 		   })
// 		   // .waitForElementsByClassName("fame-news-element", 2000)
// 		   // .first()
// 		   // .getAttribute("data-news-id")
// 		   .should.eventually.to.not.equal(news_id)
// 	       .nodeify(done);
//     });

    
// });
