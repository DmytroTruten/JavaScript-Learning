
// created a class called Media
class Media {
  constructor(title) {
    // set the values for properties
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  // setter for Media class property
  set isCheckedOut(check) {
    this._isCheckedOut = check;
  }
// getter for title
  get title() {
    return this._title;
  }
// getter for boolean value 
  get isCheckedOut() {
    return this._isCheckedOut;
  }
// getter for array
  get ratings() {
    return this._ratings;
  }
// setter for reversing this._isCheckedOut
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
// method iterates through ratings array, finds the sum of it and returns average value
  getAverageRating() {
    let ratingsSum = this._ratings.reduce(
      (accumulator, rating) => accumulator + rating
    );
    return ratingsSum / this._ratings.length;
  }
// method for pushing rating values to array
  addRating(value) {
    this._ratings.push(value);
  }
}
// created inhereted class 
class Book extends Media {
  constructor(author, title, pages) {
    // calls parent-class constructor, setting values for properties
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}
// another inhereted class
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}
// creating Book instance
const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);
// calling .toggleCheckoutStatus() for reversing .isCheckedOut value
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

// calling .addRating few times for pushing its arguments to rating array   
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// logs average rating of Book instance, rounded to 2 decimal numbers
console.log(Math.round(historyOfEverything.getAverageRating() * 100) / 100);

// creating Movie instance 
const speed = new Movie("Jan de Bont", "Speed", 116);
// repeating actions, made up with Book instance
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(Math.round(speed.getAverageRating() * 100) / 100);
