module.exports = {
  options: {
    jshintrc: true,
    force   : true
  },
  all: [
    '<%= config.app_dir %>/main_unit.js',
    '<%= config.app_dir %>/src/**/*.js',
    '<%= config.app_dir %>/test/**/*.js'
  ]
};
