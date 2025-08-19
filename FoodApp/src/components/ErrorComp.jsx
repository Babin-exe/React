import { useRouteError } from "react-router-dom";

const ErrorComp = () => {
  const err = useRouteError();
  return (
    <>
      <div>Oh noooooooooooooooo There is an Error !</div>
      <h1>Error code : {err.status}</h1>
      <br />
      <h1>Status Text : {err.statusText}</h1>
      <br />
      <h2>Cause : {err.data}</h2>
    </>
  );
};
export default ErrorComp;
