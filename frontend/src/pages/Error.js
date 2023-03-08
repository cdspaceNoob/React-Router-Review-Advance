import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";

const Error = () => {
  const error = useRouteError();

  let title = "An error occured";
  let message = "Someting wrong with this";
  let statusText = "";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
    statusText = error.statusText;
  }

  if (error.status === 404) {
    title = "Not Found";
    message = "Could not found resource";
    statusText = error.statusText;
    console.log(statusText);
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
      <p>{statusText}</p>
    </PageContent>
  );
};

export default Error;
