import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg border-bottom fixed-top">
        <div class="container p-2">
          <Link class="navbar-brand" to="/"><img src="/media/images/logo.svg" style={{width:"25%"}}/></Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/product">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item" >
                <Link class="nav-link "  to="/support">
                  Support
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link "  to="#">
                <i class="fa-solid fa-bars" style={{color:"gray"}}></i>
                </Link>
              </li>
            </ul>
            </div>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
