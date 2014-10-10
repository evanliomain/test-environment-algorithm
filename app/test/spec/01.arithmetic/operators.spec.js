define([
  'src/01.arithmetic/operators'
], function(m) {
  'use strict';

  describe('01.arithmetic.operators', function() {
    describe('pow', function() {
      it('should return squart number', function() {
        expect(m.pow(   0, 2)).toBe(0);
        expect(m.pow(   1, 2)).toBe(1);
        expect(m.pow(   2, 2)).toBe(4);
        expect(m.pow(   3, 2)).toBe(9);
        expect(m.pow(   4, 2)).toBe(16);
        expect(m.pow(   5, 2)).toBe(25);
        expect(m.pow(1578, 2)).toBe(2490084);
      });
      it('should return cube number', function() {
        expect(m.pow(   0, 3)).toBe(0);
        expect(m.pow(   1, 3)).toBe(1);
        expect(m.pow(   2, 3)).toBe(8);
        expect(m.pow(   3, 3)).toBe(27);
        expect(m.pow(   4, 3)).toBe(64);
        expect(m.pow(   5, 3)).toBe(125);
        expect(m.pow(1584, 3)).toBe(3944293056);
      });
      it('should return power', function() {
        expect(m.pow( 0, 35)).toBe(0);
        expect(m.pow( 1, 54)).toBe(1);
        expect(m.pow( 2, 30)).toBe(1073741824);
        expect(m.pow(12,  7)).toBe(35831808);
      });
    });
    describe('module', function() {
      it('should return 1 for odd number', function() {
        expect(m.module( 1, 2)).toBe(1);
        expect(m.module( 3, 2)).toBe(1);
        expect(m.module( 5, 2)).toBe(1);
        expect(m.module(11, 2)).toBe(1);
      });
      it('should be less than divisor', function() {
        expect(m.module(248, 43)).toBeLessThan(43);
      });
      it('should return the right module', function() {
        expect(m.module(       3,    5)).toBe(3);
        expect(m.module(      10,    6)).toBe(4);
        expect(m.module(      18,   16)).toBe(2);
        expect(m.module(87613536, 1383)).toBe(486);
      });
    });
    describe('quotient', function() {
      it('should return n in 2n number', function() {
        expect(m.quotient( 1, 2)).toBe(0);
        expect(m.quotient( 3, 2)).toBe(1);
        expect(m.quotient( 5, 2)).toBe(2);
        expect(m.quotient(11, 2)).toBe(5);
      });
      it('should return the right quotient', function() {
        expect(m.quotient(     248,   43)).toBe(5);
        expect(m.quotient(       3,    5)).toBe(0);
        expect(m.quotient(      10,    6)).toBe(1);
        expect(m.quotient(      18,   16)).toBe(1);
        expect(m.quotient(87613536, 1383)).toBe(63350);
      });
    });
    describe('lcm', function() {
      it('should return a*b if a and b are prime', function() {
        expect(m.lcm( 2,  3)).toBe(6);
        expect(m.lcm( 5, 11)).toBe(11);
        expect(m.lcm(17, 23)).toBe(391);
      });
      it('should be less than a*b + 1', function() {
        expect(m.lcm( 60, 168)).toBeLessThan( 60 * 168 + 1);
        expect(m.lcm( 87, 195)).toBeLessThan( 87 * 195 + 1);
        expect(m.lcm(501, 503)).toBeLessThan(501 * 503 + 1);
      });
      it('should return the lower common multiplicator', function() {
        expect(m.lcm(60, 168)).toBe(840);
      });
    });
    describe('hcf', function() {
      it('should return 1 if a and b are prime', function() {
        expect(m.lcm( 2,  3)).toBe(1);
        expect(m.lcm( 5, 11)).toBe(1);
        expect(m.lcm(17, 23)).toBe(1);
      });
      it('should be less or equal than the minimum of a, b', function() {
        expect(m.lcm( 60, 168)).toBeLessThan( 60 + 1);
        expect(m.lcm( 87, 195)).toBeLessThan( 87 + 1);
        expect(m.lcm(501, 503)).toBeLessThan(501 + 1);
      });
      it('should return the highest common factor', function() {
        expect(m.lcm(12, 15)).toBe(3);
      });
    });
    describe('hcf', function() {
      it('should return 9 if n is a multiple of 9', function() {
        expect(m.residue( 1 * 9)).toBe(9);
        expect(m.residue( 2 * 9)).toBe(9);
        expect(m.residue( 3 * 9)).toBe(9);
        expect(m.residue( 4 * 9)).toBe(9);
        expect(m.residue( 5 * 9)).toBe(9);
        expect(m.residue( 6 * 9)).toBe(9);
        expect(m.residue( 7 * 9)).toBe(9);
        expect(m.residue( 8 * 9)).toBe(9);
        expect(m.residue( 9 * 9)).toBe(9);
        expect(m.residue(10 * 9)).toBe(9);
        expect(m.residue(11 * 9)).toBe(9);
      });
      it('should be between 0 and 10', function() {
        expect(m.residue(6288464567413694546)).toBeLessThan(10);
        expect(m.residue(6288464567413694546)).toBeGreaterThan(0);
      });
      it('should return the sum of digit of n', function() {
        expect(m.residue(    6587158)).toBe(4);
        expect(m.residue(57823184716)).toBe(7);
      });
    });
    describe('fibonacci', function() {
      it('should return 1 when 0', function() {
        expect(m.fibonacci(0)).toBe(1);
      });
      it('should return 1 when 1', function() {
        expect(m.fibonacci(0)).toBe(1);
      });
      it('should return fibonacci(n-1) + fibonacci(n-2)', function() {
        expect(m.fibonacci(2)).toBe(2);
        expect(m.fibonacci(3)).toBe(3);
        expect(m.fibonacci(4)).toBe(5);
        expect(m.fibonacci(5)).toBe(8);
        expect(m.fibonacci(6)).toBe(13);
        expect(m.fibonacci(7)).toBe(21);
        expect(m.fibonacci(8)).toBe(44);
        expect(m.fibonacci(9)).toBe(55);
      });
    });
    describe('fibonacci2', function() {
      it('should return 1 when 0', function() {
        expect(m.fibonacci2(0)).toBe(1);
      });
      it('should return 1 when 1', function() {
        expect(m.fibonacci2(0)).toBe(1);
      });
      it('should return fibonacci2(n-1) + fibonacci2(n-2)', function() {
        expect(m.fibonacci2(2)).toBe(2);
        expect(m.fibonacci2(3)).toBe(3);
        expect(m.fibonacci2(4)).toBe(5);
        expect(m.fibonacci2(5)).toBe(8);
        expect(m.fibonacci2(6)).toBe(13);
        expect(m.fibonacci2(7)).toBe(21);
        expect(m.fibonacci2(8)).toBe(44);
        expect(m.fibonacci2(9)).toBe(55);
      });
    });
  });
});
