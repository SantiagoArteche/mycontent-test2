import { createContext, useState } from "react";

export const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const [lead, setLead] = useState([]);

  const handleLead = (leadValue) => {
    setLead(leadValue);
  };

  const data = { handleLead, lead };

  return <LeadContext.Provider value={data}>{children}</LeadContext.Provider>;
};
