/* eslint-disable import/no-unresolved */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// layoutes
import Nav from "./layouts/Nav/Nav";
import Footer from "./layouts/Footer/Footer";

// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Lookup from "./pages/Lookup";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Regulation from "./pages/Regulation";
import Particularite from "./pages/Particularite";
import Gouvernance from "./pages/Gouvernance";
import Projet from "./pages/projet";

function RoutesPage() {
  return (
      <div className="container-fluid p-0">
          <Router>
              <Nav />
              <Routes>
                  {/**
                  * protected route
                  *
                  <Route exact path="/user/cart" element={<PrivateRoute />}>
                      <Route exact path="/user/cart" element={<Cart />} />
                  </Route>
                  */}

                  <Route path="/" element={<Home />} />
                  <Route path="/Regulation" element={<Regulation />} />
                  <Route path="/projet" element={<Projet />} />
                  <Route path="/Particularite" element={<Particularite />} />
                  <Route path="/gouvernance" element={<Gouvernance />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/community/news" element={<News />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/lookup/community" element={<Lookup />} />
                  <Route path="/lookup/community/node/:communityId" element={<Community />} />

                  <Route exact path="*" element={<NotFound />} />
              </Routes>
              <Footer />
          </Router>
      </div>
  );
}

export default RoutesPage;
