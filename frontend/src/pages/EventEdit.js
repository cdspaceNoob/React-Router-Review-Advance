import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm"

const EventEditPage = () => {
  const loadedData = useRouteLoaderData("event-detail");

  return <EventForm event={loadedData.event} />
};

export default EventEditPage;
