import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const loadedData = useLoaderData();

  return <EventsList events={loadedData} />;
};

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // error.
  } else {
    // 가져오는 객체는 events라는 프로퍼티를 가지고 있으며 value는 배열이다. 즉, JSON 형식이다.
    const resData = await response.json();
    return resData.events;
  }
};
