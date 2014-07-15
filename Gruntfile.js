module.exports = function ( grunt ) {

    /** Load Grunt Tasks */
    // grunt.loadNpmTasks('grunt-mocha-webdriver');
    grunt.loadNpmTasks('grunt-webdriver');
    var taskConfig = {
        webdriver: {
            options: {
                host: 'ondemand.saucelabs.com',
                port: 80,
                user: "akalininv",
                key: "899a7290-a8ec-4df9-9104-e32160e2042f",
                //'tunnel-identifier': 'my-tunnel',
                updateSauceJob: true,
                logLevel: 'verbose',
                includeStackTrace: true,
                
                
            },
            iehta9: {
                tests: ['tests/mainPage/links/*.js'],
                options:{
                    desiredCapabilities: {
                        browserName: 'iehta',
                        version: '9',
                        platform: 'Windows 7',
                        tags: ['IE','9'],
                        name: 'Fame500, TRAVIS_JOB_NUMBER: ' + process.env.TRAVIS_JOB_NUMBER ||'Fame500 tests'
                        //'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || 'test'
                    }
                }
                
            },
            iehta10: {
                tests: ['tests/mainPage/links/*.js'],
                options:{
                    desiredCapabilities: {
                        browserName: 'iehta',
                        version: '10',
                        platform: 'Windows 7',
                        tags: ['IE','10','Windows 7'],
                        name: 'Fame500, TRAVIS_JOB_NUMBER: ' + process.env.TRAVIS_JOB_NUMBER ||'Fame500 tests'
                        //'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || 'test'
                    }
                }
            },
            iehta11: {
                tests: ['tests/mainPage/links/*.js'],
                options:{
                    desiredCapabilities: {
                        browserName: 'iehta',
                        version: '11',
                        platform: 'Windows 7',
                        tags: ['IE','11','Windows 7'],
                        name: 'Fame500, TRAVIS_JOB_NUMBER: ' + process.env.TRAVIS_JOB_NUMBER ||'Fame500 tests'
                        //'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || 'test'
                    }
                }
            }
        },
    };

    grunt.initConfig( grunt.util._.extend( taskConfig ) );

    grunt.registerTask('iehta9',  function () {
        //execute some tests
        grunt.task.run(['webdriver:iehta9'], function() {
            localserver.kill('SIGTERM');
        });
        grunt.task.run(['webdriver:iehta10'], function() {
            localserver.kill('SIGTERM');
        });

    });

    grunt.registerTask('default', 'iehta9');
};
