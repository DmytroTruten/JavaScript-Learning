/* Here is a list of some handy comparison operators and their syntax:

Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !== */

let hungerLevel = 10;

if (hungerLevel > 10) {
  console.log('Time to eat!')
} else if (hungerLevel < 10) {
  console.log('We can eat later!')
} else if (hungerLevel === 10) {
  console.log(`Hunger level = ${hungerLevel}`)
}