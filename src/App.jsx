import React, { useState } from "react";
const defaultData = [
  { name: "Name", email: "Email", phone: "Phone" },
  { name: "Name2", email: "Email2", phone: "Phone2" },
];

function App() {
  const [data, setData] = useState(defaultData);
  const [showForm, setShowForm] = useState(false);
  const [update, setUpdate] = useState(null);
  console.log(data);
  return (
    <div>
      <ul>
        {data.map(({ name, email, phone }) => (
          <li>
            {name} {email} {phone}
            <br />
            <button
              onClick={() => {
                setData(data.filter((item) => item.name !== name));
                console.log(data);
              }}
            >
              Supprimer
            </button>
            <button onClick={() => setUpdate(email)}>Modifier</button>
            <form style={{ display: update === email ? "block" : "none" }}>
              <label>Name</label>
              <input type="text" name="name" />
              <br />
              <label>Email</label>
              <input type="text" name="email" />
              <br />
            </form>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setShowForm(true);
        }}
      >
        +
      </button>
      <form
        style={{
          display: showForm ? "block" : "none",
        }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>Name</label>
        <input type="text" name="name" />
        <br />
        <label>Email</label>
        <input type="text" name="email" />
        <br />
        <label>Phone</label>
        <input type="text" name="phone" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
