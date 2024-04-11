// 3. Uppdatera ett namn med callback 3p
// En namn ska visas på sidan och namnet ska vara kopplat till useState i App-komponenten.

// Skapa en komponent: ChangeName som har ett inputfält som ska användas för att ändra
// namnet i App-komponenten via en callback-funktion.

import { useState } from "react";
import ChangeName from "./ChangeName";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <ChangeName setName={setName} />

      <h2>App Komponent</h2>
      <div>{name}</div>
    </div>
  );
}

export default App;
