console.log("This is the first line of code in app.js.");

// function logs string 
const usingSTO = () => {
  console.log('string printed in usingSTO function');
}

// invoking setTimeOut with usingSTO as a parameter
setTimeout(usingSTO, 1500)



console.log("This is the last line of code in app.js.");