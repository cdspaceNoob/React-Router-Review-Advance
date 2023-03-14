import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "could not fetch data" };
    // throw new Response(JSON.stringify({ message: "could not fetch data" }), {
    //   status: 500,
    //   statusText: "Client Request Error",
    // });
    throw json(
      { message: "could not fetch data" },
      { status: 500, statusText: "From Events" }
    );
  } else {
    const resultData = await response.json();
    return resultData.events;
  }
};

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
