import React from "react";

// react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Layouts
import RootLayout from "../layouts/RootLayout";

// Pages
import Home from "../pages/Home";
import About from "../components/About";
import Service from "../components/Service";
import Application from "../components/Application";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

const Routes = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="applications" element={<Application />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
};

export default Routes;
