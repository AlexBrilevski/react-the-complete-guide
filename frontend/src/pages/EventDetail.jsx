import { Suspense } from "react";
import { useRouteLoaderData, Await, redirect } from "react-router-dom";
import EventItem from '../components/EventItem';
import EventsList from "../components/EventsList";
import { loadEvent, loadEvents } from "../http/events";

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={data.event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={data.events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

export const eventDetailLoader = async ({ params }) => {
  const id = params.eventId;

  return {
    event: await loadEvent(id),
    events: loadEvents(),
  };
};

export const deleteEventAction = async ({ request, params }) => {
  const id = params.eventId;

  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not delete event.' }), { status: 500 });
  }

  return redirect('/events');;
};
