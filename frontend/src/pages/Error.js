import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";

const Error = () => {
  const error = useRouteError();

  let title = "An error occured";
  let message = "Someting wrong with this";
  let statusText = "";

  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    // react-router-dom의 json 메서드를 사용함으로써 다음과 같이 간소화 된다.
    console.log(error);
    message = error.data.message;
    console.log(statusText);
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
