const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// removes first item in array
groceryList.shift();

// adds items to the beginning of the array
groceryList.unshift('popcorn');
console.log(groceryList)

// slices array 
console.log(groceryList.slice(1,4))
console.log(groceryList)

// searches item by name and returns index
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex)