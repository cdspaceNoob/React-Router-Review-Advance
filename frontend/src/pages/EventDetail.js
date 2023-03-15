import { Fragment, Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { loadEvents } from "../pages/Events";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <Fragment>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={event}>
          {(singleEvent) => <EventItem event={singleEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(events) => <EventsList events={events} />}
        </Await>
      </Suspense>
    </Fragment>
  );
};

export default EventDetailPage;

const loadEvent = async (id) => {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "cannot fetch detail data" },
      { status: 500, statusText: "Request URL invalid" }
    );
  } else {
    const resultData = await response.json();
    return resultData.event;
  }
};

export const loader = async ({ request, params }) => {
  const id = params.eventID;

  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
};

export const action = async ({ request, params }) => {
  const eventID = params.eventID;
  const response = await fetch("http://localhost:8080/events/" + eventID, {
    method: request.method,
  });

  if (!response.ok) {
    json(
      { message: "could not delete event" },
      { status: 500, statusText: "Client Request Error" }
    );
  }

  return redirect("/events");
};
