// create variable kelvin 
const kelvin = 0;

// create celsius variable
const celsius = kelvin - 273;

// create fahrenheit variable
let fahrenheit = celsius * (9/5) + 32;

// round fahrenheit value
fahrenheit = Math.floor(fahrenheit);

//create newton variable and round it
let newton = celsius * (33/100);
newton = Math.floor(newton);

//console.log result
console.log(`${kelvin} in Kelvin is ${newton} in Newtons`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)