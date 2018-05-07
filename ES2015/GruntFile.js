
module.exports = function(grunt) {

  grunt.initConfig({

      jshint: {
        files : ['destructure.js'],
        options: {
  				esnext: true
  			}
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

};
