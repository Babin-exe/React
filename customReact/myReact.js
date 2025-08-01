//This is kind of basic implementation

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "This is a link that redirects to google ",
// };

//Lets make it a bit complex

const ReactElement = {
  type: "div",
  props: {
    id: "wrapper",
  },
  children: [
    {
      type: "h1",
      props: {},
      children: "Hello world from my mini react",
    },

    {
      type: "p",
      props: {},
      children: "This is a paragraph tag in my mini react",
    },
  ],
};

function renderDom(ReactElement, container) {
  const domElem = document.createElement(ReactElement.type);

  for (let prop in ReactElement.props) {
    domElem.setAttribute(prop, ReactElement.props[prop]);
  }

  if (typeof ReactElement.children === "string") {
    domElem.textContent = ReactElement.children;
  } else if (Array.isArray(ReactElement.children)) {
    ReactElement.children.forEach((child) => {
      renderDom(child, domElem);
    });
  }
  container.appendChild(domElem);
}

// function renderDom(ReactElement, container) {
//   //   const domElement = document.createElement(ReactElement.type);
//   //   domElement.innerHTML = ReactElement.children;
//   //   domElement.setAttribute("href", ReactElement.props.href);
//   //   domElement.setAttribute("target", ReactElement.props.target);
//   //   container.appendChild(domElement);

//   //THis way is better i guess
//   const domElement = document.createElement(ReactElement.type);
//   domElement.innerHTML = ReactElement.children;

//   for (let prop in ReactElement.props) {
//     if (prop === "children") continue;

//     domElement.setAttribute(prop, ReactElement.props[prop]);
//   }
//   container.appendChild(domElement);
// }

const container = document.getElementById("root");

renderDom(ReactElement, container);
