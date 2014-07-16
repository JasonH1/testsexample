'use strict';
var all_tests = ['tests/mainPage/links/*.js'];

var TRAVIS_END_DATA = 'Fame500, commit:' + process.env.TRAVIS_COMMIT ;

module.exports = {
    
	iehta9: {
        tests: all_tests,
        options:{
        	host: 'ondemand.saucelabs.com',
            port: 80,
            desiredCapabilities: {
                browserName: 'iehta',
                version: '9',
                platform: 'Windows 7',
                tags: ['IE','9','Windows 7'],
                name: process.env.TRAVIS_BUILD_ID?TRAVIS_END_DATA:'Fame500 local tests',
                build: process.env.TRAVIS_BUILD_NUMBER || 'local'
            }
        }
    },
    iehta10: {
        tests: all_tests,
        options:{
        	host: 'ondemand.saucelabs.com',
            port: 80,
            desiredCapabilities: {
                browserName: 'iehta',
                version: '10',
                platform: 'Windows 7',
                tags: ['IE','10','Windows 7'],
                name: process.env.TRAVIS_BUILD_ID?TRAVIS_END_DATA:'Fame500 local tests',
                build: process.env.TRAVIS_BUILD_NUMBER || 'local'
            }
        }
    },
    iehta11: {
        tests: all_tests,
        options:{
        	host: 'ondemand.saucelabs.com',
            port: 80,
            desiredCapabilities: {
                browserName: 'iehta',
                version: '11',
                platform: 'Windows 7',
                tags: ['IE','11','Windows 7'],
                name: process.env.TRAVIS_BUILD_ID?TRAVIS_END_DATA:'Fame500 local tests',
                build: process.env.TRAVIS_BUILD_NUMBER || 'local'
            }
        }
    },
    chrome: {
        tests: all_tests,
        options:{
        	host: 'ondemand.saucelabs.com',
            port: 80,
            desiredCapabilities: {
                browserName: 'chrome',
                version: '35',
                platform: 'Windows 7',
                tags: ['chrome', '35','Windows 7'],
                name: process.env.TRAVIS_BUILD_ID?TRAVIS_END_DATA:'Fame500 local tests',
                build: process.env.TRAVIS_BUILD_NUMBER || 'local'
            }
        }
    },
    firefox: {
        tests: all_tests,
        options:{
        	host: 'ondemand.saucelabs.com',
            port: 80,
            desiredCapabilities: {
                browserName: 'firefox',
                version: '30',
                platform: 'Windows 7',
                tags: ['firefox','30','Windows 7'],
                name: process.env.TRAVIS_BUILD_ID?TRAVIS_END_DATA:'Fame500 local tests',
                build: process.env.TRAVIS_BUILD_NUMBER || 'local'
            }
        }
    }
};
