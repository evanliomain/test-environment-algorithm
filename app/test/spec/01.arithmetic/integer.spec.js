define([
  'src/01.arithmetic/integer'
], function(m) {
  'use strict';

  describe('01.arithmetic', function() {
    describe('integer', function() {
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
      describe('pow', function() {
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
      describe('module', function() {
        it('should return 1 for odd number', function() {
          expect(m.module(1, 2)).toBe(1);
          expect(m.module(3, 2)).toBe(1);
          expect(m.module(5, 2)).toBe(1);
          expect(m.module(11, 2)).toBe(1);
        });
        it('should be less than divisor', function() {
          expect(m.module(248, 43)).toBeLessThan(43);
        });
        it('should return the right module', function() {
          expect(m.module(3, 5)).toBe(3);
          expect(m.module(10, 6)).toBe(4);
          expect(m.module(18, 16)).toBe(2);
          expect(m.module(87613536, 1383)).toBe(486);
        });
      });
      describe('quotient', function() {
        it('should return n in 2n number', function() {
          expect(m.quotient(1, 2)).toBe(0);
          expect(m.quotient(3, 2)).toBe(1);
          expect(m.quotient(5, 2)).toBe(2);
          expect(m.quotient(11, 2)).toBe(5);
        });
        it('should return the right quotient', function() {
          expect(m.quotient(248, 43)).toBe(5);
          expect(m.quotient(3, 5)).toBe(0);
          expect(m.quotient(10, 6)).toBe(1);
          expect(m.quotient(18, 16)).toBe(1);
          expect(m.quotient(87613536, 1383)).toBe(63350);
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
    });
  });
});
