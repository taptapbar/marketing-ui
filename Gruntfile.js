module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.initConfig({
    ember_templates: {
      compile: {
        options: {
          templateName: function(sourceFile) {
            return sourceFile.replace(/templates\//, '');
          }
        },
        files: {
          "templates/templates.js": "templates/*.handlebars"
        }
      }
    },
    
    sass: {
      dist: {
        files: {
          'css/app.css': [
            'css/main.scss',
            'css/filter.scss',
            'css/multiview.scss',
            'css/timeframe.scss'
          ]
        }
      }
    },
  
    watch: {
      ember_templates: {
        files: 'templates/**/*.handlebars',
        tasks: ['ember_templates']
      },
      
      sass: {
        files: 'css/*.scss',
        tasks: ['sass']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.registerTask('default', ['ember_templates', 'sass']);
};