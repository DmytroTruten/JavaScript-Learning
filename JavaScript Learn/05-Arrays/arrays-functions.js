const concept = ['arrays', 'can', 'be', 'mutated'];

// getting access to array and changing its element
function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

// getting access to array and changing its element
const removeElement = newArr => newArr.pop();

removeElement(concept)
console.log(concept)