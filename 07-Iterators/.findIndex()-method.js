const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
})
console.log(foundAnimal)

const startsWithS = animals.findIndex(animal => {
  if (animal[0] === 's') {
    return animal
  }
})
console.log(startsWithS)