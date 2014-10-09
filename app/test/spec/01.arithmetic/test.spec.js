define([
  'src/01.arithmetic/test'
], function(m) {
  'use strict';

  describe('01.arithmetic.test', function() {
    describe('isEven', function() {
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
    describe('isEvenBasic', function() {
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
    describe('isPrime', function() {
      it('should return true on prime number', function() {
        expect(m.isPrime(2)).toBe(true);
        expect(m.isPrime(3)).toBe(true);
        expect(m.isPrime(5)).toBe(true);
        expect(m.isPrime(7)).toBe(true);
        expect(m.isPrime(11)).toBe(true);
        expect(m.isPrime(13)).toBe(true);
        expect(m.isPrime(17)).toBe(true);
        expect(m.isPrime(19)).toBe(true);
        expect(m.isPrime(23)).toBe(true);
        expect(m.isPrime(29)).toBe(true);
        expect(m.isPrime(31)).toBe(true);
        expect(m.isPrime(37)).toBe(true);
        expect(m.isPrime(41)).toBe(true);
        expect(m.isPrime(43)).toBe(true);
        expect(m.isPrime(47)).toBe(true);
        expect(m.isPrime(53)).toBe(true);
        expect(m.isPrime(59)).toBe(true);
        expect(m.isPrime(61)).toBe(true);
        expect(m.isPrime(67)).toBe(true);
        expect(m.isPrime(71)).toBe(true);
        expect(m.isPrime(73)).toBe(true);
        expect(m.isPrime(79)).toBe(true);
        expect(m.isPrime(83)).toBe(true);
        expect(m.isPrime(89)).toBe(true);
        expect(m.isPrime(97)).toBe(true);
      });
      it('should return false on non prime number', function() {
        expect(m.isPrime(0)).toBe(false);
        expect(m.isPrime(1)).toBe(false);
        expect(m.isPrime(4)).toBe(false);
        expect(m.isPrime(6)).toBe(false);
        expect(m.isPrime(14)).toBe(false);
        expect(m.isPrime(50)).toBe(false);
        expect(m.isPrime(77)).toBe(false);
        expect(m.isPrime(81)).toBe(false);
        expect(m.isPrime(8765)).toBe(false);
      });
    });
    describe('isTriangular', function() {
      it('should return true on triangular number', function() {
        expect(m.isTriangular(0)).toBe(true);
        expect(m.isTriangular(1)).toBe(true);
        expect(m.isTriangular(3)).toBe(true);
        expect(m.isTriangular(6)).toBe(true);
        expect(m.isTriangular(10)).toBe(true);
        expect(m.isTriangular(15)).toBe(true);
        expect(m.isTriangular(21)).toBe(true);
        expect(m.isTriangular(28)).toBe(true);
        expect(m.isTriangular(36)).toBe(true);
        expect(m.isTriangular(45)).toBe(true);
        expect(m.isTriangular(55)).toBe(true);
        expect(m.isTriangular(66)).toBe(true);
      });
      it('should return false on non triangular number', function() {
        expect(m.isTriangular( 2)).toBe(false);
        expect(m.isTriangular( 4)).toBe(false);
        expect(m.isTriangular( 5)).toBe(false);
        expect(m.isTriangular( 7)).toBe(false);
        expect(m.isTriangular(59)).toBe(false);
      });
    });
    describe('isPerfect', function() {
      it('should return true on perfect number', function() {
        expect(m.isPerfect(   6)).toBe(true);
        expect(m.isPerfect(  28)).toBe(true);
        expect(m.isPerfect( 496)).toBe(true);
        expect(m.isPerfect(8128)).toBe(true);
      });
      it('should return false on non perfect number', function() {
        expect(m.isPerfect(1)).toBe(false);
        expect(m.isPerfect(2)).toBe(false);
        expect(m.isPerfect(3)).toBe(false);
        expect(m.isPerfect(12)).toBe(false);
      });
    });


  });
});
