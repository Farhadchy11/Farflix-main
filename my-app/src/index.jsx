import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./components/Movies/Movies.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import App from "./App.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Movies",
    element: <Movies />,
  },
  {
    path: "/Blogs",
    element: <Blogs />,
  },
 
  {
    path: "/login",
    element: <Login />,
  },
 
  {
    path: "/Signup",
    element: <Signup />,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

