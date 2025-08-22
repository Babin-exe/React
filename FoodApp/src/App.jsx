import React, { lazy, Suspense } from "react";
import "./index.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutComp from "./components/About.jsx";
import ContactUs from "./components/ContactUs.jsx";
import ErrorComp from "./components/ErrorComp.jsx";
import FetchMenu from "./components/RestaurantMenu.jsx";


const Grocery = lazy(() => import("./components/Grocery.jsx"));

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutComp />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },

      {
        path: "/restaurants/:resId",
        element: <FetchMenu />,
      },

      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],

    errorElement: <ErrorComp />,
  },
]);

const giver = () => {
  return <RouterProvider router={appRouter} />;
};

export default giver;
