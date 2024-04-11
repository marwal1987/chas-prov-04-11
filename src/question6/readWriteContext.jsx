import { createContext, useState } from "react";

export const ReadWriteContext = createContext();

export function TextProvider({ children }) {
  const [input, setInput] = useState("");

  return (
    <ReadWriteContext.Provider value={{ input, setInput }}>
      {children}
    </ReadWriteContext.Provider>
  );
}
