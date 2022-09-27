import React, { useState } from "react";

const inputNewPlant = {
  name: "",
  image: "",
  price: ""
}

function NewPlantForm( { handleNewPlant } ) {

const [newPlant, setNewPlant] = useState(inputNewPlant)

const handleOnChange = (e) => {
  const { name, value } = e.target;

setNewPlant(plant => {
  return {
    ...plant,
    [name]: value
    }
  })
}

function handleSubmit(e) {
  e.preventDefault();
  handleNewPlant(newPlant);
  setNewPlant(inputNewPlant);

  fetch('http://localhost:6001/plants', {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(newPlant)
  })
}

  return (
    <div className="new-plant-form" >
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={handleOnChange}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={handleOnChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={handleOnChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
