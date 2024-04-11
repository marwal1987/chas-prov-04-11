import { useState } from "react";

export default function InputAndButton({ setName }) {
  const [input, setInput] = useState("");

  return (
    <div>
      <h2>ChangeName komponent</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-black"
      />
      <button onClick={() => setName(input)}>Enter</button>
    </div>
  );
}
