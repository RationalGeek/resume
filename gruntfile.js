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
	
	less: {
	  development: {
		options: {
		  paths: [ "content/sytle" ]
		},
		files: {
		  "dist/main.css": "content/style/main.less"
		}
	  },
	},
	
	  bump: {
		options: {
		  files: ['package.json'],
		  updateConfigs: [],
			commit: true,
			commitMessage: 'Updated version to %VERSION%',
		  globalReplace: false,
		  push: false,
		  createTag: false,
		  
		  
		}
	  },
	  
		copy: {
		  main: {
			files: [
			  { expand: true, src: ['node_modules/normalize.css/normalize.css'], dest: 'dist/', flatten: true },
			],
		  },
		},
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);

};