// create parent class
class School {
  constructor(name, level, numberOfStudents) {
    // set properties
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
// create setter that checks if passed argument is a number
  set numberOfStudents(number) {
    typeof (number === "number")
      ? (this._numberOfStudents = number)
      : console.log("Invalid input: numberOfStudents must be set to a Number.");
  }
// some getters for class properties
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }
// logs info about some kind of school using string interpolation
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }
// picks random number between 0 and array.length-1, returns random value of an array
  static pickSubstituteTeacher(substituteTeachers) {
    let randomNumber = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomNumber];
  }
}
// extends parent class
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    // in called parent constructor set second argument as string
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
    this._level = "primary";
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}
// new PrimarySchool instance
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
// calling .quickFacts method to log some info
lorraineHansbury.quickFacts();
// calling static method
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
// logs whole array
alSmith.sportsTeams;