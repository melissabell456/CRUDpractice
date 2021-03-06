module.exports = function(grunt){
  grunt.initConfig({
      jshint: {
          files: ['javascripts/**/*.js'],
          options: {
              predef: ['document', 'console', 'alert'],
              esnext: true,
              globalstrict: true,
              globals: {},
              browserify: true
          }
      },
      sass: {
          dist: {
              files: {
                  'stylesheets/main.css': 'SASS/main.scss'
              }
          }
      },
      watch: {
          javascripts: {
              files: ['javascripts/**/*.js'],
              tasks: ['jshint', 'browserify']
          },
          sass: {
              files: ['SASS/**/*.scss'],
              tasks: ['sass']
          }
      },
      browserify: {
          'dist/bundle.js': ['javascripts/main.js']
      }
  });
  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
}