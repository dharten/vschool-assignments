
const ask = require('readline-sync');

console.log('Welcome to Colossal RPG');

const name = ask.question('What is your name? ');

const playerHP = 50;

const inventory = ['Stick', 'Hands', 'Dagger'];

const player = {'name': name, 'hp': playerHP, 'inventory': inventory};

let currentMonster;

console.log(`\nHopefully you don't regret playing ${name}.
You're starting with ${playerHP} HP. Start walking ${name}!`);

const options = ['Walk', 'Pick a fight', 'Print'];


function print() {
  console.log('player:', player);
  monsters.map(function(monster) {
    if (monster.encountered){
      console.log('monster: ', monster)
    }
  })
}

function choose() {
  while (player.hp > 0) {
  // let pickOption = ask.keyInSelect(options, 'What would you like to do?');
  let pickOption = ask.keyIn("\nPress 'w' to walk or 'f' to fight ", {limit: "wfp"});
  switch (pickOption){
    case "w":
      walk();
      break;
    case "f": //check inventory
      createMonster();
      break;
    case "p":
      print();
      break;
  };
}}

function walk(){
  const  isThereMonster = Math.floor(Math.random() * 100);
  // console.log('Is there a monster? ' + isThereMonster);
  isThereMonster <= 33 ? createMonster(): console.log("Keep walkin");
}

const monsters = [
  { monster: 'Wolf', hp: 15, encountered: false },
  { monster: 'Bear', hp: 20, encountered: false },
  { monster: 'Demon', hp: 35, encountered: false }]

const fightOrFlight = ['Run', 'Fight'];

function createMonster(){
  currentMonster = Math.floor(Math.random() * 10) % 3;
  monsters[currentMonster].encountered = true;
  console.log('Generated Monster ' + currentMonster);
  let pickOption = ask.keyInSelect(fightOrFlight,
    `\nYou've encountered a ${monsters[currentMonster].monster} HP ${monsters[currentMonster].hp}
What do you wanna do now?`);
  if (pickOption === 0) {
    run();
  } else {
    fight();
  }
}

function run(){
  const getAway = Math.floor(Math.random() * 2);
  if (getAway === 0) {
    monsterAttack();
  } else {
    console.log('You got away!! Keep Walkin');
  };
}

const fightOptions = ['Attack', 'Run'];

function fight(){
  while (monsters[currentMonster].hp > 0 && player.hp > 0) {
    console.log(player.name, "HP", player.hp)
    console.log(monsters[currentMonster].monster, "HP", monsters[currentMonster].hp);
    let fightClub = ask.keyInSelect(fightOptions, "Do you want to attack or run?");
    if (fightClub === 0) {
      attackMonster();
      monsterAttack();
    } else if (fightClub === 1){
      run();
      if (run() === 1) {
        monsterAttack();
      } else {
        break;
      }
    }
  }
  if (player.hp <= 0) {
    die();
  }
  if (monsters[currentMonster].hp <= 0) {
    enemyDie();
  }
}

function attackMonster(){
  const attackPower = Math.floor(Math.random() * 10)
  monsters[currentMonster].hp -= attackPower;
  // console.log(`Your attack has taken ${attackPower} HP from the ${monsters[currentMonster].monster}`)
}

function monsterAttack(){
  let enemyAttackPower = Math.floor(Math.random() * 10);
  player.hp -= enemyAttackPower;
  console.log("You got away but not without getting hurt by the monster")
//   console.log(`The ${monsters[currentMonster].monster} attacked you.
// Your HP went down ${enemyAttackPower}.`)
}

function die(){
 console.log("You're dead");
}

function enemyDie(){
  player.hp += 5;
  console.log(`You have killed the ${monsters[currentMonster].monster}!
You earned 5 HP!`)
}


choose();
