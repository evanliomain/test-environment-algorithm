define([
  'src/02.structure/expression'
], function(m) {
  'use strict';

  describe('02.structure.expression', function() {
    describe('isWellBracketed', function() {
      it('should return true for empty array', function() {
        expect(m.isWellBracketed('')).toBe(true);
      });
      it('should return false for array with odd length', function() {
        expect(m.isWellBracketed('())()')).toBe(false);
      });
      it('should start with ( and end with )', function() {
        expect(m.isWellBracketed('()')).toBe(true);
        expect(m.isWellBracketed('))')).toBe(false);
        expect(m.isWellBracketed('((')).toBe(false);
        expect(m.isWellBracketed(')(')).toBe(false);
      });
      it('should be well bracketed', function() {
        expect(m.isWellBracketed('()()')).toBe(true);
        expect(m.isWellBracketed('(())()')).toBe(true);
        expect(m.isWellBracketed('(((((()(()))))))()'))
          .toBe(true);
        expect(m.isWellBracketed('(((((()())))))))()'))
          .toBe(false);
      });
    });
    describe('isWellBracketed2', function() {
      it('should return true for empty array', function() {
        expect(m.isWellBracketed2('')).toBe(true);
      });
      it('should return false for array with odd length', function() {
        expect(m.isWellBracketed2('()]()')).toBe(false);
      });
      it('should start with ( or [] and end with ) or ]', function() {
        expect(m.isWellBracketed2('()')).toBe(true);
        expect(m.isWellBracketed2('))')).toBe(false);
        expect(m.isWellBracketed2('((')).toBe(false);
        expect(m.isWellBracketed2(')(')).toBe(false);
        expect(m.isWellBracketed2('[]')).toBe(true);
        expect(m.isWellBracketed2(']]')).toBe(false);
        expect(m.isWellBracketed2('[[')).toBe(false);
        expect(m.isWellBracketed2('][')).toBe(false);
        expect(m.isWellBracketed2('()[]')).toBe(true);
        expect(m.isWellBracketed2('[]()')).toBe(true);
        expect(m.isWellBracketed2('([)]')).toBe(false);
      });
      it('should be well bracketed', function() {
        expect(m.isWellBracketed2('([])()')).toBe(true);
        expect(m.isWellBracketed2('(([((()([])))]))()')).toBe(true);
        expect(m.isWellBracketed2('(([((()([]))])))()')).toBe(false);
      });
    });
    describe('isValidExpression', function() {
      it('should unvalid an empty expression', function() {
        expect(m.isValidExpression('')).toBe(false);
      });
      it('should well valid 1 character expression', function() {
        expect(m.isValidExpression('(')).toBe(false);
        expect(m.isValidExpression(')')).toBe(false);
        expect(m.isValidExpression('+')).toBe(false);
        expect(m.isValidExpression('-')).toBe(false);
        expect(m.isValidExpression('*')).toBe(false);
        expect(m.isValidExpression('/')).toBe(false);
        expect(m.isValidExpression('x')).toBe(true);
        expect(m.isValidExpression('y')).toBe(true);
        expect(m.isValidExpression('1')).toBe(true);
        expect(m.isValidExpression('2')).toBe(true);
        expect(m.isValidExpression('3')).toBe(true);
        expect(m.isValidExpression('4')).toBe(true);
        expect(m.isValidExpression('5')).toBe(true);
        expect(m.isValidExpression('6')).toBe(true);
        expect(m.isValidExpression('7')).toBe(true);
        expect(m.isValidExpression('8')).toBe(true);
        expect(m.isValidExpression('9')).toBe(true);
      });
      it('should well valid 2 character expression', function() {
        expect(m.isValidExpression('()')).toBe(false);
        expect(m.isValidExpression(')(')).toBe(false);
        expect(m.isValidExpression('++')).toBe(false);
        expect(m.isValidExpression('--')).toBe(false);
        expect(m.isValidExpression('//')).toBe(false);
        expect(m.isValidExpression('**')).toBe(false);
        expect(m.isValidExpression('10')).toBe(true);
        expect(m.isValidExpression('99')).toBe(true);
      });
      it('should well valid a simple operation', function() {
        expect(m.isValidExpression('1+1')).toBe(true);
        expect(m.isValidExpression('1+x')).toBe(true);
        expect(m.isValidExpression('1-1')).toBe(true);
        expect(m.isValidExpression('2*5')).toBe(true);
        expect(m.isValidExpression('8/2')).toBe(true);
        expect(m.isValidExpression('(/2')).toBe(false);
        expect(m.isValidExpression('*25')).toBe(false);
        expect(m.isValidExpression('x/y')).toBe(true);
        expect(m.isValidExpression('x*y')).toBe(true);
        expect(m.isValidExpression('x-y')).toBe(true);
        expect(m.isValidExpression('x+y')).toBe(true);
      });
      it('should well valid a complexe expression', function() {
        expect(m.isValidExpression('(1+(x-5))')).toBe(true);
        expect(m.isValidExpression('(((8-x)+(x*y))/(x-(5*y))')).toBe(true);
        expect(m.isValidExpression('(((8-x))+(x*y))/(x-(5*y))')).toBe(false);
      });
    });
    describe('expressionToTree', function() {
      var has;
      beforeEach(function() {
        has = jasmine.objectContaining;
      });
      it('should throw exception on an empty expression', function() {
        expect(m.expressionToTree('')).toThrow();
      });
      it('should well transform 1 character expression', function() {
        expect(m.expressionToTree('(')).toThrow();
        expect(m.expressionToTree(')')).toThrow();
        expect(m.expressionToTree('+')).toThrow();
        expect(m.expressionToTree('-')).toThrow();
        expect(m.expressionToTree('*')).toThrow();
        expect(m.expressionToTree('/')).toThrow();
        expect(m.expressionToTree('x')).toEqual(has({value:'x'}));
        expect(m.expressionToTree('y')).toEqual(has({value:'y'}));
        expect(m.expressionToTree('1')).toEqual(has({value:1}));
        expect(m.expressionToTree('2')).toEqual(has({value:2}));
        expect(m.expressionToTree('3')).toEqual(has({value:3}));
        expect(m.expressionToTree('4')).toEqual(has({value:4}));
        expect(m.expressionToTree('5')).toEqual(has({value:5}));
        expect(m.expressionToTree('6')).toEqual(has({value:6}));
        expect(m.expressionToTree('7')).toEqual(has({value:7}));
        expect(m.expressionToTree('8')).toEqual(has({value:8}));
        expect(m.expressionToTree('9')).toEqual(has({value:9}));
      });
      xit('should well transform 2 character expression', function() {
        expect(m.expressionToTree('()')).toThrow();
        expect(m.expressionToTree(')(')).toThrow();
        expect(m.expressionToTree('++')).toThrow();
        expect(m.expressionToTree('--')).toThrow();
        expect(m.expressionToTree('//')).toThrow();
        expect(m.expressionToTree('**')).toThrow();
        expect(m.expressionToTree('10')).toEqual(has({value:10}));
        expect(m.expressionToTree('99')).toEqual(has({value:99}));
      });
      it('should well transform a simple operation', function() {
        expect(m.expressionToTree('1+1')).toEqual(has({operator:'+',operandLeft:{value:1}, operandRight:{value:1}}));
        expect(m.expressionToTree('1+x')).toEqual(has({operator:'+',operandLeft:{value:1}, operandRight:{value:'x'}}));
        expect(m.expressionToTree('1-1')).toEqual(has({operator:'-',operandLeft:{value:1}, operandRight:{value:1}}));
        expect(m.expressionToTree('2*5')).toEqual(has({operator:'*',operandLeft:{value:2}, operandRight:{value:5}}));
        expect(m.expressionToTree('8/2')).toEqual(has({operator:'/',operandLeft:{value:8}, operandRight:{value:2}}));
        expect(m.expressionToTree('(/2')).toThrow();
        expect(m.expressionToTree('*25')).toThrow();
        expect(m.expressionToTree('x/y')).toEqual(has({operator:'/',operandLeft:{value:'x'}, operandRight:{value:'y'}}));
        expect(m.expressionToTree('x*y')).toEqual(has({operator:'*',operandLeft:{value:'x'}, operandRight:{value:'y'}}));
        expect(m.expressionToTree('x-y')).toEqual(has({operator:'-',operandLeft:{value:'x'}, operandRight:{value:'y'}}));
        expect(m.expressionToTree('x+y')).toEqual(has({operator:'+',operandLeft:{value:'x'}, operandRight:{value:'y'}}));
      });
      it('should well transform a complexe expression', function() {
        expect(m.expressionToTree('(1+(x-5))'))
          .toEqual(has({
            operator    :'+',
            operandLeft :{value:1},
            operandRight:{
              operator    :'-',
              operandLeft :{value:'x'},
              operandRight:{value:5}
            }
          }));
        expect(m.expressionToTree('(((8-x)+(x*y))/(x-(5*y))'))
          .toEqual(has({
            operator    :'/',
            operandLeft :{
              operator    :'+',
              operandLeft :{
                operator    :'-',
                operandLeft :{value:8},
                operandRight:{value:'x'}
              },
              operandRight:{
                operator    :'*',
                operandLeft :{value:'x'},
                operandRight:{value:'y'}
              }
            },
            operandRight:{
              operator    :'-',
              operandLeft :{value:'x'},
              operandRight:{
                operator    :'*',
                operandLeft :{value:5},
                operandRight:{value:'y'}
              }
            }
          }));
        expect(m.expressionToTree('(((8-x))+(x*y))/(x-(5*y))')).toThrow();
      });
    });
    describe('evaluateExpression', function() {
      it('should throw exception on an empty expression', function() {
        expect(m.isValidExpression('', 1, 2)).toThrow();
      });
      it('should well evaluate 1 character expression', function() {
        expect(m.isValidExpression('(', 1, 2)).toThrow();
        expect(m.isValidExpression(')', 1, 2)).toThrow();
        expect(m.isValidExpression('+', 1, 2)).toThrow();
        expect(m.isValidExpression('-', 1, 2)).toThrow();
        expect(m.isValidExpression('*', 1, 2)).toThrow();
        expect(m.isValidExpression('/', 1, 2)).toThrow();
        expect(m.isValidExpression('x', 1, 2)).toBe(1);
        expect(m.isValidExpression('y', 1, 2)).toBe(2);
        expect(m.isValidExpression('1', 1, 2)).toBe(1);
        expect(m.isValidExpression('2', 1, 2)).toBe(2);
        expect(m.isValidExpression('3', 1, 2)).toBe(3);
        expect(m.isValidExpression('4', 1, 2)).toBe(4);
        expect(m.isValidExpression('5', 1, 2)).toBe(5);
        expect(m.isValidExpression('6', 1, 2)).toBe(6);
        expect(m.isValidExpression('7', 1, 2)).toBe(7);
        expect(m.isValidExpression('8', 1, 2)).toBe(8);
        expect(m.isValidExpression('9', 1, 2)).toBe(9);
      });
      it('should well evaluate 2 character expression', function() {
        expect(m.isValidExpression('()', 1, 2)).toThrow();
        expect(m.isValidExpression(')(', 1, 2)).toThrow();
        expect(m.isValidExpression('++', 1, 2)).toThrow();
        expect(m.isValidExpression('--', 1, 2)).toThrow();
        expect(m.isValidExpression('//', 1, 2)).toThrow();
        expect(m.isValidExpression('**', 1, 2)).toThrow();
        expect(m.isValidExpression('10', 1, 2)).toBe(10);
        expect(m.isValidExpression('99', 1, 2)).toBe(99);
      });
      it('should well evaluate a simple operation', function() {
        expect(m.isValidExpression('1+1', 1, 2)).toBe(2);
        expect(m.isValidExpression('1+x', 1, 2)).toBe(2);
        expect(m.isValidExpression('1-1', 1, 2)).toBe(0);
        expect(m.isValidExpression('2*5', 1, 2)).toBe(10);
        expect(m.isValidExpression('8/2', 1, 2)).toBe(4);
        expect(m.isValidExpression('(/2', 1, 2)).toThrow();
        expect(m.isValidExpression('*25', 1, 2)).toThrow();
        expect(m.isValidExpression('x/y', 4, 2)).toBe(2);
        expect(m.isValidExpression('x*y', 3, 2)).toBe(6);
        expect(m.isValidExpression('x-y', 7, 5)).toBe(2);
        expect(m.isValidExpression('x+y', 5, 7)).toBe(12);
      });
      it('should well evaluate a complexe expression', function() {
        expect(m.isValidExpression('(1+(x-5))', 1, 2)).toBe(-3);
        expect(m.isValidExpression('(((8-x)+(x*y))/(x-(5*y))', 1, 2)).toBe(-1);
        expect(m.isValidExpression('(((8-x))+(x*y))/(x-(5*y))', 1, 2)).toThrow();
      });
    });
  });
});
