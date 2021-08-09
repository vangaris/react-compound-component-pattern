import "./styles.css";
import { Accordion } from "./context/Accordion";
import AccordionItem from "./components/AccordionItem";

export default function App() {
  return (
    <Accordion defaultExpanded="beer" striped>
      <AccordionItem value="item 1">Item 1</AccordionItem>
      <AccordionItem value="Item 2">Item 2</AccordionItem>
      <AccordionItem value="Item 3">Item 3</AccordionItem>
      <AccordionItem value="Item 4">Item 4</AccordionItem>
      <AccordionItem value="Item 5">Item 5 </AccordionItem>
    </Accordion>
  );
}
