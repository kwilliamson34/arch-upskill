### Day 1: Arrays and Binary Search Trees

- Interview Tip: Whenever you're trying to solve an array problem in place, always consider the possibility of iterating backwards instead of forwards through the array. It can make the problem easier and is a good solution for constant space complexity.
- Refreshed heavily on the [Array JS reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). In-place methods: `push, pop, shift, unshift, reverse, sort, splice, copyWithin, fill`. Not in place / produce a shallow copy: `map, filter, join, concat, slice`.
- When using splice while traversinf, remember to decrement the index by 1. Time complexity of splice is at worst O(n) (copying all n-1 elements).
- Hashtables (Objects in JS) are great for linear time, but keys have data type constraints, and they are not really for "in-place"
  solutions. Objects auto-sort numerical keys in ascending order, but don't handle negative value keys well.
- Sets preserve insertion order in JS! They are a great solution for deduplicating when you're allowed to use a second sata structure.
- TODO: Practice in-order traversal of a Binary Search Tree to convert it to a list.
