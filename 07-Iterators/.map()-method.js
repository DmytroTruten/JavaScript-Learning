const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Created the secretMessage array below
const secretMessage = animals.map(animal => animal[0])

console.log(secretMessage.join(''));