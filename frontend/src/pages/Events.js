import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const loadedData = useLoaderData();

  return <EventsList events={loadedData} />;
};

export default EventsPage;
