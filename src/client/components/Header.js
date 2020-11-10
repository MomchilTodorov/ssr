//this is a component, there isn't any loading data requirements to it
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" class="navbar-brand">
        React SSR
      </Link>
      <div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/movies" class="nav-link">
              Movies
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/tvshows" class="nav-link">
              TV Shows
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
