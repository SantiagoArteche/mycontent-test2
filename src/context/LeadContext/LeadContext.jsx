import { createContext, useState } from "react";

export const LeadContext = createContext();

export const LeadProvider = ({ children }) => {
  const [lead, setLead] = useState([]);

  const handleLead = (leadValue) => {
    if (!leadValue[8]) leadValue[8] = "Sin estado";
    if (!leadValue[9]) leadValue[9] = "No";
    setLead({
      fecha: leadValue[0],
      email: leadValue[1],
      source: leadValue[2],
      campaign: leadValue[3],
      medium: leadValue[4],
      term: leadValue[5],
      content: leadValue[6],
      closer: leadValue[7],
      state: leadValue[8],
      call: leadValue[9],
    });
  };

  const data = { handleLead, lead };

  return <LeadContext.Provider value={data}>{children}</LeadContext.Provider>;
};
