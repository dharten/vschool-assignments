var shopper = {
  name: "Dan",
  age: 31,
  isSpendingMoney: false,
  whatever: function() {
    if (shopper.isSpendingMoney === true) {
      return this.name + " watch how much you're spending!!";
  } else {
      return this.name + " do you need anything from the store? " + this.groceryCart;
  }
},
  groceryCart: ["milk", "eggs", "cereal", "paper towels", "meat"]
};

console.log(shopper.whatever());
