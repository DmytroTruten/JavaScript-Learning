/*For this example, a social sports league company needs a way to filter through an array of players from various cities, sports leagues, and age brackets to generate some graphs about their player data in a dashboard. Each time they generate a list of filtered values, they have to repeat filters that iterate over the entire players array, so they want to modify their code.*/
const players = [
  { age: 5, sport: "soccer", city: "Chicago", dateJoined: new Date('2021-01-20') },
  { age: 6, sport: "baseball", city: "Boulder", dateJoined: new Date('2019-12-30') },
  { age: 10, sport: "soccer", city: "Chicago", dateJoined: new Date('2020-11-12') },
  { age: 11, sport: "handball", city: "San Francisco", dateJoined: new Date('2020-08-21') },
  { age: 6, sport: "soccer", city: "Chicago", dateJoined: new Date('2021-07-06') },
  { age: 8, sport: "softball", city: "Boulder", dateJoined: new Date('2019-02-27') },
  { age: 7, sport: "tennis", city: "San Francisco", dateJoined: new Date('2019-05-31') },
  { age: 4, sport: "handball", city: "San Francisco", dateJoined: new Date('2018-03-10') }
]
/*Below, sortPlayersByValueFromCity() takes three arguments:

an array of players
the city to filter by
a sort key to sort by
The function filters the array of objects by the city key, then sorts by the sort criteria. */
const sortPlayersByValueFromCity = (playersArr, city, sortKey) => {
  return playersArr.filter(player => {
      return player.city === city;
  }).sort((a,b) => {
      return a[sortKey] - b[sortKey]
  });
}

console.log(sortPlayersByValueFromCity(players, "San Francisco", "age"));

/*Meanwhile, in the following code block, filterPlayersByValueFromCity() takes four arguments:

an array to filter
a city to filter the array by
an additional filter key,
the matching filter value to search for
The function filters by the city then filters the results by the key-value pair. */
const filterPlayersByValueFromCity = (playersArr, city, filterKey, filterValue) => {
  return playersArr.filter(player => {
    return player.city === city;
  }).filter(playersFromCity => playersFromCity[filterKey] === filterValue)
 }
  
 console.log(filterPlayersByValueFromCity(players, "San Francisco", "sport", "handball"));

 /*The code for sortPlayersByValueFromCity() and filterPlayersByValueFromCity() is hard to read. With currying, we can write functions that handle one task, and are therefore not only easier to read and understand, but more reusable. For example, we can create a curried function that filters an array of objects by a provided key and value. */

const setFilter = array => key => value => array.filter(x => x[key] === value);
const filterPlayers = setFilter(players);
const filterPlayersByCity = filterPlayers('city');
const filteredPlayersBySanFrancisco = filterPlayersByCity('San Francisco');
const filterPlayersBySport = filterPlayers('sport');
const filteredPlayersBySoccer = filterPlayersBySport('soccer');
 
console.log(filteredPlayersBySanFrancisco); // Returns an array of players from San Francisco
console.log(filteredPlayersBySoccer); // Returns an array of players that play soccer