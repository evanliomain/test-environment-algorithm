define([
  'src/01.arithmetic/isEven'
], function(m) {
  'use strict';

  describe('01.arithmetic.isEven', function() {
    it('should return true for an even number', function() {
      expect(m.isEven(0)).toBe(true);
      expect(m.isEven(2)).toBe(true);
      expect(m.isEven(4)).toBe(true);
      expect(m.isEven(6)).toBe(true);
      expect(m.isEven(8)).toBe(true);
    });
    it('should return false for an odd number', function() {
      expect(m.isEven(1)).toBe(false);
      expect(m.isEven(3)).toBe(false);
      expect(m.isEven(5)).toBe(false);
      expect(m.isEven(7)).toBe(false);
      expect(m.isEven(9)).toBe(false);
    });
  });
  describe('01.arithmetic.isEvenBasic', function() {
    it('should return true for an even number', function() {
      expect(m.isEvenBasic(0)).toBe(true);
      expect(m.isEvenBasic(2)).toBe(true);
      expect(m.isEvenBasic(4)).toBe(true);
      expect(m.isEvenBasic(6)).toBe(true);
      expect(m.isEvenBasic(8)).toBe(true);
    });
    it('should return false for an odd number', function() {
      expect(m.isEvenBasic(1)).toBe(false);
      expect(m.isEvenBasic(3)).toBe(false);
      expect(m.isEvenBasic(5)).toBe(false);
      expect(m.isEvenBasic(7)).toBe(false);
      expect(m.isEvenBasic(9)).toBe(false);
    });
  });
});
