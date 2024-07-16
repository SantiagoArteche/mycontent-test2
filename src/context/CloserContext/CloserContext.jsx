import { createContext, useState } from "react";

export const CloserContext = createContext();

export const CloserProvider = ({ children }) => {
  const [closer, setCloser] = useState("Juanjo");

  const handleCloser = (value) => {
    setCloser(value);
  };

  const data = { closer, handleCloser };

  return (
    <CloserContext.Provider value={data}>{children}</CloserContext.Provider>
  );
};
