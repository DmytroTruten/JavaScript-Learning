const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`))

/* fruits.forEach() calls the forEach method on the array.
.forEach() takes an argument of callback function. A callback function is a function passed as an argument into another function.
.forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function. */