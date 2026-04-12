import { useState } from 'react';
import Section from './Section';
import Tabs from './Tabs';
import TabButton from './TabButton';
import { EXAMPLES } from '../data';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleTabButtonClick = (tabButtonId) => {
    setSelectedTopic(tabButtonId);
  };

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
      </div>
    );
  }

  return (
    <Section id="examples" title='Examples'>
      <Tabs buttons={
        <>
          <TabButton isActive={selectedTopic === 'components'} onClick={() => handleTabButtonClick('components')}>
            Components
          </TabButton>
          <TabButton isActive={selectedTopic === 'jsx'} onClick={() => handleTabButtonClick('jsx')}>
            JSX
          </TabButton>
          <TabButton isActive={selectedTopic === 'props'} onClick={() => handleTabButtonClick('props')}>
            Props
          </TabButton>
          <TabButton isActive={selectedTopic === 'state'} onClick={() => handleTabButtonClick('state')}>
            State
          </TabButton>
        </>
      }>
        {tabContent}
      </Tabs>
    </Section>
  );
}
