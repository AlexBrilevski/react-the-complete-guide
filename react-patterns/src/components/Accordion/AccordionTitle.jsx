import { useAccordionItemContext } from "./AccordionItem";
import { useAccordionContex } from "./Accordion";

export default function AccordionTitle({ className, children }) {
  const id = useAccordionItemContext();
  const { toggleItem } = useAccordionContex();

  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
