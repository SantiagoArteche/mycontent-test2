import { ViewProvider } from "./ViewContext/ViewContext";
import { CloserProvider } from "./CloserContext/CloserContext";
import { LeadProvider } from "./LeadContext/LeadContext";

export const Provider = ({ children }) => {
  return (
    <LeadProvider>
      <ViewProvider>
        <CloserProvider>{children}</CloserProvider>
      </ViewProvider>
    </LeadProvider>
  );
};
