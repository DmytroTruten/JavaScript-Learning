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
    return this._remainingVacationDays;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    // The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Nurse class to the constructor of the HospitalEmployee class. When the HospitalEmployee constructor runs, it sets this._name = name; for new Nurse instances.
    super(name, certifications);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
