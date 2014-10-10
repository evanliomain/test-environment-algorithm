define([
  'src/02.structure/array'
], function(m) {
  'use strict';

  describe('02.structure.array', function() {
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
    describe('sort', function() {
      it('should return an empty array when empty is provide', function() {
        expect(m.sort([])).toBe([]);
        expect(m.sort([1])).toBe([1]);
      });
      it('should return a sorted array', function() {
        expect(m.sort([9, 5, 8, 7, 6, 1, 2, 11]))
          .toBe([1, 2, 5, 6, 7, 8, 9, 11]);
      });
    });
    describe('decimalToBinary', function() {
      it('should convert 0 to 0', function() {
        expect(m.decimalToBinary(0)).toBe([0]);
      });
      it('should convert 1 to 1', function() {
        expect(m.decimalToBinary(1)).toBe([1]);
      });
      it('should convert 2 to 10', function() {
        expect(m.decimalToBinary(2)).toBe([1, 0]);
      });
      it('should convert decimal to binary', function() {
        expect(m.decimalToBinary(3)).toBe([1, 1]);
        expect(m.decimalToBinary(4)).toBe([1, 0, 0]);
        expect(m.decimalToBinary(5)).toBe([1, 0, 1]);
        expect(m.decimalToBinary(6)).toBe([1, 1, 0]);
        expect(m.decimalToBinary(7)).toBe([1, 1, 1]);
        expect(m.decimalToBinary(8)).toBe([1, 0, 0, 0]);
        expect(m.decimalToBinary(9)).toBe([1, 0, 0, 1]);
      });
    });
    describe('binaryToDecimal', function() {
      it('should convert 0 to 0', function() {
        expect(m.binaryToDecimal([0])).toBe(0);
      });
      it('should convert 1 to 1', function() {
        expect(m.binaryToDecimal([1])).toBe(1);
      });
      it('should convert 10 to 2', function() {
        expect(m.binaryToDecimal([1, 0])).toBe(2);
      });
      it('should convert binary to decimal', function() {
        expect(m.binaryToDecimal([1, 1])).toBe(3);
        expect(m.binaryToDecimal([1, 0, 0])).toBe(4);
        expect(m.binaryToDecimal([1, 0, 1])).toBe(5);
        expect(m.binaryToDecimal([1, 1, 0])).toBe(6);
        expect(m.binaryToDecimal([1, 1, 1])).toBe(7);
        expect(m.binaryToDecimal([1, 0, 0, 0])).toBe(8);
        expect(m.binaryToDecimal([1, 0, 0, 1])).toBe(9);
      });

    });
    describe('isPalindrom', function() {
      it('should test [] and [a] is a palindrom', function() {
        expect(m.isPalindrom([])).toBe(true);
        expect(m.isPalindrom([2])).toBe(true);
        expect(m.isPalindrom(['a'])).toBe(true);
      });
      it('should detect palindrom', function() {
        expect(m.isPalindrom(['a','m','a','n','a','p','l','a','n','a','c','a','n','a','l','a','p','a','n','a','m','a'])).toBe(true);
        expect(m.isPalindrom(['k','a', 'y', 'a', 'k'])).toBe(true);
        expect(m.isPalindrom(['r','a', 'd', 'a', 'r'])).toBe(true);
      });
      it('should detect non palindrom', function() {
        expect(m.isPalindrom(['a','z', 'e', 'r', 't','y'])).toBe(false);
        expect(m.isPalindrom(['t','e', 's', 't'])).toBe(false);
        expect(m.isPalindrom(['t','a','e','i','o','u','y','z','u','o','i','e','a','t'])).toBe(false);
      });
    });
    describe('reverse', function() {
      it('should reverse empty array with empty array', function() {
        expect(m.reverse([])).toBe([]);
      });
      it('should reverse 1 item array with 1 item array', function() {
        expect(m.reverse([1])).toBe([1]);
        expect(m.reverse([2])).toBe([2]);
      });
      it('should reverse 2 item array with 2 item array', function() {
        expect(m.reverse([1, 2])).toBe([2, 1]);
        expect(m.reverse([87, 56])).toBe([56, 87]);
      });
      it('should reverse an array', function() {
        expect(m.reverse([1,2,3,4,5,6,7,8,9,10])).toBe([10,9,8,7,6,5,4,3,2,1]);
        expect(m.reverse([87,56,45,697,3544132,257])).toBe([257,3544132,697,45, 56, 87]);
      });
    });
  });
});
