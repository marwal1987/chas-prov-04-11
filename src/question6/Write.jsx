import { useContext } from "react";
import { ReadWriteContext } from "./readWriteContext";

function Write() {
  const { input, setInput } = useContext(ReadWriteContext);

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-black"
      />
    </div>
  );
}

export default Write;
