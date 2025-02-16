function foo(a, b) {
  if (a === null || b === null || isNaN(a) || isNaN(b)) {
    return 0; // Handle null and NaN values
  }
  return a + b; // Now correctly handles NaN
}
// Test cases
console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, NaN)); // Output: 0
console.log(foo(NaN, 5)); // Output: 0
console.log(foo(5, 10)); // Output: 15