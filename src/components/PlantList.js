import React from "react";
import PlantCard from "./PlantCard";

function PlantList( { findThatPlant, plants, setPlants }) {

  return (
    <ul className="cards">
      {findThatPlant.map(plant => 
      <PlantCard plant={plant} plants={plants} setPlants={setPlants}/>)}</ul>
  );
}

export default PlantList;
