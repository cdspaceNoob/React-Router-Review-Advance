import { useLoaderData, json } from "react-router-dom";

import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const loadedData = useLoaderData();

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
