// Återanvändbara komponenter 3p
// 1. Skapa en komponent Button som tar en color och en title som props
// Använd den 2 gånger med olika title och color.

// 2. Skapa en komponent ButtonWithChildren som änvänder children istället
// för en title prop. Använd den 2 gånger med olika title och color.

// 3. Skapa en komponent Article som tar en title och en text som props
// Använd komponenten 2 gånger med olika title och text.

import Button from "./Button";
import ButtonWithChildren from "./ButtonWithChildren";
import Article from "./Article";
function App() {
  return (
    <div>
      <h3>Buttons</h3>
      <Button title="Klicka här!" color="bg-green-400" />
      <br />
      <Button title="Klicka inte här!" color="bg-red-400" />

      <h3>Buttons with children</h3>
      <ButtonWithChildren color="bg-blue-400">
        Klicka här om du vill
      </ButtonWithChildren>
      <ButtonWithChildren color="bg-indigo-400">Click me!!</ButtonWithChildren>

      <h3>Articles</h3>
      <Article
        title="Det fungerar ju det här"
        text="Det är häftigt när allt fungerar som det är tänkt"
      />
      <Article
        title="Det fungerar ju det här också"
        text="Tillsammans upptäckte vi att saker och ting faktiskt fungerar ibland"
      />
    </div>
  );
}

export default App;
