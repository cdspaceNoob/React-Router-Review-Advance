import {
  useNavigate,
  useNavigation,
  useActionData,
  Form,
  json,
  redirect,
} from "react-router-dom";

import classes from "./EventForm.module.css";

const EventForm = ({ method, event }) => {
  const data = useActionData();

  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  const cancelHandler = () => {
    navigate("..");
  };

  // let eventTitle = "";
  // let eventImage = "";
  // let eventDate = "";
  // let eventDiscription = "";

  // if (event) {
  //   eventTitle = event.title ? event.title : "";
  //   eventImage = event.image ? event.image : "";
  //   eventDate = event.date ? event.date : "";
  //   eventDiscription = event.description ? event.description : "";
  // }

  return (
    <Form method={method} className={classes.form}>
      {data?.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          // defaultValue={eventTitle}
          defaultValue={event?.title ? event.title : null}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          // defaultValue={eventImage}
          defaultValue={event?.image ? event.image : null}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          // defaultValue={eventDate}
          defaultValue={event?.data ? event.date : null}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          // defaultValue={eventDiscription}
          defaultValue={event?.description ? event.description : null}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
};

export default EventForm;

export const action = async ({ request, params }) => {
  const method = request.method;
  const data = await request.formData();

  const enteredEventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    const eventID = params.eventID;
    url = "http://localhost:8080/events/" + eventID;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(enteredEventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json(
      { message: "could not save event" },
      { status: 500, statusText: "Client Request Error" }
    );
  }

  return redirect("/events");
};
