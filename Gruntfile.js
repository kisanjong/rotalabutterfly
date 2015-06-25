module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			build: {
				src: 'js/app.js',
				dest: 'build/app.js',
				options: {
		          transform: ["babelify"]
		        }
			}
		},
		sass: {
			dist: {
				options: { 
					sourcemap: 'none',
					loadPath: 'bower_components/bootstrap-sass/assets/stylesheets/bootstrap/',                      
			        style: 'expanded'
			    },
				files: {
					'css/style.css' : 'sass/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}