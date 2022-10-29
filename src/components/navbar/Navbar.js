import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="sticky-top">
      <div className="navbar">
        <div className="container">
          <a href="#" className="navbar-brand fs-3 text-light">
            /zero
          </a>
          <form
            className="d-flex w-50 position-relative d-none d-md-block"
            role="search"
          >
            <input
              className="form-control me-2 border-primary rounded-pill"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn text-primary position-absolute last"
              type="submit"
            >
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </form>
          <div className>
            <button
              className="btn btn-outline-primary rounded-pill px-3 mx-lg-3 d-none d-md-inline-block"
              data-bs-toggle="modal"
              data-bs-target="#sign_in"
            >
              sign in
            </button>
            <button
              className="btn btn-outline-primary rounded-pill px-3 mx-lg-3 d-none d-md-inline-block"
              data-bs-toggle="modal"
              data-bs-target="#sign_up"
            >
              sign up
            </button>
          </div>
          <div className>
            <button
              className="btn btn-outline-primary border border-1 d-sm-none"
              data-bs-toggle="modal"
              data-bs-target="#sign_in"
            >
              <i className="fa-solid fa-right-to-bracket" />
            </button>
            <button className="btn btn-outline-primary border border-1 d-sm-none">
              <i
                className="fa-solid fa-user-plus"
                data-bs-toggle="modal"
                data-bs-target="#sign_up"
              />
            </button>
            <button
              className="btn btn-outline-primary d-sm-none border border-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars" />
            </button>
          </div>
        </div>
        <div className="background w-100">
          <div className="container">
            <div
              className="navbar-expand-md w-100 d-md-block bg"
              id="navbarNav"
            >
              <ul className="navbar-nav justify-content-evenly">
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    Antiques
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-primary"
                    href="/product category.html"
                  >
                    PC &amp; Laptop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    Mobile &amp; Tablet
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    Console games
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    Cameras
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-primary" href="#">
                    Home Appliances
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
