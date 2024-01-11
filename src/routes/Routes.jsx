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

const Routes = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    )
  );

  return <RouterProvider router={routes} />;
};

export default Routes;
