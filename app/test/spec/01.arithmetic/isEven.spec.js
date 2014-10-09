define([
  'src/isEven'
], function(m) {
  'use strict';

  describe('01.arithmetic.isEven', function() {
    it('should return ----true for an even number', function() {
      for (var i = 0; i < 1000; i += 2) {
        expect(m.isEven(i)).toBe(true);
      }
    });
    it('should return false for an odd number', function() {
      for (var i = 1; i < 1000; i += 2) {
        expect(m.isEven(i)).toBe(false);
      }
    });
  });
});
