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
    // const {backgroundColor} = this.props;
    // const colorStyles {
    //   backgroundColor,
    // }
    // {switch (this.vacationSpots.timeToGo) {
    //   case "Spring":
    //     this.styles.backgroundColor = 'green'
    //     break;
    //   default:
    //     this.styles.backgroundColor = 'blue'
    //     break;
    //   }
    // }
    return (
      this.vacationSpots.map(vacationSpot => {
        let seasonColor;
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
        console.log(vacationSpot.timeToGo, seasonColor);
        return <Vacation style={seasonColor}
          title={vacationSpot.place}
          price={vacationSpot.price}
          season={vacationSpot.timeToGo}
        />
      })
    )}
  }


export default VacationDestinations;
