import { useState } from "react";

function InputAndButton({ name, setName }) {
  return (
    <div>
      <h2>ChangeName komponent</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-black"
      />
    </div>
  );
}

export default InputAndButton;
