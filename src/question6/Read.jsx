import { useContext } from "react";
import { ReadWriteContext } from "./readWriteContext";

export default function Read() {
  const { input } = useContext(ReadWriteContext);

  return (
    <div>
      <h2>{input}</h2>
    </div>
  );
}
