/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

import "./nav.css";

function Navbar() {
  const { t, i18n } = useTranslation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navBg">
            <div className="container">
            <a className="navbar-brand" href="#">
                <img src="https://cdn-icons-png.flaticon.com/512/4350/4350908.png" width="60" height="60" className="d-inline-block align-top p-2 text-light" alt="" />
                ONC
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxHeight: 100 }}>
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Link
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                    <li className="nav-item">
                      <a className="nav-link disabled">Link</a>
                    </li>
              </ul>
            <form className="d-flex">
              <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
            </div>
        </nav>
    );
}
export default Navbar;
