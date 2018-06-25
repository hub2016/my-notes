module.exports = function(grunt) {
    'use strict';
 
    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        test: {
            files: ['test/**/*.js']
        },
        lint: {
            files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
        },
        watch: {
            files: '<config:lint.files>',
            tasks: 'default'
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                node: true
            },
            globals: {
                exports: true
            }
        }
    });
 
    // Default task.
    grunt.registerTask('default', 'lint test');
 
};