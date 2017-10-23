var cup = {
  material: "styrofoam",
  heightInInches: 4,
  color: {
    inside: "white",
    outside: "black and white",
    strip: "red"
  },
  size: "small"
}
// console.log(cup.color.inside);

var people = {
  names: ["andrew", "brandon", "dan", "derek", "elaine", "frank", "jeremy", "josh", "kyle", "luke", "marcus", "michael", "neil", "robert"],
  boys: 11,
  girls: 1,
  comparison: function () {
    for (var i = 0; i < 12; i++) {
      console.log(this.names[i]);
    }
  }
}
// people.comparison();

var lights = {
  powerOn: false,
  howMany: 6,
  position: "suspended from ceiling"
}

var floor = {
  noShoes: false,
  splintering: true,
  barefoot: function() {
    if (this.noShoes === true && this.splintering === true) {
      console.log("you'd better put something on your feet");
    } else {
      console.log("you're feet should be fine");
    }
  }
}
// floor.barefoot();

var sunLight = {
  comesFrom: "window",
  isBlocked: true,
  howMany: 2
}
// console.log(sunLight.comesFrom);

var ductWork = {
  lengthInFeet: 40,
  color: "silver",
  numberOfVents: 6,
  purpose: {
    hotAir: false,
    coldAir: true,
    reasons: ["people are cold", "people are hot"]
  }
}
// console.log(ductWork.purpose.reasons[1]);

var desk = {
  itemsHolding: 12,
  items: ["laptop", "phone", "water", "snacks", "monitors"],
  inUse: function() {
    if (this.itemsHolding > 2) {
      console.log("This desk is being used");
    } else {
      console.log("Anyone may sit here");
    }
  }
}
// desk.inUse();

var projector = {
  location: "ceiling",
  number: 1,
  isOn: true
}

var chair = {
  numOfWheels: 5,
  purpose: {
    work: "sit",
    play: "racing",
    relax: true
  },
  comfortable: false
}
// console.log(chair.comfortable)

var stopSmoking = {
  snack1: "sun flower seeds",
  snack2: "trail-mix",
  helping: true,
  alternatives: ["drinks", "gum", "breath air", "other snacks"]
}
// console.log(stopSmoking.alternatives[2]);
