module.exports = function(grunt) {

  function loadConfig(cwd, path) {
    var glob   = require('glob');
    var object = {};
    var key;
    path = path || '*';

    glob.sync(path, {
      cwd : cwd
    }).forEach(function(option) {
      key         = option.replace(/\.js$/, '');
      key         = key.split('/').pop();
      object[key] = require(cwd + option);
    });

    return object;
  }

  // Load every grunt dependencies
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  var config = {
    config: {
      "app_dir"  : 'app',
      "src_dir"  : 'app/src',
      "spec_dir" : 'app/test/spec',
      "tmp_dir"  : '.tmp',
      "dist_dir" : 'build'
    },
    env: process.env
  };
  // Load every tasks config
  grunt.util._.extend(config, loadConfig("./tasks/" + '/'));

  grunt.initConfig(config);

  grunt.registerTask('unit', [
    'file-creator:test-require-spec',
    'jshint:all',
    'connect:unit',
    'concurrent:watch_unit'
  ]);

};
