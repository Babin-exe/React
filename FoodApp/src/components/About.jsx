import User from "./User.jsx";
import { UserClass } from "./User.jsx";
const AboutComp = () => {
  return (
    <>
      <div>
        <h1>This is our About us page </h1>
        <User name={"AuhNsk(function)"} Location={"Kathmandu(function)"} />
        <UserClass name={"AuhNsk(Class)"} Location={"Kathmandu(Class)"} />
      </div>
    </>
  );
};

export default AboutComp;
