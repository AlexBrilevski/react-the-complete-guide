export async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), { status: 500 });
  } else {
    const respData = await response.json();
    return respData.events;
  }
}
