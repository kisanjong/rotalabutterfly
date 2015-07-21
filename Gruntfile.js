module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			dist: {
		        options: {
		          transform: ["babelify"]
		        },
		        files: {
		          "js_build/app.js": "js_dev/app.js",
		           "js_build/bootstrap.js": [
		           	"bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition.js",
		           	"bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse.js"
		           	]
		        }
		    }
			// build: {
			// 	src: 'js_dev/app.js',
			// 	dest: 'js_build/app.js',
			// 	options: {
		 //          transform: ["babelify"]
		 //        }
			// }
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