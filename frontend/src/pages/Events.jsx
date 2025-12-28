import { useLoaderData, Await } from 'react-router-dom';
import { loadEvents } from '../http/events';

import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
  const data = useLoaderData();

  const events = data.events;

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export const eventsLoader = () => {
  return {
    events: loadEvents(),
  };
};

export default EventsPage;
