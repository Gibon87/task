module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },
    autoprefixer: {
      dist: {
        files: {
          'css/style.css': 'css/style.css'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.sass',
        tasks: ['sass']
      }
    }
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  // Default task(s).
  grunt.registerTask('default', ["sass", "autoprefixer", "watch"]);
};
