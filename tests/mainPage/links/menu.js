'use strict';

var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should()

// describe('Fame500 links test', function () {
//     it('check main navigation links', function(done) {
//     	var browser = this.browser;


//         browser.get('http://game.fame500.com/')
//         .waitForElementByXPath("//a[@href='#sector/Acting']", 5000)
//         .elementByXPath("//a[@href='#sector/Acting']")
//         .click()
//         .elementByXPath("//a[@href='#sector/Acting']")
//         .getAttribute("class")
//         .then(function(elts) {
//         	//console.log("");
// 			assert.equal(elts, 'sector-Acting active');
// 		})
// 		.eval("window.location.href")
// 		.then(function(href) {
//         	// console.log(href);
// 			href.should.include('#sector/Acting');
// 		})
//        .then(done, done);
        
//        		// Original WD version
// 	       //  browser.get('http://game.fame500.com/', function(){
// 	       //    browser.elementByXPath("//a[@href='#sector/Acting']", function(err, el) {
// 	      //   browser.clickElement(el, function() {
// 	      //   	browser.elementByXPath("//a[@href='#sector/Acting']", function(err, el) {
// 	      //   		el.getAttribute("class", function(err, value){
// 	      //   			assert.equal(value, 'sector-Acting active')
// 	      //   		});
// 	      //   	});
// 	      //     browser.eval("window.location.href", function(err, href) {
// 	      //       href.should.include('#sector/Acting');
// 	      //       // browser.quit();
// 	      //       done();
// 	      //     });
// 	      //   });
// 	      // });	
// 	   //  });
//     });
// });