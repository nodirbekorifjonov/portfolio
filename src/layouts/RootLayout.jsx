import React from "react";

// react-router-dom
import { Outlet } from "react-router-dom";

// styles
import "./style.css";

// components
import Aside from "../components/Aside";

const RootLayout = () => {
  return (
    <div className="flex h-full">
      {/* Aside */}
      <Aside />
      {/* Main */}
      <main className="bg-[#f2f2fc]">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
