module.exports = {
  options: {
    openFlags: 'w'
  },
  "test-require-spec": {
    "app/test/init/test-require.spec.js": function(fs, fd, done) {
      var glob   = require('glob');
      var moment = require('moment');
      glob('app/test/spec/**/*.spec.js', function (err, files) {
        fs.writeSync(fd, '// auto-generated spec files.  DO NOT MODIFY\n');
        fs.writeSync(fd, '// Generated: '+
                     moment().format('YYYY/MM/DD, HH:mm:ss') +
                     '\n');
        fs.writeSync(fd, 'define(function () {\n');
        fs.writeSync(fd, '  return [\n');

        fs.writeSync(fd,
          files
          .map(function(filepath) {
            return "    '" + filepath.replace(/^app\//, '') + "'";
          })
          .join(",\n")
        );

        fs.writeSync(fd, '\n  ];\n});\n');
        done();
      });
    }
  }
}
