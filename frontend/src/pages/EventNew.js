import { Fragment } from "react";

import EventForm from "../components/EventForm";

const EventNewPage = () => {
  return (
    <Fragment>
      <h1> new event page</h1>
      <EventForm method="post" />
    </Fragment>
  );
};

export default EventNewPage;


