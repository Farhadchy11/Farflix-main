import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faHouse,
  faSquareCheck,
  } from "@fortawesome/free-solid-svg-icons";

  const Sidebar = () =>  {
  return (
    <div className="sidebar">
      <div className="sidebarRow">
        <Link className="reactRouterDomLink" to="/">
          <FontAwesomeIcon className="sidebarRow_icon" icon={faHouse} />
          <h2 className="sidebarRow_title">Home</h2>
        </Link>
      </div>

      <div className="sidebarRow">
        <Link className="reactRouterDomLink" to="/Movies">
          <FontAwesomeIcon className="sidebarRow_icon" icon={faBolt} />
          <h2 className="sidebarRow_title">Movies</h2>
        </Link>
      </div>

      <div className="sidebarRow">
        <Link className="reactRouterDomLink" to="/Blogs">
          <FontAwesomeIcon className="sidebarRow_icon" icon={faSquareCheck} />
          <h2 className="sidebarRow_title">Blogs</h2>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;