import React, { useState } from "react";

function PlantCard( { plant, plants, setPlants } ) {

  const [inStock, setInStock] = useState(true)

function handleClick() {
  setInStock((inStock) => !inStock)
}

const [plantEditing, setPlantEditing] = useState(null)
const [editingPlant, setEditingPlant] = useState('')

function editplant(id) {
  const updatedplants = [...plants].map((plant) => {
    if (plant.id === id) {
      plant.price = editingPlant
      fetch(`http://localhost:6001/plants/${id}`, { 
        method: "PATCH",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          price: parseFloat(editingPlant)
        })
    })
  }
    return plant;
});
setPlants(updatedplants)
setPlantEditing(null)
}


  return (
    <li className="card" key={plant.id}>
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>

      {plant.id === plantEditing ? 
      (
      <>
      <input type="text" value={editingPlant} onChange={(e) => setEditingPlant(e.target.value)}/>
      <button onClick={() =>editplant(plant.id)}>OK</button>
      </>) : 
      (<p name="price" onClick={() => setPlantEditing(plant.id)}>Price: {plant.price}</p>)
      }
      
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
