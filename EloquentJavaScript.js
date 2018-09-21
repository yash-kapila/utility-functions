/*
 * Create List From Array. 
 * List is a nested set of objects with the first object holding a reference to the second and second to third and so on.
 * [10,20] -> { value: 10, rest: { value: 20, rest: null } }
 */
const createListItems = arr => arr.map((elem) => ({ value: elem, rest: null }));

const arrayToList = arr => createListItems(arr).reduceRight((acc, current) => {
  current.rest = acc;
  return current;
});

// Return the sum of array elements
const sum = arr => arr.reduce((acc, elem) => acc + elem, 0);

// Reverse an Array without using .reverse() i.e use pure functions
const reverseArray = arr => arr.reduceRight((acc, elem) => acc.concat(elem), []);

// Flatten an array i.e [[1,2,3], [4,5], [6]] -> [1,2,3,4,5,6]
const flattenArray = arr => arr.reduce((acc, elem) => acc.concat(elem));

// Object.values alternative for finding if an element exists in the object values
const findValue = (item, obj) => Object.keys(obj).map(el => obj[el]).includes(item);

/*
 * Funtional switch block
 * Advantages:
 * a) More predictable and lesser prone to errors than switch blocks
 * b) Object lookup has better cost than switch lookups for large number of cases
 * c) Abstraction
 * d) Can't use return with switch blocks
 * e) Ability to have functions as optional; Useful if the switch block needs to return a value after case match
 */
const executeOperation = operation => (typeof operation === 'function' ? operation() : operation);

const checkOperation = (cases = {}) => (defaultCase = '') => key => executeOperation(Object.prototype.hasOwnProperty.call(cases, key) ? cases[key] : defaultCase);

// Evaluate LHS equality with one of the RHS.
const isNonEmpty = arr => (arr.length !== 0);
const equality = (lhs, ...rhs) => isNonEmpty(rhs.filter(el => (lhs === el)));

// Composition
const compose = (...fns) => fns.reduceRight((f, g) => (...args) => f(g(...args)));

// Pattern #1
// Execute an operation only once
const operation = (function anonymous() {
  let condition = false;
   return function callback(args) {
    if (!condition) {
      // block of code to execute only once
      condition = true;
    }
  };
}());

operation(// arguments if needed);
