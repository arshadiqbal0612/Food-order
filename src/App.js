import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Body from "./Components/Body";
import ResturantMenu from "./Components/ResturantMenu";
import Profile from "./Components/Profileclass";
import Shimmer from "./Components/Shimmer";

// import Instamart from "./Components/Instamart";
//  lazy loading
// on dynamic loading
// dynamic import
// chunking
// code spiltting
const Instamart =lazy(()=>{
  return import("./Components/Instamart")
});

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <Error /> },
      { path: "/menu/:id", element: <ResturantMenu /> },
      { path: "/instamart", element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
