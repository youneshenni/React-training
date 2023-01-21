import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

let data = [
  { id: 1, name: "John Doe", age: 42 },
  { id: 2, name: "Jane Doe", age: 39 },
];
function App() {
  const [first, setFirst] = useState(data);
  return (
    <ul>
      {first.map((person) => (
        <li key={person.id}>
          {person.name} is {person.age} years old.
          <button>Edit</button>
          <button
            onClick={() => {
              setFirst(first.filter((p) => p.id !== person.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default App;
