import { Fragment } from "react";

import { NavLink } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", name: "Event01" },
  { id: "e2", name: "Event02" },
  { id: "e3", name: "Event03" },
];

const EventPage = () => {
  return (
    <Fragment>
      <h1> Event Page. </h1>
      {DUMMY_EVENTS.map((event) => (
        <li key={event.id}>
          <NavLink to={event.id}>{event.name}</NavLink>
        </li>
      ))}
    </Fragment>
  );
};

export default EventPage;
