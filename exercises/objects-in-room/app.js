var desks = {
  type: "plain desk",
  heightInFt: 2.5,
  isWhite: true,
  itemsToHold: ["monitor", "laptop", "water", "phone"]
};
var computer = {
  brand: "asus",
  cost: 150,
  usesElectricity: true,
  displays: ["background", "screensaver", "software", "interaction"]
};
var classMate = {
  name: "students",
  connectedByVideo: 3,
  areGoingToPass: true,
  travelFrom: ["apartments", "houses", "condos", "the web"]
};

console.log("desk", "height in ft", desks.heightInFt, "holds", desks.itemsToHold);

console.log("computer", "displays", computer.displays);

console.log("class mates", "connected by video", classMate.connectedByVideo, "traveling from", classMate.travelFrom);
