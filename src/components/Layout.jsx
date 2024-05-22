import React from "react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = ({
  username,
  setUsername,
}) => {
  return (
    <div>
      <Navbar
        username={username}
        setUsername={setUsername}
      />

      <Outlet />

      <footer><p>Copyright®️ Mustafa Çakırca</p></footer> 
    </div>
  );
};
