// function that returns sleep hours per week
const getSleepHours = day => {
  switch (day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 7;
      break;
    case 'Wednesday':
      return 8;
      break;
    case 'Thursday':
      return 9;
      break;
    case 'Friday':
      return 7;
      break;
    case 'Saturday':
      return 6;
      break;
    case 'Sunday':
      return 8;
      break;
  }
}

// summarizing all sleep hours
const getActualSleepHours = () => 
  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') +  getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

// returns ideal sleep hours
const getIdealSleepHours = idealHours => idealHours * 7;

// comparing actual sleep hours and ideal hours/log result
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours(); 
  const idealSleepHours = getIdealSleepHours(8);

  if(actualSleepHours === idealSleepHours) {
    console.log(`You got the perfect amount of sleep\n Your ideal sleep hours: ${idealSleepHours}\n Your actual sleep hours: ${actualSleepHours}`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got more sleep than needed \n Your ideal sleep hours: ${idealSleepHours}\n Your actual sleep hours: ${actualSleepHours}`)
  } else {
    console.log(`You should get some rest\n Your ideal sleep hours: ${idealSleepHours}\n Your actual sleep hours: ${actualSleepHours}`)
  }
}

calculateSleepDebt();





