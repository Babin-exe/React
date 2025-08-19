import { useState } from "react";

const User = (props) => {
  const { name, Location } = props;

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1);

  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : {Location}</h3>
      <h2>Contact : @aaaauuhh</h2>
    </div>
  );
};
export default User;

//This is what the class based component looks like
import React from "react";
export class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Info: {
        name: "default",
        followers: "none",
      },
    };

    console.log("This is the constructor");
  }
  async componentDidMount() {
    console.log("This shold come at last i guess because this is mount");

    const data = await fetch("https://api.github.com/users/Babin-exe");
    const json = await data.json();
    console.log(json);

    this.setState({
      Info: json,
    });
  }

  render() {
    // console.log("Here runs the render method");

    return (
      <div className="user-card">
        <img src={this.state.Info.avatar_url} alt="" />
        <h2>Name : {this.state.Info.name}</h2>
        <h3>Followers : {this.state.Info.followers}</h3>
        <h2>Contact : @aaaauuhh</h2>
      </div>
    );
  }
}
