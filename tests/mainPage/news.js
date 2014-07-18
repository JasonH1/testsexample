'use strict';

var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
// var wd = require('wd');
chai.use(chaiAsPromised);
chai.should();


// fill pages Ids
var newsPages = [
	{
		"number": 0,
		"newsId": null 
	},
	{
		"number": 1,
		"newsId": null 
	},
	{
		"number": 2,
		"newsId": null 
	},
	{
		"number": 3,
		"newsId": null 
	}
];




describe('Fame500 news test ', function () {
	before(function(){
		chaiAsPromised.transferPromiseness = this.wd.transferPromiseness;
		this.browser.setWindowSize(1500, 850).get('http://game.fame500.com/')
		// this.asserters = this.wd.asserters;
	})

	// it('events', function(done) {
	// 	var browser = this.browser;
	//     browser
	//     	.waitForElementByClassName("fame-celeb-image", 5000)
	//     	.execute('return Fame.channels.showNews[0].events.hasOwnProperty("click .fame-news-prev")')
	//     	.should.eventually.to.equal(true)
	//     	.execute('return Fame.channels.showNews[0].events.hasOwnProperty("click .fame-news-next")')
	//     	.should.eventually.to.equal(true)
	//     	.execute('return Fame.channels.showNews[0].events.hasOwnProperty("click .fame-news-box")')
	//     	.should.eventually.to.equal(true)
	//     	.nodeify(done);
 //    });

	newsPages.forEach(function(newsItem){
		it('next link page=' + newsItem.number, function(done) {
	    	var browser = this.browser;
	    	var news_id = null;
	    	// console.log(this.wd.asserters);
	    	var asserters = this.wd.asserters;
	        	browser
	        		.waitForElementByClassName("fame-celeb-image", 5000)
					// .eval('$($("#news-container-' + newsItem.number + '").children()[0]).attr("data-news-id")')
					.elementById('news-container-' + newsItem.number)
					.elementByClassName(">", "fame-news-element")
					.getAttribute("data-news-id")
					.then(function(attr){
						news_id = attr;
						newsItem.newsId = attr;
					})
					.elementById('news-container-' + newsItem.number)
					.elementByClassName(">", "fame-news-title")
					.text()
					.then(function(text){
						newsItem.text = text;
						console.log(newsItem)
					})
					.waitForElementByClassName("fame-news-next", 5000)
					.click()
					.sleep(2000)
					.waitForElementById("news-container-" + (newsItem.number === 4?"4":(newsItem.number + 1).toString()), 5000)
					.eval('$($("#news-container-' + (newsItem.number === 4?"4":(newsItem.number + 1).toString()) + 
						'").children()[0]).attr("data-news-id")')
					.then(function(attr){
						// console.log(attr);
						console.log(newsItem);
						attr.should.to.not.equal(news_id)
					})
					.nodeify(done);
        });

    });

		newsPages.forEach(function(newsItem){
			it('click news test', function(done) {
				var browser = this.browser;
				var asserters = this.wd.asserters;
				// var newsItem = newsPages[0];
				// console.log(asserters.isDisplayed);
			    browser
			    	.waitForElementByClassName("fame-celeb-image", 5000)
			    	.waitForElementById("modal-show", 5000)
			    	.elementById("modal-show")
			    	// .execute("return $('#modal-show').attr('aria-hidden')")
			    	// .getAttribute("aria-hidden")
			    	// .should.become(null)
			    	.execute("$('div[data-news-id=\""+newsItem.newsId+"\"]').click()")
			    	.waitForElementByCss("#modal-show.modal.modal-news.fade", asserters.isDisplayed , 5000)
			    	.sleep(1000)
			    	.elementById('modal-show')
					.elementByClassName(">", "news-title")
					.text()
					.should.eventually.include(newsItem.text.slice(0,10))
					.execute("$('#modal-show').find('.close').click()")
					// .elementById('modal-show')
					// .elementByClassName(">", "close")
					// .click().
					.sleep(2000)
			    	.nodeify(done);
		    });
		});
	
});
