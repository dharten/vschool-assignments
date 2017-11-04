const ask = require('readline-sync');

console.log('Welcome to Colossal RPG');

const name = ask.question('What is your name?');

console.log(`Hopefully you don't regret playing ${name}. Lets get started!`);

const options = ['Walk', 'Check inventory', 'Take a nap'];

// const inventory = {
//   weapon: squirt-gun,
//   drink: water,
//   clothing: sweater
// }
while (options !== 4) {
  const pickOption = ask.keyInSelect(options, 'What would you like to do?');
  switch (pickOption){
    case 0: //walk
      console.log('walk');//algorithm to determine if an enemy is found
      break;
    case 1: //check inventory
      console.log('inventory');//open inventory
      break;
    case 2: //Take a nap
      console.log('Naptime')//3 second count down (...), add one HP, console.log('You added one HP!')
      break;
    case 3: //CANCEL
      //ask.keyInSelect('Are you sure?')
      //true ? console.log(`You have left the game... chicken`): pickoption;
      break;
  }
}
