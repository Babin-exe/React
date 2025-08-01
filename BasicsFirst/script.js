const heading = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", {}, "This is a children lol"),
    React.createElement("h2", {}, "This is a children lol"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
{
  //lets say i want this structure how would i do that using react :)
  /* <div id="parent">˝
<div id="children">
<h1> This is a children lol>/h1>
<h2> This is a children lol (obviously)>/h1>
</div>
</div> */
}
