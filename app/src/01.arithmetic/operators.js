define(function() {
  'use strict';
  return {
    /**
     * Get the integer n^m, or n*n*n*...*n (m times)
     * @param  {integer} n the indice
     * @param  {integer} m the exposant
     * @return {integer} n^m
     */
    pow : function(n, m) {
      // TODO
      return null;
    },
    /**
     * Get the module in the euclidean division a/b
     * @param  {integer} a
     * @param  {integer} b divisor
     * @return {integer} r as it exist q as a = qb + r
     */
    module : function(a, b) {
      // TODO
      return null;
    },
    /**
     * Get the quotient in the euclidean division a/b
     * @param  {integer} a
     * @param  {integer} b divisor
     * @return {integer} q as it exist r as a = qb + r
     */
    quotient : function(a, b) {
      // TODO
      return null;
    },
    /**
     * lowest common multiple of a and b
     * @param  {integer} a
     * @param  {integer} b
     * @return {integer} the lowest common multiple of a and b
     */
    lcm : function(a, b) {
      // TODO
      return null;
    },
    /**
     * highest common factor of a and b
     * @param  {integer} a
     * @param  {integer} b
     * @return {integer} highest common factor of a and b
     */
    hcf : function(a, b) {
      // TODO
      return null;
    },
    /**
     * residue n
     * @param  {integer} n
     * @return {integer} sum of all digit of n, until the sum has 1 digit
     */
    residue : function(n) {
      // TODO
      return null;
    },
    /**
     * Return the n-ieme term of the fibonacci suite.
     * Code it with just 5 lignes of code
     * @param  {[type]} n
     * @return {[type]}   fibonacci(n) = fibonacci(n-1) + fibonacci(n-2);
     * fibonacci(0) = 1 ; fibonacci(1) = 1
     */
    fibonacci : function (n) {
      // TODO
      return null;
    },
    /**
     * Return the n-ieme term of the fibonacci suite.
     * Try to improve the complexity of the fibonacci implementation
     * @param  {integer} n
     * @return {integer}   fibonacci(n) = fibonacci(n-1) + fibonacci(n-2);
     * fibonacci(0) = 1 ; fibonacci(1) = 1
     */
    fibonacci2 : function (n) {
      // TODO
      return null;
    },
    /**
     * Return the result of the ackerman function;
     * @param  {integer} m
     * @param  {integer} n
     * @return {integer}   ackermann(m, n) =
     * - if m = 0 : n + 1
     * - if 0 < m and n = 0 : ackermann(m - 1, 1)
     * - if 0 < m and 0 v n : ackermann(m - 1, ackermann(m, n - 1))
     */
    ackermann : function (m, n) {
      // TODO
      return null;
    }
  };
});

