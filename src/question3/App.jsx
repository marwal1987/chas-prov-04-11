// 3. Custom Hook useInput (3p)
// Skapa en hook useInput som tar hand om state för ett input-fält.
// useInput ska returnera funktionen för att uppdatera state och
// själva värdet från state.
// Använd sedan useInput i App-komponenten nedan för att spara det man
// skriver in i ett input-fält. Det man skriver in ska visas under inputfältet.
import { useState } from "react";

function useInput(initInput) {
  const [input, setInput] = useState(initInput);

  return { input, setInput };
}

function App() {
  const { input, setInput } = useInput("");

  return (
    <div>
      <h3>Skriv något fältet nedanför:</h3>
      <input
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
      <h4>Det här skrev du: {input}</h4>
    </div>
  );
}

export default App;
