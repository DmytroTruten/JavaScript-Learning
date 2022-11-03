/* For each element in the outer loop array, Array1, the inner loop will run in its entirety comparing the current element from the outer array, Array1[i], to each element in the inner array, Array2[j]. When it finds a match, it prints a string to the console. */

const bobsFollowers = ['Dennis', 'Richard', 'Tony', 'Rammus'];

const tinasFollowers = ['Richard', 'Aubrey', 'Tony'];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
      console.log(mutualFollowers)
    }
  }
}