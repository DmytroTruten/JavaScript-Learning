const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof(mealToCheck === 'string')) {
      return this._meal = mealToCheck; 
    }
  },
  set price(priceToCheck) {
    if (typeof(priceToCheck === 'number')) {
      return this._price = priceToCheck;
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today Special - ${this._meal} for $${this._price}`
    } else {
      return 'Meal or price was not set correctly!'
    }
  }
}
const randomMeal = (mealArray) => {
  let randomNumber = Math.floor(Math.random() * 3);
  return mealArray[randomNumber];
}
menu.meal = randomMeal(['Chicken with Honey Sauce', 'The Best Shawarma', 'Juicy Khinkali']);
menu.price = Math.floor(Math.random() * 100);
console.log(menu.todaysSpecial)