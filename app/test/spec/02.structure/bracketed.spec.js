define([
  'src/02.structure/bracketed'
], function(m) {
  'use strict';

  describe('02.structure.bracketed', function() {
    describe('isWellBracketed', function() {
      it('should return true for empty array', function() {
        expect(m.isWellBracketed([])).toBe(true);
      });
      it('should return false for array with odd length', function() {
        expect(m.isWellBracketed(['(', ')', ')', '(', ')'])).toBe(false);
      });
      it('should start with ( and end with )', function() {
        expect(m.isWellBracketed(['(', ')'])).toBe(true);
        expect(m.isWellBracketed([')', ')'])).toBe(false);
        expect(m.isWellBracketed(['(', '('])).toBe(false);
        expect(m.isWellBracketed([')', '('])).toBe(false);
      });
      it('should be well bracketed', function() {
        expect(m.isWellBracketed(['(',')','(',')'])).toBe(true);
        expect(m.isWellBracketed(['(','(',')',')','(',')'])).toBe(true);
        expect(m.isWellBracketed(['(','(','(','(','(','(',')','(','(',')',')',')',')',')',')',')','(',')']))
          .toBe(true);
        expect(m.isWellBracketed(['(','(','(','(','(','(',')','(',')',')',')',')',')',')',')',')','(',')']))
          .toBe(false);
      });
    });
    describe('isWellBracketed2', function() {
      it('should return true for empty array', function() {
        expect(m.isWellBracketed2([])).toBe(true);
      });
      it('should return false for array with odd length', function() {
        expect(m.isWellBracketed2(['(', ')', ']', '(', ')'])).toBe(false);
      });
      it('should start with ( or [] and end with ) or ]', function() {
        expect(m.isWellBracketed2(['(', ')'])).toBe(true);
        expect(m.isWellBracketed2([')', ')'])).toBe(false);
        expect(m.isWellBracketed2(['(', '('])).toBe(false);
        expect(m.isWellBracketed2([')', '('])).toBe(false);

        expect(m.isWellBracketed2(['[', ']'])).toBe(true);
        expect(m.isWellBracketed2([']', ']'])).toBe(false);
        expect(m.isWellBracketed2(['[', '['])).toBe(false);
        expect(m.isWellBracketed2([']', '['])).toBe(false);

        expect(m.isWellBracketed2(['(', ')', '[', ']'])).toBe(true);
        expect(m.isWellBracketed2(['(', '[', ')', ']'])).toBe(false);

      });
      it('should be well bracketed', function() {
        expect(m.isWellBracketed2(['(','[',']',')','(',')'])).toBe(true);
        expect(m.isWellBracketed2(['(','(','[','(','(','(',')','(','[',']',')',')',')',']',')',')','(',')']))
          .toBe(true);
        expect(m.isWellBracketed2(['(','(','[','(','(','(',')','(','[',']',')',')',']',')',')',')','(',')']))
          .toBe(false);
      });
    });
  });
});
