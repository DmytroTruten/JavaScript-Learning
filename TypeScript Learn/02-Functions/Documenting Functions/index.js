"use strict";
/**
 * Prints the ingredients in salad to the console
 * @param fruit1 - first fruit
 * @param fruit2 - second fruit
 * @returns void(Nothing)
 */
function makeFruitSalad1(fruit1, fruit2) {
    let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
    console.log(salad);
}
/**
 * Prints the status to the console
 * @param status - default parameter, part of a final status
 * @param repeat - the number of times the function will be called
 * @returns - void(Nothing)
 */
function proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat; i += 1) {
        console.log(`I'm ${status}`);
    }
}
