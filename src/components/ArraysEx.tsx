import * as React from "react";
import Pet from "../models/Pet";

export function ArraysEx() {
  const [colors, setColors] = React.useState<string[]>([
    "Red",
    "Orange",
    "Purple",
    "Blue",
  ]);
  const [pets] = React.useState<Pet[]>([
    { name: "FlutterNutters", type: "cat", id: 1 },
    { name: "Mocha", type: "dog", id: 2 },
    { name: "Sophie", type: "hamster", id: 3 },
  ]);

  pets.map((pet) => (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
        <tr>
          <td key={pet.id}>{pet.name}</td>
          <td key={pet.id}>{pet.type}</td>
        </tr>
        <tr>
          <td key={pet.id}>{pet.name}</td>
          <td key={pet.id}>{pet.type}</td>
        </tr>
        <tr>
          <td key={pet.id}>{pet.name}</td>
          <td key={pet.id}>{pet.type}</td>
        </tr>
      </table>
    </div>
  ));

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
    </div>
  );
}
