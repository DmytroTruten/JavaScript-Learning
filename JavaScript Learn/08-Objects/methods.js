let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  // You can use full syntax like retreat: function() {...},
  retreat: function() {
    console.log(retreatMessage)
  },
  // Or use shorter syntax
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}
alienShip.retreat();
alienShip.takeOff();