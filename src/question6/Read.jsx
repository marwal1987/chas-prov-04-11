import { useContext } from "react";
import { ReadWriteContext } from "./readWriteContext";

export default function Read() {
  const { input } = useContext(ReadWriteContext);

  return (
    <div>
      <h2>Läs i Read komponenten:</h2>
      <p>{input}</p>
    </div>
  );
}
