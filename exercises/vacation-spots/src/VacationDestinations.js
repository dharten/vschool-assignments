import React, {Component} from "react";
import Vacation from "./Vacation";

class VacationDestinations extends Component {
  constructor () {
    super();
    this.vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: "$40",
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: "$900",
          timeToGo: "Winter"
        },{
          place: "China",
          price: "$1200",
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: "$1100",
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: "$400",
          timeToGo: "Spring"
        }
      ]
    }
  render() {
    return (
      this.vacationSpots.map((vacationSpot, i) => {
        let seasonColor;
        let moneySign;
        {switch (vacationSpot.timeToGo){
          case "Spring":
            seasonColor = "green"
            break;
          case "Summer":
            seasonColor = "blue"
            break;
          case "Fall":
            seasonColor = "yellow"
            break;
          case "Winter":
            seasonColor = "purple"
            break;
          default:
        }}
        // let newPrice = vacationSpot.price.split(" ");
      //   {if (vacationSpot.price > "$1000") {
      //     moneySign = "$$$";
      //   }else if (vacationSpot.price < "$1000" && vacationSpot.price > "$500") {
      //     moneySign = "$$";
      //   }
      // }
        console.log(vacationSpot.price);
        return <Vacation
          key={vacationSpot.place, i}
          title={vacationSpot.place}
          price={vacationSpot.price}
          season={vacationSpot.timeToGo}
          backgroundColor={seasonColor}
        />
      })
    )}
  }


export default VacationDestinations;
