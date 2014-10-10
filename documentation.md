#Index

**Modules**

* [arithmetic.operator](#arithmetic.module_operator)
  * [operator~pow(n, m)](#arithmetic.module_operator..pow)
  * [operator~module(a, b)](#arithmetic.module_operator..module)
  * [operator~quotient(a, b)](#arithmetic.module_operator..quotient)
  * [operator~lcm(a, b)](#arithmetic.module_operator..lcm)
  * [operator~hcf(a, b)](#arithmetic.module_operator..hcf)
  * [operator~residue(n)](#arithmetic.module_operator..residue)
  * [operator~fibonacci(n)](#arithmetic.module_operator..fibonacci)
  * [operator~fibonacci2(n)](#arithmetic.module_operator..fibonacci2)
  * [operator~ackermann(m, n)](#arithmetic.module_operator..ackermann)
* [arithmetic.test](#arithmetic.module_test)
  * [test~isEven(n)](#arithmetic.module_test..isEven)
  * [test~isEvenBasic(n)](#arithmetic.module_test..isEvenBasic)
  * [test~isPrime(n)](#arithmetic.module_test..isPrime)
  * [test~isTriangular(n)](#arithmetic.module_test..isTriangular)
  * [test~isPerfect(n)](#arithmetic.module_test..isPerfect)
* [structure.array](#structure.module_array)
  * [array~length(a)](#structure.module_array..length)
  * [array~isEmpty(a)](#structure.module_array..isEmpty)
  * [array~sort(a)](#structure.module_array..sort)
  * [array~binaryToDecimal(a)](#structure.module_array..binaryToDecimal)
  * [array~isPalindrom(a)](#structure.module_array..isPalindrom)
  * [array~reverse(a)](#structure.module_array..reverse)
* [structure.expression](#structure.module_expression)
  * [expression~isWellBracketed(a)](#structure.module_expression..isWellBracketed)
  * [expression~isWellBracketed2(a)](#structure.module_expression..isWellBracketed2)
  * [expression~isValidExpression(expression)](#structure.module_expression..isValidExpression)
  * [expression~expressionToTree(expression)](#structure.module_expression..expressionToTree)
  * [expression~evaluateExpression(expression, x, y)](#structure.module_expression..evaluateExpression)
 
<a name="arithmetic.module_operator"></a>
#arithmetic.operator
**Members**

* [arithmetic.operator](#arithmetic.module_operator)
  * [operator~pow(n, m)](#arithmetic.module_operator..pow)
  * [operator~module(a, b)](#arithmetic.module_operator..module)
  * [operator~quotient(a, b)](#arithmetic.module_operator..quotient)
  * [operator~lcm(a, b)](#arithmetic.module_operator..lcm)
  * [operator~hcf(a, b)](#arithmetic.module_operator..hcf)
  * [operator~residue(n)](#arithmetic.module_operator..residue)
  * [operator~fibonacci(n)](#arithmetic.module_operator..fibonacci)
  * [operator~fibonacci2(n)](#arithmetic.module_operator..fibonacci2)
  * [operator~ackermann(m, n)](#arithmetic.module_operator..ackermann)

<a name="arithmetic.module_operator..pow"></a>
##operator~pow(n, m)
Get the integer n^m, or n*n*n*...*n (m times)

**Params**

- n `integer` - the indice  
- m `integer` - the exposant  

**Scope**: inner function of [operator](#arithmetic.module_operator)  
**Returns**: `integer` - n^m  
<a name="arithmetic.module_operator..module"></a>
##operator~module(a, b)
Get the module in the euclidean division a/b

**Params**

- a `integer`  
- b `integer` - divisor  

**Scope**: inner function of [operator](#arithmetic.module_operator)  
**Returns**: `integer` - r as it exist q as a = qb + r  
<a name="arithmetic.module_operator..quotient"></a>
##operator~quotient(a, b)
Get the quotient in the euclidean division a/b

**Params**

- a `integer`  
- b `integer` - divisor  

**Scope**: inner function of [operator](#arithmetic.module_operator)  
**Returns**: `integer` - q as it exist r as a = qb + r  
<a name="arithmetic.module_operator..lcm"></a>
##operator~lcm(a, b)
lowest common multiple of a and b

**Params**

- a `integer`  
- b `integer`  

**Scope**: inner function of [operator](#arithmetic.module_operator)  
**Returns**: `integer` - the lowest common multiple of a and b  
<a name="arithmetic.module_operator..hcf"></a>
##operator~hcf(a, b)
highest common factor of a and b

**Params**

- a `integer`  
- b `integer`  

**Scope**: inner function of [operator](#arithmetic.module_operator)  
**Returns**: `integer` - highest common factor of a and b  
<a name="arithmetic.module_operator..residue"></a>
##operator~residue(n)
residue n

**Params**

- n `integer`  

**Scope**: inner function of [operator](#arithmetic.module_operator)  
**Returns**: `integer` - sum of all digit of n, until the sum has 1 digit  
<a name="arithmetic.module_operator..fibonacci"></a>
##operator~fibonacci(n)
Return the n-ieme term of the fibonacci suite.
Code it with just 5 lignes of code

**Params**

- n `integer`  

**Scope**: inner function of [operator](#arithmetic.module_operator)  
**Returns**: `integer` - fibonacci(n) = fibonacci(n-1) + fibonacci(n-2);
fibonacci(0) = 1 ; fibonacci(1) = 1  
<a name="arithmetic.module_operator..fibonacci2"></a>
##operator~fibonacci2(n)
Return the n-ieme term of the fibonacci suite.
Try to improve the complexity of the fibonacci implementation

**Params**

- n `integer`  

**Scope**: inner function of [operator](#arithmetic.module_operator)  
**Returns**: `integer` - fibonacci(n) = fibonacci(n-1) + fibonacci(n-2);
fibonacci(0) = 1 ; fibonacci(1) = 1  
<a name="arithmetic.module_operator..ackermann"></a>
##operator~ackermann(m, n)
Return the result of the ackerman function;

**Params**

- m `integer`  
- n `integer`  

**Scope**: inner function of [operator](#arithmetic.module_operator)  
**Returns**: `integer` - ackermann(m, n) =
- if m = 0 : n + 1
- if 0 < m and n = 0 : ackermann(m - 1, 1)
- if 0 < m and 0 v n : ackermann(m - 1, ackermann(m, n - 1))  
<a name="arithmetic.module_test"></a>
#arithmetic.test
**Members**

* [arithmetic.test](#arithmetic.module_test)
  * [test~isEven(n)](#arithmetic.module_test..isEven)
  * [test~isEvenBasic(n)](#arithmetic.module_test..isEvenBasic)
  * [test~isPrime(n)](#arithmetic.module_test..isPrime)
  * [test~isTriangular(n)](#arithmetic.module_test..isTriangular)
  * [test~isPerfect(n)](#arithmetic.module_test..isPerfect)

<a name="arithmetic.module_test..isEven"></a>
##test~isEven(n)
test if n is even
Code it with just 1 ligne of code

**Params**

- n `integer`  

**Scope**: inner function of [test](#arithmetic.module_test)  
**Returns**: `Boolean` - true if n is a multiplle of 2, else false  
<a name="arithmetic.module_test..isEvenBasic"></a>
##test~isEvenBasic(n)
test if n is even
Code it with no euclidian operator

**Params**

- n `integer`  

**Scope**: inner function of [test](#arithmetic.module_test)  
**Returns**: `Boolean` - true if n is a multiplle of 2, else false  
<a name="arithmetic.module_test..isPrime"></a>
##test~isPrime(n)
Test if n is prime

**Params**

- n `integer`  

**Scope**: inner function of [test](#arithmetic.module_test)  
**Returns**: `Boolean` - true if n is can be divied just by 1 or itself, false else  
<a name="arithmetic.module_test..isTriangular"></a>
##test~isTriangular(n)
Test if n is triangular

**Params**

- n `integer`  

**Scope**: inner function of [test](#arithmetic.module_test)  
**Returns**: `Boolean` - true if n is equal to the sum of i first integer (eg: 6 = 1 + 2 + 3)  
<a name="arithmetic.module_test..isPerfect"></a>
##test~isPerfect(n)
Test if n is perfect

**Params**

- n `integer`  

**Scope**: inner function of [test](#arithmetic.module_test)  
**Returns**: `Boolean` - true if the sum of the "n" divisors, except n, is equal to n.  
<a name="structure.module_array"></a>
#structure.array
**Members**

* [structure.array](#structure.module_array)
  * [array~length(a)](#structure.module_array..length)
  * [array~isEmpty(a)](#structure.module_array..isEmpty)
  * [array~sort(a)](#structure.module_array..sort)
  * [array~binaryToDecimal(a)](#structure.module_array..binaryToDecimal)
  * [array~isPalindrom(a)](#structure.module_array..isPalindrom)
  * [array~reverse(a)](#structure.module_array..reverse)

<a name="structure.module_array..length"></a>
##array~length(a)
Get the length of an array

**Params**

- a `Array`  

**Scope**: inner function of [array](#structure.module_array)  
**Returns**: `integer` - the item count of a  
<a name="structure.module_array..isEmpty"></a>
##array~isEmpty(a)
Test if an anrray is empty

**Params**

- a `Array`  

**Scope**: inner function of [array](#structure.module_array)  
**Returns**: `Boolean` - true if a is empty, false else  
<a name="structure.module_array..sort"></a>
##array~sort(a)
Sort the given array

**Params**

- a `Array`  

**Scope**: inner function of [array](#structure.module_array)  
**Returns**: `Array` - a new sorted array  
<a name="structure.module_array..binaryToDecimal"></a>
##array~binaryToDecimal(a)
Convert an array of 0, 1 into a integer

**Params**

- a `Array` - just contain a suite of 0 and 1  

**Scope**: inner function of [array](#structure.module_array)  
**Returns**: `integer` - the representation in decimal form  
<a name="structure.module_array..isPalindrom"></a>
##array~isPalindrom(a)
Test if the array is a palindrom :
a man, a plan, a canal: a Panama

**Params**

- a `Array`  

**Scope**: inner function of [array](#structure.module_array)  
**Returns**: `Boolean` - true if a is a palindrom, false else  
<a name="structure.module_array..reverse"></a>
##array~reverse(a)
Reverse the item order of the array

**Params**

- a `Array`  

**Scope**: inner function of [array](#structure.module_array)  
**Returns**: `Array` - a new array with the reverse order of a  
<a name="structure.module_expression"></a>
#structure.expression
**Members**

* [structure.expression](#structure.module_expression)
  * [expression~isWellBracketed(a)](#structure.module_expression..isWellBracketed)
  * [expression~isWellBracketed2(a)](#structure.module_expression..isWellBracketed2)
  * [expression~isValidExpression(expression)](#structure.module_expression..isValidExpression)
  * [expression~expressionToTree(expression)](#structure.module_expression..expressionToTree)
  * [expression~evaluateExpression(expression, x, y)](#structure.module_expression..evaluateExpression)

<a name="structure.module_expression..isWellBracketed"></a>
##expression~isWellBracketed(a)
Test if the given array of bracket is well formed.

**Params**

- a `string` - an array with just ( and ) symbole  

**Scope**: inner function of [expression](#structure.module_expression)  
**Returns**: `Boolean` - true if it's well bracketed  
**Example**  
isWellBracketed('(()())')  = true

**Example**  
isWellBracketed('())())') = false

<a name="structure.module_expression..isWellBracketed2"></a>
##expression~isWellBracketed2(a)
Test if the given array of bracket is well formed

**Params**

- a `string` - an array with just (, ), [, ] symbole  

**Scope**: inner function of [expression](#structure.module_expression)  
**Returns**: `Boolean` - true if it's well bracketed  
**Example**  
isWellBracketed2('([]())') = true

**Example**  
isWellBracketed2('[])())') = false

<a name="structure.module_expression..isValidExpression"></a>
##expression~isValidExpression(expression)
Valid the expression

**Params**

- expression `string` - a string representing an expression with symbole (,),+,-,/,*,{integer},x,y  

**Scope**: inner function of [expression](#structure.module_expression)  
**Returns**: `Boolean` - true if expression can be evaluate, false else  
<a name="structure.module_expression..expressionToTree"></a>
##expression~expressionToTree(expression)
Return the transformation of the expression into a tree

**Params**

- expression `string` - a string representing an expression with symbole (,),+,-,/,*,{integer},x,y  

**Scope**: inner function of [expression](#structure.module_expression)  
**Type**: `InvalidExpressionException`  
**Returns**: `Tree` - the tree representration of the expression  
**Example**  
expressionToTree('1')   = {value:1}

**Example**  
expressionToTree('x')   = {value:'x'}

**Example**  
```
expressionToTree('1+8') = {
 operator     : '+',
 operandLeft  : {value:1},
 operandRight : {value:8}
}
```

**Example**  
```
expressionToTree('1+(2*x)') = {
 operator     : '+',
 operandLeft  : {value:1},
 operandRight : {
   operator     : '*',
   operandLeft  : {value:2},
   operandRight : {value:'x'}
 }
}
```

<a name="structure.module_expression..evaluateExpression"></a>
##expression~evaluateExpression(expression, x, y)
Evaluate an expression

**Params**

- expression `string` - a string representing an expression with symbole (,),+,-,/,*,{integer}  
- x `integer` - the x value  
- y `integer` - the y value  

**Scope**: inner function of [expression](#structure.module_expression)  
**Type**: `InvalidExpressionException`  
**Returns**: `integer` - the result of the compute of the expression  
