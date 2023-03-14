import { useRouteLoaderData, json, redirect } from "react-router-dom";

import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const loadedData = useRouteLoaderData("event-detail");

  return <EventItem event={loadedData.event} />;
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const id = params.eventID;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "cannot fetch detail data" },
      { status: 500, statusText: "Request URL invalid" }
    );
  } else {
    return response;
  }
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
