// 6. Global state med Redux eller Context (3p)
// Skapa två komponenter: En som heter Read och en som heter Write.
// Write ska ha ett inputfält och det som skrivs ska sparas i global state.
// Read ska visa en valfri text som skrivs i Write.
// Read ska visa det som sparas i global state.
// Lägg in Read och Write komponenterna i App-komponenten.
import { TextProvider } from "./readWriteContext";
import Read from "./Read";
import Write from "./Write";

function App() {
  return (
    <TextProvider>
      <div>
        <Read />
        <Write />
      </div>
    </TextProvider>
  );
}

export default App;
