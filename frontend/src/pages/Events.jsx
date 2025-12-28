import { useLoaderData, Await } from 'react-router-dom';

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

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), { status: 500 });
  } else {
    const respData = await response.json();
    return respData.events;
  }
}

export const eventsLoader = () => {
  return {
    events: loadEvents(),
  };
};

export default EventsPage;
