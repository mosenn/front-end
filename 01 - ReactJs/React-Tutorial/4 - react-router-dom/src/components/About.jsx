import React from "react";
import { Link, Outlet } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Back to Home Page</Link>
      <Outlet />
    </div>
  );
};
