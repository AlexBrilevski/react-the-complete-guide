import Section from './Section';
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title='Time to get started!'>
      <ul>
        {CORE_CONCEPTS.map((el, index) => <CoreConcept key={index} {...el} />)}
      </ul>
    </Section>
  );
}
