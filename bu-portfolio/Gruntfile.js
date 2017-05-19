module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'css/styling.css' : 'sass/styling.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'sass/*.scss',
        tasks: ['sass', 'uglify']
      }, 
      js: {
        files: 'javascript/portfolio.js',
        tasks: 'jshint'
      }
    },
    uglify: {
      my_target: {
        files: {
          'dest/output.min.js': ['javascript/*']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dest/output.css': ['css/styling.css']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'javascript/portfolio.js'],
      options: {
        globals: {
          angular: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  // Default task(s).
  grunt.registerTask('live', ['watch']);
  grunt.registerTask('release', ['sass', 'uglify', 'cssmin']);
  grunt.registerTask('default', ['sass']);

};