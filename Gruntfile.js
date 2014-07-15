module.exports = function ( grunt ) {
    var _ = require('lodash');
    var browsers = require('./browsers');
    /** Load Grunt Tasks */
    // grunt.loadNpmTasks('grunt-mocha-webdriver');
    grunt.loadNpmTasks('grunt-webdriver');

    var taskConfig = {
        webdriver: {
            options: {

                user: "akalininv",
                key: "899a7290-a8ec-4df9-9104-e32160e2042f",
                //'tunnel-identifier': 'my-tunnel',
                updateSauceJob: true,
                // logLevel: 'verbose',
                includeStackTrace: true,
            },
            
            phantomjs:{
                options: {
                    // logLevel: 'verbose',
                    desiredCapabilities: { 
                        browserName: 'phantomjs'
                    }
                },
                tests: ['tests/mainPage/links/*.js'], 
            },
        }

    };

    grunt_run = []
    _(browsers).each(function(browser, key) {
        taskConfig.webdriver[key] = browser;
        grunt_run.push('webdriver:' + key);
    });

    grunt.initConfig( grunt.util._.extend( taskConfig ) );

    grunt.registerTask('SauceLabs',  function () {
        //execute tests
        grunt.task.run(grunt_run, function() {
            localserver.kill('SIGTERM');
        });
    });
    // grunt.registerTask('default', 'SauceLabs');

    grunt.registerTask('PhantomJS',  function () {
        //execute tests
        grunt.task.run(['webdriver:phantomjs'], function() {
            localserver.kill('SIGTERM');
        });
    });
    
    if (process.env.TRAVIS_BUILD_ID){
        grunt.registerTask('default', 'SauceLabs');
    } else {
        grunt.registerTask('default', 'PhantomJS');
    }
    // grunt.registerTask('default', 'PhantomJS');
    // grunt.registerTask('default', 'SauceLabs');

   
};
