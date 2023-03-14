import { Fragment } from "react";
import { json, redirect } from "react-router-dom";

import EventForm from "../components/EventForm";

const EventNewPage = () => {
  return (
    <Fragment>
      <h1> new event page</h1>
      <EventForm />
    </Fragment>
  );
};

export default EventNewPage;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const enteredEventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(enteredEventData),
  });

  if (!response.ok) {
    throw json(
      { message: "could not save event" },
      { status: 500, statusText: "Client Request Error" }
    );
  }

  return redirect("/events");
};
