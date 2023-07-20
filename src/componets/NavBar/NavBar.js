import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="container" id="navbar">
      <div className="row">
        <div className="col-6">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
                  alt="tecno"
                  width={40}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to={"/category/celulares"}
                    >
                      Celulares
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/notebooks"}>
                      Notebooks
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"/category/auriculares"}>
                      Auriculares
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-6 d-flex justify-content-end  align-items-center">
          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
