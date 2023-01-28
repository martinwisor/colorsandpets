import * as React from "react";
import Pet from "../models/Pet";

export function ArraysEx() {
  const [colors, setColors] = React.useState<string[]>([
    "Red",
    "Orange",
    "Purple",
    "Blue",
  ]);
  const [pets, removePet] = React.useState<Pet[]>([
    { name: "FlutterNutters", type: "Cat", id: 1 },
    { name: "Mocha", type: "Dog", id: 2 },
    { name: "Sophie", type: "Hamster", id: 3 },
  ]);

  function deleteById(id: number): void {
    removePet((oldValues) => {
      return oldValues.filter((pet) => pet.id !== id);
    });
  }

  function addColor(color: string): void {
    setColors([...colors, color]);
  }

  return (
    <div>
      <ol>
        {colors.map(
          (color, index) => (
            <li key={index}>{color}</li>
          )
          // returns color name and index
        )}
      </ol>
      <button onClick={() => addColor("Yellow")}>Yellow</button>
      <button onClick={() => addColor("Green")}>Green</button>
      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
        {pets.map((pet) => (
          <tr>
            <td key={pet.id}>{pet.name}</td>
            <td key={pet.id}>{pet.type}</td>
            <button onClick={() => deleteById(pet.id)}>Delete</button>
          </tr>
        ))}
      </table>
    </div>
  );
}
