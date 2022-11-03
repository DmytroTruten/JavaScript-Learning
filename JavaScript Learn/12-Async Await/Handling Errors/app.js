const cookBeanSouffle = require('./library.js');

async function hostDinnerParty() {
  try {
    let resolveValue = await cookBeanSouffle();
    console.log(`${resolveValue} is served!`)
  } catch (error) {
    console.log(error)
    console.log("Ordering a Pizza!")
  }
}

hostDinnerParty();





