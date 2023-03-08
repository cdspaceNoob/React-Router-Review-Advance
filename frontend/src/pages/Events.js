import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const loadedData = useLoaderData();
  const data = loadedData.events;

  // if (loadedData.isError) {
  //   return <p>{loadedData.message}</p>;
  // }

  return <EventsList events={data} />;
};

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "could not fetch data" };
    throw new Response(JSON.stringify({ message: "could not fetch data" }), {
      status: 500,
      statusText: "Client Request Error",
    });
  } else {
    return response;
  }
};
