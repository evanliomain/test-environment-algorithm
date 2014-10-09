module.exports = {
  options: {
    port: 9000,
    hostname: 'localhost'
  },
  unit: {
    options: {
      open      : 'http://localhost:9000/index.html',
//      keepalive: true,
      app_config: '<%= config %>',
      middleware: function (connect, options) {
        return [
          connect.static(options.app_config.app_dir)
        ];
      }
    }
  }
}
