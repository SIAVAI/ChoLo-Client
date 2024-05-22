import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root";
import Error from "./Components/Error/Error";
import Login from "./Components/Auth/Login";
import Reg from "./Components/Auth/Reg";
import AllT from "./Components/AllT";
import AddT from "./Components/AddT";
import My from "./Components/My";
import Home from "./Components/Mini Components/Home";
import ViewDetails from "./Components/ViewDetails";
import FirebaseProvider from "./Components/Auth/FirebaseProvider";
import CountryDetails from "./Components/Mini Components/CountryDetails";
import Private from "./Components/Private";
import Update from "./Components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        errorElement: <Error></Error>,
        loader: () => fetch("https://cholo-server.vercel.app/allTouristSpots"),
      },
      {
        path: "/login",
        element: <Login></Login>,
        errorElement: <Error></Error>,
      },
      {
        path: "/register",
        element: <Reg></Reg>,
        errorElement: <Error></Error>,
      },
      {
        path: "/allTourist",
        element: <AllT></AllT>,
        errorElement: <Error></Error>,
        loader: () => fetch("https://cholo-server.vercel.app/allTouristSpots"),
      },
      {
        path: "/allTourist/:id",
        element: (
          <Private>
            <ViewDetails></ViewDetails>
          </Private>
        ),
        errorElement: <Error></Error>,
        loader: ({ params }) =>
          fetch(`https://cholo-server.vercel.app/allTouristSpots/${params.id}`),
      },
      {
        path: "/addTourist",
        element: (
          <Private>
            <AddT></AddT>
          </Private>
        ),
        errorElement: <Error></Error>,
      },
      {
        path: "/myList",
        element: <My></My>,
        errorElement: <Error></Error>,
      },
      {
        path: "/countrySectionDetails",
        element: <CountryDetails></CountryDetails>,
        loader: () => fetch("https://cholo-server.vercel.app/allTouristSpots"),
        errorElement: <Error></Error>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://cholo-server.vercel.app/allTouristSpots/${params.id}`),
        errorElement: <Error></Error>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
