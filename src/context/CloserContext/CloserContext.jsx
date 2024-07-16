import { createContext, useEffect, useState } from "react";
export const CloserContext = createContext();

export const CloserProvider = ({ children }) => {
  let [closer, setCloser] = useState("Juanjo");
  const [sheet, setSheet] = useState([]);
  const handleCloser = (value) => {
    setCloser(value);
  };

  useEffect(() => {
    fetch(
      `http://localhost:8000/api/schedules/${closer[0].toUpperCase()}${closer.slice(
        1,
        closer.length
      )}`
    )
      .then((res) => res.json())
      .then((data) => setSheet(data));
    console.log(3);
  }, [closer]);

  const data = { closer, handleCloser, sheet };

  return (
    <CloserContext.Provider value={data}>{children}</CloserContext.Provider>
  );
};
