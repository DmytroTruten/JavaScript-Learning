let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');

async function serveDinnerAgain() {
  const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()])
  let broccoli = foodArray[0];
  let rice = foodArray[1];
  let chicken = foodArray[2];
  let beans = foodArray[3];
  console.log(`Dinner is served. We;re having ${broccoli}, ${rice}, ${chicken}, and ${beans}.`)
}

serveDinnerAgain();
