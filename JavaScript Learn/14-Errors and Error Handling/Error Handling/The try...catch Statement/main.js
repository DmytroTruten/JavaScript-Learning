try {
  // In the try block, throwed an error using the Error() function and passed into Error() a string
  throw Error('Logging some error to console.')
} catch (e) {
  // Inside the catch block, log the error to the console
  console.log(e)
}