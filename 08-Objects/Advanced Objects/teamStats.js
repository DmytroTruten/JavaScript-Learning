const team = {
  // Populated the _players array with three players. Each player is an object containing three properties: firstName, lastName, and age
  _players: [
    { firstName: "Dmitriy", lastName: "Truten", age: 19 },
    { firstName: "Player", lastName: "2", age: 20 },
    { firstName: "Player", lastName: "3", age: 21 },
  ],
  // Populated the array with three games. Each game is an object containing three properties: opponent, teamPoints, opponentPoints
  _games: [
    { opponent: "Opponent1", teamPoints: 10, opponentPoints: 15 },
    { opponent: "Opponent2", teamPoints: 15, opponentPoints: 10 },
    { opponent: "Opponent3", teamPoints: 12, opponentPoints: 12 },
  ],
  // Created a getter method to retrieve the _players property.
  get players() {
    return this._players;
  },
  // Created a getter method to retrieve the _games property.
  get games() {
    return this._games;
  },
  // Inside the method, created a player object by setting the three parameters to be the values for the object’s three properties: firstName, lastName, age. Finally, added the player object to the team‘s _players array.
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    team._players.push(player);
  },
  // Inside the method, created a game object by setting the three parameters to be the values for the object’s three properties: opponent, teamPoints, opponentPoints. Add the game object to the team‘s _games array.
  addGame(newOpponent, newTeampoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeampoints,
      opponentPoints: newOpponentPoints,
    };
    team._games.push(game);
  },
};

team.addGame("Titans", 14, 13);
team.addPlayer("Player", "4", 25);
console.log(team._players);
console.log(team._games);
