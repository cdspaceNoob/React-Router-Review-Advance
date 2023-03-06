import { NavLink } from "react-router-dom";

import classes from "./EventsNavigation.module.css";

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? classes.active : null)}
              end
            >
              All Events
            </NavLink>
            {/* <a href="/events">All Events</a> */}
          </li>
          <li>
            <NavLink
              to="/events/new"
              className={({ isActive }) => (isActive ? classes.active : null)}
            >
              New Event
            </NavLink>
            {/* <a href="/events/new">New Event</a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
