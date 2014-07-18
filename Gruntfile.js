module.exports = function ( grunt ) {
    var _ = require('lodash');
    var browsers = require('./browsers');
    /** Load Grunt Tasks */
    grunt.loadNpmTasks('grunt-mocha-webdriver');
    // grunt.loadNpmTasks('grunt-webdriver');
    var TRAVIS_END_DATA = 'Fame500, commit:' + process.env.TRAVIS_COMMIT ;
    var taskConfig = {
        // webdriver: {
        //     options: {

        //         user: "akalininv",
        //         key: "899a7290-a8ec-4df9-9104-e32160e2042f",
        //         //'tunnel-identifier': 'my-tunnel',
        //         updateSauceJob: true,
        //         // logLevel: 'verbose',
        //         includeStackTrace: true,
        //     },
            
        //     phantomjs:{
        //         options: {
        //             // logLevel: 'verbose',
        //             desiredCapabilities: { 
        //                 browserName: 'phantomjs'
        //             }
        //         },
        //         tests: ['tests/mainPage/links/*.js'], 
        //     },
        // }


        jshint: {
            all: ['Gruntfile.js', 'test/**/*.js'],
            options: {
                jshintrc: true
            }
        },



        mochaWebdriver:{
            options: {
                timeout: 1000 * 60 * 3,
                reporter: 'spec',
                usePromises: true
            },
            phantom: {
                src: ['tests/**/*.js'],
                options: {
                    testName: 'phantom test',
                    usePhantom: true,
                    phantomPort: 5555,
                    browsers: [
                        // {browserName: 'internet explorer', platform: 'Windows 7', version: '9'},
                        // {browserName: 'internet explorer', platform: 'Windows 7', version: '8'},
                        // {browserName: 'chrome', platform: 'Windows 7', version: ''}
                    ]
                }
            },
            sauce: {
                src: ['tests/**/*.js'],
                options: {
                    username: "akalininv",
                    key: "899a7290-a8ec-4df9-9104-e32160e2042f",
                    testName: process.env.TRAVIS_BUILD_ID?TRAVIS_END_DATA:'Fame500 local tests',
                    concurrency: 5,
                    testTags: [''],
                    build: process.env.TRAVIS_BUILD_NUMBER || 'local',
                    browsers: [
                        {browserName: 'internet explorer', platform: 'Windows 7', version: '9'},
                        {browserName: 'internet explorer', platform: 'Windows 7', version: '10'},
                        {browserName: 'internet explorer', platform: 'Windows 7', version: '11'},
                        {browserName: 'chrome', platform: 'Windows 7', version: ''},
                        {browserName: 'firefox', platform: 'Windows 7', version: '30'}
                    ]
                }
            },

            selenium: {
                src: ['tests/**/*.js'],
                options: {
                    testName: 'selenium test',
                    concurrency: 2,
                    hostname: '127.0.0.1',
                    port:   '4444',
                    autoInstall: true,
                    browsers: [
                        // {browserName: 'firefox'},
                        {browserName: 'chrome'}
                    ]
                }
            },
        }
    };


    grunt.initConfig( grunt.util._.extend( taskConfig ) );
    grunt.registerTask('default',['mochaWebdriver:phantom']);
    grunt.registerTask('phantom', ['mochaWebdriver:phantom']);
    grunt.registerTask('sauce', [ 'mochaWebdriver:sauce']);
    grunt.registerTask('selenium', [ 'mochaWebdriver:selenium']);

};
