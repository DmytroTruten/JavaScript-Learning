/*Working with conditionals means that we will be using booleans, true or false values. In JavaScript, there are operators that work with boolean values known as logical operators. We can use logical operators to add more sophisticated logic to our conditionals. There are three logical operators:

the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)*/

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' || tirednessLevel > 8) {
  console.log('time to sleep')
} else {
  console.log('not bed time yet')
}