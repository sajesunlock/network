/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

import { auth } from "../../firebase/firebaseConfig";

import "./nav.css";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isLogging, setisLogging] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          // const uid = user.uid;
          setisLogging(true);
          // ...
          // console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out");
        }
    });
}, []);

const handleLogout = () => {
  signOut(auth).then(() => {
  // Sign-out successful.
      // navigate("/lookup/community");
      window.location.reload();
      console.log("Signed out successfully");
  }).catch((error) => {
  // An error happened.
  });
};

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navBg">
            <div className="container">
            <Link className="navbar-brand" to="/">
                <img src="https://cdn-icons-png.flaticon.com/512/4350/4350908.png" width="60" height="60" className="d-inline-block align-top mr-1 p-1 bg-light rounded-circle" alt="" />
                ORC
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{ maxHeight: 100 }}>
                <li className="nav-item active">
                  <Link className="nav-link" to="/about">A propos de nous <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <Link to="/lookup/community" className="nav-link" href="#">Où nous trouver</Link>
                </li>

                <li className="nav-item active">
                  <Link to="/contact" className="nav-link ">Contactez nous</Link>
                </li>
                {/**
                <li className="nav-item dropdown">
                  <a
                  className="nav-link dropdown-toggle"
                  href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Link
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                */}
              </ul>

              <div className="col-md-1 col-2 nav-icon m-0 pr-0 pl-2 dropdown bg-light rounded">
                <i className="fa fa-2x fa-language " aria-hidden="true" />
                <div className="dropdown-content">
                  <div className={i18n.language === "fr" ? "pt-3 pl-2 pb-3 btn-primary" : "pt-3 pb-3 pl-2"} style={{ cursor: "pointer" }} onClick={() => i18n.changeLanguage("fr")}>Fr</div>
                  <hr className="m-0" />
                  <div className={i18n.language === "en" ? "pt-3 pb-3 pl-2 btn-primary" : "pt-3 pb-3 pl-2"} style={{ cursor: "pointer" }} onClick={() => i18n.changeLanguage("en")}>Eng</div>
                </div>
              </div>
              {isLogging ?
              <i onClick={handleLogout} className="fa fa-1x ml-3 bg-light rounded p-2 fa-sign-out" aria-hidden="true" />
                : "" }
            </div>
            </div>
        </nav>
    );
}
export default Navbar;
