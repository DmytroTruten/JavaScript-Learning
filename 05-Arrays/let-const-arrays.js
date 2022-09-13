let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

// we can update elements of an array created with letl keyword
condiments[0] = "Mayo";
console.log(condiments);

// and reassign array to be a new array
condiments = ["Mayo"];
console.log(condiments);

// also we can reassign elements in array created by const keyword, but cannot change whole array as well
utensils[3] = "Spoon";
console.log(utensils);
