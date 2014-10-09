define([
  'src/01.arithmetic/power'
], function(m) {
  'use strict';

  describe('01.arithmetic.pow', function() {
    it('should return squart number', function() {
      expect(m.pow(0, 2)).toBe(0);
      expect(m.pow(1, 2)).toBe(1);
      expect(m.pow(2, 2)).toBe(4);
      expect(m.pow(3, 2)).toBe(9);
      expect(m.pow(4, 2)).toBe(16);
      expect(m.pow(5, 2)).toBe(25);
      expect(m.pow(1578, 2)).toBe(2490084);
    });
    it('should return cube number', function() {
      expect(m.pow(0, 3)).toBe(0);
      expect(m.pow(1, 3)).toBe(1);
      expect(m.pow(2, 3)).toBe(8);
      expect(m.pow(3, 3)).toBe(27);
      expect(m.pow(4, 3)).toBe(64);
      expect(m.pow(5, 3)).toBe(125);
      expect(m.pow(1584, 3)).toBe(3944293056);
    });
    it('should return power', function() {
      expect(m.pow(0, 35)).toBe(0);
      expect(m.pow(1, 54)).toBe(1);
      expect(m.pow(2, 30)).toBe(1073741824);
      expect(m.pow(12, 7)).toBe(35831808);
    });
  });
});
