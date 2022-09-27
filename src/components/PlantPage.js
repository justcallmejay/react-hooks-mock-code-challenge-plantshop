import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plants, setPlants] = useState([])

useEffect(() => {
  fetch('http://localhost:6001/plants')
  .then(res => res.json())
  .then(plants => setPlants(plants))
}, [])

function handleNewPlant(inputPlant) {
  setPlants(plant => {
    return [...plant, inputPlant]
  })
}

const [searchForPlants, setSearchForPlants] = useState("")

function searchPlant(e) {
  setSearchForPlants(e.target.value)
}

const findThatPlant = plants.filter(plant => {
  return plant.name.toLowerCase().includes(searchForPlants.toLowerCase())
})

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant}/>
      <Search searchPlant={searchPlant} searchForPlants={searchForPlants}/>
      <PlantList findThatPlant={findThatPlant} plants={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
