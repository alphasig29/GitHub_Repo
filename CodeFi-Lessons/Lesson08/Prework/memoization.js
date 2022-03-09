/*
https://www.better.dev/understanding-memoization-in-javascript

Memoization is an optimization technique that 
speeds up applications by storing the results 
of expensive function calls and returning the 
cached result when the same inputs occur again.
*/

console.group('Memoization');

//  Recursive function to generate Fibonacci sequence
function fibonacci(n) {
    if (n <= 1) {
      return 1
    }
  
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

  /*
  Above:
  when we try to evaluate fib(5), 
  we notice that we repeatedly try to find the 
  Fibonacci number at indices 0, 1, 2 and 3 on 
  different branches. This is known as 
  redundant computation and is exactly what 
  memoization stands to eliminate.
  */

  /*
  Below:
  accept an optional parameter known as memo. 
  We use the memo object as a cache to store 
  the Fibonacci numbers with their respective 
  indices as key to be retrieved whenever they
  are required later in the course of execution.
  */
  function memoizedFibonacci(n, memo) {
      //initialize memo for use, but if it wasn't
    memo = memo || {}
  
    //heck if there's a cached value for the 
    //current key n and we return its value if there is
    if (memo[n]) {
      return memo[n]
    }
  
    //specify a terminating case for when n is less than or equal to 1
    if (n <= 1) {
      return 1
    }
    
    return memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo)
    // memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo)
    // console.log('memo[n]', memo[n]);
    // return memo[n];
  } 

  console.log('memoizedFibonacci(5)', memoizedFibonacci(5));

//    Functional Approach - add memoization to any function =================
function memoizer(fun) {
    let cache = {}
  
    return function(n) {
      if (cache[n] != undefined ) {
        return cache[n]
      } else {
        let result = fun(n)
        cache[n] = result
  
        return result
      }
    }
  }

  const fibonacciMemoFunction = memoizer(fibonacci);
  console.log('fibonacciMemoFunction(5)', fibonacciMemoFunction(5));

  console.groupEnd();