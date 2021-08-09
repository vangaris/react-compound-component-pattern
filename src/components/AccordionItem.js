import React from "react";
import { useAccordionContext } from "../context/Accordion";

function AccordionItem({ value, children }) {
  const { activeItem, setToggle, striped } = useAccordionContext();

  return (
    <div striped={striped}>
      <button
        id={`${value}-header`}
        onClick={() => setToggle(value)}
        selected={value === activeItem}
        type="button"
        value={value}
      >
        {children}
      </button>
      <div expanded hidden={activeItem !== value} id={`${value}-panel`}>
        Showing expanded content about {value}
      </div>
    </div>
  );
}

export default AccordionItem;
