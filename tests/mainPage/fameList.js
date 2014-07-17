'use strict';

var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
// var wd = require('wd');
chai.use(chaiAsPromised);
chai.should();



describe('Fame500 fames list test  ', function () {
	before(function(){
		chaiAsPromised.transferPromiseness = this.wd.transferPromiseness;
		this.browser.setWindowSize(1500, 850).get('http://game.fame500.com/')
		// this.asserters = this.wd.asserters;
		this.scrollBottom = "$('html, body').animate({ "+
			   "scrollTop: $(document).height()-$(window).height()}, "+
			   "1400, 'easeOutQuint');"
	})

	
	it('list length', function(done) {
    	var browser = this.browser;
    	var asserters = this.wd.asserters;
        browser
		   .waitForElementByClassName("fame-celeb-image", 5000)
		   .waitForElementsByClassName("fame-element", 5000)
		   .should.eventually.have.length(20)
		   .eval("$('html, body').scrollTop( $(document).height() - $(window).height() );")
		   .waitForElementsById("row-21", 2000)
		   .elementsByClassName("fame-element", 5000)
		   .should.eventually.have.length(40)
		   // If you click keyboard button END, fame-elements stop download

		   // .eval("$('html, body').scrollTop( $(document).height() - $(window).height()*2 );")
		   // .waitForElementsById("row-41", 2000)
		   // .elementsByClassName("fame-element", 5000)
		   // .should.eventually.have.length(60)
		   .eval("$('html, body').scrollTop(0);")
			.nodeify(done);
    });

    it('open and close slide info', function(done) {
    	var browser = this.browser;
    	var asserters = this.wd.asserters;
    	var self = this;
    	self.dataId = null;
    	var wd = this.wd;

        browser
		   .waitForElementByClassName("fame-celeb-image", 5000)
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
