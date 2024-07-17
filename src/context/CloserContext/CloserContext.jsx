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
      `https://back-mycontent-test.vercel.app/api/schedules/${closer[0].toUpperCase()}${closer.slice(
        1,
        closer.length
      )}`
    )
      .then((res) => res.json())
      .then((data) => setSheet(data))
      .catch((error) => console.log(error));
  }, [closer]);

  const data = { closer, handleCloser, sheet };

  return (
    <CloserContext.Provider value={data}>{children}</CloserContext.Provider>
  );
};
