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
                desiredCapabilities: 
                {
                    browserName: 'chrome',
                    version: '30',
                    platform: 'XP'
                }
            },
            links: {
                tests: ['tests/mainPage/links/*.js']
            }
        },
    };

    grunt.initConfig( grunt.util._.extend( taskConfig ) );

    grunt.registerTask('menu links',  function () {
        //execute some tests
        grunt.task.run(['webdriver:links'], function() {
            localserver.kill('SIGTERM');
        });

    });

    grunt.registerTask('default', 'menu links');
};
