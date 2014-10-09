module.exports = {
  js: {
    files: [
      '<%= config.src_dir %>/**/*.js'
    ],
    tasks: ['jshint:all', 'file-creator:test-require-spec']
  },
  unit: {
    files: [
      '<%= config.spec_dir %>/**/*.spec.js'
    ],
    tasks: ['jshint:all', 'file-creator:test-require-spec']
  },
  spec_unit: {
    files: [
      '<%= config.app_dir %>/test/init/test-require.spec.js'
    ],
    options: {
      livereload: true,
    }
  }

};
