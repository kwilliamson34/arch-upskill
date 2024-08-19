### Arrays and Binary Search Trees

- Interview Tip: Whenever you're trying to solve an array problem in place, always consider the possibility of iterating backwards instead of forwards through the array. It can make the problem easier and is a good solution for constant space complexity.
- Refreshed heavily on the [Array JS reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
  - In-place methods: `push, pop, shift, unshift, reverse, sort, splice, copyWithin, fill`. These usually return an integer not the array.
  - Not in place / produce a shallow copy: `map, filter, join, concat, slice`. These return shallow copies or new arrays.
- **Emphasizing that sort is in place!!** Note that some extra space is used when we sort an array in place. The default sort order is ascending **strings**; pass in a sort function for numbers. The time and space complexity of the sort cannot be guaranteed (depends on sorting function).
- When using splice while traversinf, remember to decrement the index by 1. Time complexity of splice is at worst O(n) (copying all n-1 elements).
- Hashtables (Objects in JS) are great for linear time, but keys have data type constraints, and they are not really for "in-place"
  solutions. Objects auto-sort numerical keys in ascending order, but don't handle negative value keys well.
- Sets preserve insertion order in JS! They are a great solution for deduplicating when you're allowed to use a second sata structure.
- TODO: Practice in-order traversal of a Binary Search Tree to convert it to a list.

### Hashmaps, Sets and Stacks

- A JavaScript Hashmap Object Map() is a data structure that allows you to store key-value pairs, where each key is unique. A Dictionaryis one type.
- It uses a hash function to calculate an index into an array of buckets, from which the desired value can be found. Under the hood it is an array. Hashmaps are organized as linked lists, so the order of its elements is maintained, which allows the hashmap to be iterable.
- The key in a hashmap can be any datatype, including arrays and objects. Meanwhile, objects can only use integers, strings, and symbols as their keys.
- indexOf is linear time; avoid it! Sets are a constant time alternative for similar functionality
- My solution with a plain Object had better time performance than Map, **but was less readable**
- **Consider two-way mapping** to solve isomorphism problems
- Lookups for Hash tables are near constant time (barring collisions)
- Set syntax: notice initailization, iteration, and has()

```
let num_set: Set<number> = new Set(nums);
    for (let num of num_set) {
        if (!num_set.has(num - 1)) {
```

- The inner workings of a stack can be many things. My first attempted question (Min Stack) worked best with two lists.
- Consider Binary Search Tree or Heap: While these data structures are often great for keeping track of a minimum, their core operations (find, add, and remove) are O(logn), which wasn't good enough for this problem.
- Look for `invariants` first: the requirements that are unlikely to change and that reduce the scope of the solution. For example, operations only on the top of the stack.
- I could have used `[number, number][]` tuple array instead of two distinct arrays. But two distinct arrays provided an optimization opportunity in the end; _they didn't have to be the same size_. **look for any data repetition as an optimization attempt.**
- Maps entries/keys/values functions yield iterators. Use `[...counts.values()]` to convert to array.
- My most frequent compilation error is using `=` when I mean `==` or `===`
- We could use a hash table to count the frequency of each letter, however, since both s and t only contain letters from a to z, a simple array of size 26 will suffice for counts.
- You can't `break` out of a `forEach`. forEach is a function call, and placing a "break" statement inside a function is inappropriate.
- What do we know about anagrams? They must have the same length, and character count matters (not order), making maps or counter arrays suited

### Memory management in javascript

In JavaScript, primitive values (such as numbers, strings, booleans, etc.) are stored in the stack, while objects (such as arrays, functions, etc.) are stored in the heap.

Memory management in JavaScript is handled automatically by the runtime environment, typically the JavaScript engine in web browsers or Node.js. JavaScript uses a garbage collector to manage memory and ensure that developers do not need to manually allocate or deallocate memory.

JavaScript engines have two places to store data:

- Stack: It is a data structure used to store static data. Static data refers to data whose size is known by the engine during compile time. In JavaScript, static data includes primitive values like strings, numbers, boolean, null, and undefined. References that point to objects and functions are also included. A fixed amount of memory is allocated for static data. This process is known as static memory allocation.
- Heap: It is used to store objects and functions in JavaScript. The engine doesn’t allocate a fixed amount of memory. Instead, it allocates more space as required.

### Javascript built-in object

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

- Indexed collections: These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs.
- Keyed collections: iterable collections (Map and Set) contain elements which are easily iterated in the order of insertion.

### Heaps

[Additional source](https://dandkim.com/js-heap-implementation/)

- Javascript does not have a standard heap / priority queue data structure that you can use out of the box. You will have to use an array implementation ([BST as array](https://gist.github.com/tpae/54ec7371f947505967a2036b9c002428), where child nodes are indexed at parent node index \* 2)
- Lodash implements one. Always communicate with your interviewer about what you plan to implement; maybe they will allow you to assume the function already exists and can be used without defining it.
- In C++, Java, Python they are standard data structures.
- It will probably be about a binary heap: min-heap or max-heap
- They probably want you to do it without sorting, which is O( nlog(n) ) average, O( n^2 ) worst case (Javascript V8 Engine (the stuff that runs on Google Chrome, Node, etc) uses Quicksort).
- But heap runtime with array workaround is alson nlog(n). You might be asking, what’s the point of using a heap if you get the same average runtime? There isn’t a strong incentive besides avoiding that worst-case runtime of O( n^2 ).

### Quicksort vs Heapsort

[TODO](https://reginafurness.medium.com/implementing-a-max-heap-in-javascript-b3e2f788390c)
