/** @module structure.expression */
define(function() {
  'use strict';
  var InvalidExpressionException = function(index) {
    return 'InvalidExpressionException: expression malformed at $index position'
      .replace('$index', index);
  };
  return {
    /**
     * Test if the given array of bracket is well formed.
     * @param  {string} a an array with just ( and ) symbole
     * @return {Boolean} true if it's well bracketed
     * @example isWellBracketed('(()())')  = true
     * @example isWellBracketed('())())') = false
     *
     */
    isWellBracketed : function(a) {
      // TODO
      return null;
    },
    /**
     * Test if the given array of bracket is well formed
     * @param  {string} a an array with just (, ), [, ] symbole
     * @return {Boolean} true if it's well bracketed
     * @example isWellBracketed2('([]())') = true
     * @example isWellBracketed2('())())') = false
     *
     */
    isWellBracketed2 : function(a) {
      // TODO
      return null;
    },
    /**
     * Valid the expression
     * @param  {string}  expression a string representing an expression with symbole (,),+,-,/,*,{integer},x,y
     * @return {Boolean}            true if expression can be evaluate, false else
     */
    isValidExpression : function (expression) {
      // TODO
      return null;
    },

    /**
     * Return the transformation of the expression into a tree
     * @param  {string} expression a string representing an expression with symbole (,),+,-,/,*,{integer},x,y
     * @return {Tree}              the tree representration of the expression
     * @example expressionToTree('1')   = {value:1}
     * @example expressionToTree('x')   = {value:'x'}
     * @example ```
     * expressionToTree('1+8') = {
     *   operator     : '+',
     *   operandLeft  : {value:1},
     *   operandRight : {value:8}
     * }
     * ```
     * @example ```
     * expressionToTree('1+(2*x)') = {
     *   operator     : '+',
     *   operandLeft  : {value:1},
     *   operandRight : {
     *     operator     : '*',
     *     operandLeft  : {value:2},
     *     operandRight : {value:'x'}
     *   }
     * }
     * ```
     * @throws {InvalidExpressionException} If expression is invalid
     */
    expressionToTree : function (expression) {
      // TODO
      // throw InvalidExpressionException(0);
      return null;
    },
    /**
     * Evaluate an expression
     * @param  {string}  expression a string representing an expression with symbole (,),+,-,/,*,{integer}
     * @param  {integer} x          the x value
     * @param  {integer} y          the y value
     * @return {Boolean}            the result of the compute of the expression
     * @throws {InvalidExpressionException} If expression is invalid
     */
    evaluateExpression : function (expression, x, y) {
      // TODO
      // throw InvalidExpressionException(0);
      return null;
    }
  };
});
