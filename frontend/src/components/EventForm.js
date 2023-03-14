import { useNavigate, useNavigation, Form } from "react-router-dom";

import classes from "./EventForm.module.css";

const EventForm = ({ method, event }) => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  const cancelHandler = () => {
    navigate("..");
  };

  let eventTitle = "";
  let eventImage = "";
  let eventDate = "";
  let eventDiscription = "";

  if (event) {
    eventTitle = event.title ? event.title : "";
    eventImage = event.image ? event.image : "";
    eventDate = event.date ? event.date : "";
    eventDiscription = event.description ? event.description : "";
  }

  return (
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={eventTitle}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={eventImage}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={eventDate}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={eventDiscription}
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
