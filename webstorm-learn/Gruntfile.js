//包装函数
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'base/css',
                    src: ['style.css'],
                    dest: 'base/css',
                    ext: '.min.css'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', [ 'cssmin' ]);
};