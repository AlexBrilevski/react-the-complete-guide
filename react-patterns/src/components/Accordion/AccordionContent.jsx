import { useAccordionItemContext } from "./AccordionItem";
import { useAccordionContex } from "./Accordion";

export default function AccordionContent({ className, children }) {
  const id = useAccordionItemContext();
  const { openItemId } = useAccordionContex();

  const isOpen = openItemId === id;

  return (
    <div className={isOpen ? `${className ?? ''} open` : `${className ?? ''} close`}>
      {children}
    </div>
  );
}
