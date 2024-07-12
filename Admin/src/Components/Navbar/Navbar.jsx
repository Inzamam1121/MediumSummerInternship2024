import React from "react";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { FaRegEdit } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="d-flex">
      <div className="sidebar">
        <Link className="navbar-brand med" to="/">
          <b className="bungee-regular">Medium</b>
        </Link>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <CiHome />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notifications">
              <IoIosNotificationsOutline />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blogform">
              <FaRegEdit />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              <FiUsers />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
