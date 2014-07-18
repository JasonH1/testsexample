'use strict';

var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
// var wd = require('wd');
chai.use(chaiAsPromised);
chai.should();


var scrollItems = [1,2,3,4,5,6,7,8,9,10]
describe('Fame500 fames list test  ', function () {
	before(function(){
		chaiAsPromised.transferPromiseness = this.wd.transferPromiseness;
		this.browser.setWindowSize(1500, 850).get('http://game.fame500.com/')
		// this.asserters = this.wd.asserters;
		this.scrollBottom = "$('html, body').animate({ "+
			   "scrollTop: $(document).height()-$(window).height()}, "+
			   "1400, 'easeOutQuint');"
	})


    it('open a lot fame slide info items', function(done) {
    	var browser = this.browser;
    	var asserters = this.wd.asserters;
    	var self = this;
    	self.dataId = null;
    	var wd = this.wd;

        browser
		   .waitForElementByClassName("fame-celeb-image", 5000)
		   // .execute("$(document).scrollTop(0);")
		   .execute('$(".fame-celebrity-arrow").click()')
		   .waitForElementsByCss(".fame-slideinfo.in", 5000)
		   .sleep(2000)
		   .waitForElementsByCss(".fame-slideinfo.in", 5000)
		   .then(function(elts){
			   		elts.should.have.length(20);
			   })
		   .nodeify(done);
    });

    scrollItems.forEach(function(i) { 
		it('list length' + i*20, function(done) {
			
		    	var browser = this.browser;
		    	var asserters = this.wd.asserters;
		    
		        browser
				   .waitForElementByClassName("fame-celeb-image", 5000)
				   .waitForElementsByClassName("fame-element", 5000)
				   .then(function(elts){
				   		elts.should.have.length(i*20);
				   })
				   // .should.eventually.have.length(i*20)
				   .execute("$('html, body').scrollTop( $(document).height() - $(window).height() );")
				   .sleep(1000)
					.nodeify(done);
			
	    });
	})
	


    it('open and close slide info', function(done) {
    	var browser = this.browser;
    	var asserters = this.wd.asserters;
    	var self = this;
    	self.dataId = null;
    	var wd = this.wd;

        browser
		   .waitForElementByClassName("fame-celeb-image", 5000)
		   // .execute("$(document).scrollTop(0);")
		   .waitForElementsByClassName("fame-celebrity-title", 5000)
		   .first()
		   .getAttribute("data-id")
		   .then(function(attr){
		   		self.dataId = attr;
		   		
		   })

		   .waitForElementsByClassName("fame-celebrity-title", 5000)
		   .first()
		   .click()
		   .sleep(2000)
		   .waitForElementByClassName("fame-slideinfo",3000)
		   .getAttribute("class")
		   .should.eventually.include("in")
		   
		   .waitForElementByClassName("fame-celebrity-slider-close")
		   .click()
		   .sleep("2000")
		   .waitForElementByClassName("fame-slideinfo",3000)
		   .getAttribute("class")
		   .should.eventually.include("collapse")
		   .nodeify(done);
    });


});
