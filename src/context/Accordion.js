import React from "react";
import useAccordion from "../hooks/useAccordion";

const AccordionContext = React.createContext();

const Accordion = ({ children, defaultExpand = "item 1", stripped = true }) => {
  const [value] = useAccordion({ defaultExpand, stripped });
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "Warning extracting context without wrapping your component with theAccordion provider"
    );
  }

  return context;
};

export { Accordion, useAccordionContext };
