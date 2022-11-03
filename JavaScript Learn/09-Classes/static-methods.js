class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() {
    let randomNumber = Math.floor((Math.random() * 10000) + 1);
    return randomNumber;
  }

}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = insurance;
  }

  set insurance(value) {
    if(value === false) {
      this._insurance = true;
    }
  }

  get insurance() {
  return this._insurance;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);

console.log(`Nurse Olynyk remaining days - ${nurseOlynyk.remainingVacationDays}`);
nurseOlynyk.addCertification('Genetics');

console.log(`Nurse Olynyk certifications - ${nurseOlynyk.certifications}`);

const doctorSmith = new Doctor('Smith', false);
doctorSmith.takeVacationDays(10);

console.log(`Doctor Smith remaining days - ${doctorSmith.remainingVacationDays}`);
console.log(`Doctor Smith insurance - ${doctorSmith.insurance}`);

doctorSmith.insurance = false;
console.log(`Doctor Smith insurance - ${doctorSmith.insurance}`);


