require.config({
  shim: {
    'jasmine' : {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps   : ['jasmine'],
      exports: 'jasmine-html'
    },
    'jasmine-console' : ['jasmine']
  },

  paths: {
    // Jamine
    'jasmine'        : 'bower_components/jasmine/lib/jasmine-core/jasmine',
    'jasmine-html'   : 'bower_components/jasmine/lib/jasmine-core/jasmine-html',
    'jasmine-console': 'bower_components/jasmine/lib/console/console',
    'jasmine-boot'   : 'test/init/boot_unit',

    // Specs
    'test-spec' : 'test/init/test-require.spec'
  }
});
