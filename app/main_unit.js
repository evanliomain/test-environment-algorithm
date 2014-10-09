define([
  'jasmine-boot',
  'test-spec'
], function (boot, specs) {
  return function() {
    var start = boot();
    require(specs, function () {
      start();
    });
  };
});
