import { createContext, useState } from "react";

export const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [select, setSelect] = useState("Closer View");
  const handleSelect = (viewSelected) => {
    setSelect(viewSelected);
  };

  const data = { handleSelect, select };

  return <ViewContext.Provider value={data}>{children}</ViewContext.Provider>;
};
