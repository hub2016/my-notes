//包装函数
module.exports = function(grunt) {

	//任务配置，所有插件的配置信息

	grunt.initConfig({

		//获取 package.json 的信息
		pkg: grunt.file.readJSON('package.json'),
		/*js合并调用
		//jshint插件的配置信息
		jshint: {
			bulid: [ 'Gruntfile.js', 'src/*.js' ],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		
		//concat插件的配置信息
		concat: {
			options: {
				separatpr: ';',
				stripBanners: true,
      			banner: '\/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        		'<%= grunt.template.today("yyyy-mm-dd") %> *\/\n'
			},
			bulid: {
				src: [ 'src/add.js','src/minus.js','src/test.js' ],
				dest: 'src/concat.js'
			}
		},
		//uglify插件的配置信息
		uglify: {
			options:{
				stripBanners: true,
				banner: '\/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        		'<%= grunt.template.today("yyyy-mm-dd") %> *\/\n'
			},
			bulid: {
				src: 'src/concat.js',
				dest: 'bulid/<%= pkg.name %>-<%= pkg.version %>.min.js'
			}
		},
		//watch插件的配置信息
		watch: {
			bulid: {
				files: [ 'src/*.js' ],
				tasks: [ 'jshint', 'concat', 'uglify' ],
				options: { spawn: false }
			}
		},
		*/
	
		/*css合并调用*/
		//concat插件的配置信息
		concat: {
			options: {
				separatpr: ';',
				stripBanners: true,
      			banner: '\/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        		'<%= grunt.template.today("yyyy-mm-dd") %> *\/\n'
			},
			bulid: {
				src: [ 'src/404.css','src/bet.css','src/fc3d.css' ],
				dest: 'src/all.css'
			}
		},

		//cssmin插件的配置信息
		cssmin: {
			target: {
			    files: [{
			    	expand: true,
			    	cwd: 'src',
			    	src: [ 'all.css' ],
			    	dest: 'bulid',
			    	ext: '.min.css'
			    }]
			}
		},

		//watch插件的配置信息
		watch: {
			bulid: {
				files: [ 'src/*.css' ],
				tasks: [ 'concat', 'cssmin' ],
				options: { spawn: false }
			}
		}
	});

	//告诉grunt我们将使用插件
	//grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//告诉grunt当我们在终端中输入grunt时需要做些什么（注意先后顺序）
	//grunt.registerTask('default',['jshint', 'concat', 'uglify', 'watch']);
	grunt.registerTask('default',['concat', 'cssmin']);
};
