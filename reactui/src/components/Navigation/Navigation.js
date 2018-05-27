import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

export default function Navigation(props) {
  return (
    <ul className="Navigation">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
}
