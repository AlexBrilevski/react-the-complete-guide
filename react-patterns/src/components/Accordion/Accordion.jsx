import { createContext, useContext, useState } from 'react';
import AccordionItem from './AccordionItem';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';

const AccordionContex = createContext();

export function useAccordionContex() {
  const ctx = useContext(AccordionContex);

  if (!ctx) {
    throw new Error('Accordion-related components must be wrapped by <Accordion>');
  }

  return ctx;
}

export default function Accordion({ className, children }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId(prevId => prevId === id ? null : id);
  }

  const contexValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContex.Provider value={contexValue}>
      <ul className={className}>
        {children}
      </ul>
    </AccordionContex.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
