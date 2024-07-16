import { createContext, useState } from "react";

export const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const [lead, setLead] = useState([]);

  const handleLead = (leadValue) => {
    setLead(leadValue);
  };

  if (!lead[8]) lead[8] = "Sin estado";
  if (!lead[9]) lead[9] = "No";

  lead[8];

  const data = { handleLead, lead };

  return <LeadContext.Provider value={data}>{children}</LeadContext.Provider>;
};
