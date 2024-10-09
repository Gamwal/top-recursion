#!/usr/local/bin/node

function fibIter(n) {
  let result = [];
  for (i = 0; i < n; i++) {
    if (i < 2) {
      result.push(i);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }
  return result;
}

function fibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let arr = fibonacci(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}

console.log(fibonacci(8));
console.log(fibonacci(10));
console.log(fibonacci(3));

console.log(fibIter(8));
console.log(fibIter(10));
console.log(fibIter(3));
