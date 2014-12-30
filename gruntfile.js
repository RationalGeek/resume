module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),
    // uglify: {
      // options: {
        // banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      // },
      // build: {
        // src: 'src/<%= pkg.name %>.js',
        // dest: 'build/<%= pkg.name %>.min.js'
      // }
    // }
	
	'gh-pages': {
		options: {
		  base: 'dist'
		},
		src: ['**']
	  },
	  
	jade: {
	  compile: {
		options: {
		  data: {
			debug: false
		  }
		},
		files: {
		  "dist/index.html": ["content/main.jade"]
		}
	  }
	},
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-jade');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);

};