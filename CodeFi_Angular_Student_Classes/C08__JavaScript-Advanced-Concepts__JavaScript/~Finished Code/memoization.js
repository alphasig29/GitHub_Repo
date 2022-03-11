// * ============ MEMOIZATION ============ * \\
// Memoization is an optimization technique that speeds up applications
// by storing the results of expensive function calls
// and returning the cached result when the same inputs are supplied again.

// ~~~~~~ MEMOIZED CLOSURES ~~~~~~ \\
// Write a function to return the nth element in the Fibonacci sequence: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
console.groupCollapsed("Fibonacci");
// Memoized
function memoizedFibonacci(n, memo) {
  // Memoization Initialization
  memo = memo || {};

  // Memoization Call
  if (memo[n]) return memo[n];

  // Base Case
  if (n <= 2) return 1;

  //   Recursive Function call
  return (memo[n] =
    memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo));
}

const TenthFibonacciNumber = memoizedFibonacci(10);
console.log("TenthFibonacciNumber:", TenthFibonacciNumber);

// ~~~~~~ MEMOIZED HOF ~~~~~~ \\
function fibonacciRecursion(n) {
  // Base Case
  if (n <= 2) return 1;

  //   Recursive Function call
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

function memoizer(fun) {
  let cache = {};

  return function (n) {
    if (cache[n] != undefined) {
      return cache[n];
    } else {
      let result = fun(n);
      cache[n] = result;

      return result;
    }
  };
}

const fibonacciMemoHOF = memoizer(fibonacciRecursion);
console.log("fibonacciMemoHOF:", fibonacciMemoHOF(10));
console.groupEnd();
