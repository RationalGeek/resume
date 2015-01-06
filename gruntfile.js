module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
  
    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
     },
    
    jade: {
      main: {
        options: {
          data: {
          debug: false,
          version: '<%= pkg.version %>',
          }
        },
        files: {
          "dist/index.html": ["content/main.jade"]
        }
      }
    },
  
    less: {
      main: {
        options: {
          paths: [ "content/sytle" ]
        },
        files: {
          "dist/bootstrap.css": "content/style/bootstrap-custom.less",
          "dist/layout.css": "content/style/layout.less",
          "dist/main.css": "content/style/main.less",
        }
      },
    },
  
    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: ['pkg'],
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
          { expand: true, src: ['node_modules/bootstrap/dist/js/bootstrap.min.js'], dest: 'dist/', flatten: true },
          { expand: true, src: ['content/scripts/main.js'], dest: 'dist/', flatten: true },
        ],
      },
    },
    
    watch: {
      scripts: {
        files: ['content/**/*.jade','content/style/**/*.less','*.js','content/scripts/**/*.js'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['copy','less','jade']);
  grunt.registerTask('release', ['bump','build','gh-pages']);
  
  // grunt.registerTask('default', [...]);
};