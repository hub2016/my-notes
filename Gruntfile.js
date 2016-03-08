//包装函数
module.exports = function(grunt) {

	//任务配置，所有插件的配置信息

	grunt.initConfig({

		//获取 package.json 的信息
		pkg: grunt.file.readJSON('package.json'),

		//uglify插件的配置信息
		uglify: {
			options:{
				stripBanners: true,
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			bulid: {
				src: 'src/test.js',
				dest: 'bulid/<%= pkg.name %>-<%= pkg.version %>.min.js'
			}
		},

		//jshint插件的配置信息
		jshint: {
			bulid: [ 'Gruntfile.js', 'src/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		//watch插件的配置信息
		watch: {
			bulid: {
				files: [ 'src/*.js', 'src/*.css'],
				tasks: ['jshint', 'uglify'],
				options: { spawn: false }
			}
		}
	});

	//告诉grunt我们将使用插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//告诉grunt当我们在终端中输入grunt时需要做些什么（注意先后顺序）
	grunt.registerTask('default',['jshint', 'uglify', 'watch']);
};
