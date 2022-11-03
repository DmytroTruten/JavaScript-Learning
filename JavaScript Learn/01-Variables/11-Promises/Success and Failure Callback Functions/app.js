const { checkInventory } = require("./library.js");

const order = [
  ["sunglasses", 1],
  ["bags", 2],
];

const handleSuccess = (resolve) => {
  console.log(resolve); 
};

const handleFailure = reject => {
  console.log(reject)
}

checkInventory(order).then(handleSuccess, handleFailure)