define([
  'src/02.structure/array'
], function(m) {
  'use strict';

  describe('02.structure', function() {
    describe('array', function() {
      describe('length', function() {
        it('should return true for an even number', function() {
          expect(m.length([])).toBe(0);
          expect(m.length([1])).toBe(1);
          expect(m.length([2])).toBe(1);
          expect(m.length([1,2])).toBe(2);
          expect(m.length([0,1,2,3,4,5,6,7,8,9])).toBe(10);
        });
      });
      describe('isEmpty', function() {
        it('should return true on empty array', function() {
          expect(m.isEmpty([])).toBe(true);
        });
        it('should return false on non empty array', function() {
          expect(m.isEmpty([1])).toBe(true);
          expect(m.isEmpty([].push(1))).toBe(true);
        });
      });
    });
  });
});
