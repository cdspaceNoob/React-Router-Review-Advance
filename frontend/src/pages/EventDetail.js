import { Fragment } from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1> Event Detail Page. </h1>
      <h4> The ID of this Event is ... {params.eventID}</h4>
    </Fragment>
  );
};

export default EventDetailPage;
