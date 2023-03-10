import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// layoutes
import Nav from "./layouts/Nav/Nav";
import Footer from "./layouts/Footer/Footer";

// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function RoutesPage() {
  return (
      <div className="container-fluid">
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

                  <Route exact path="*" element={<NotFound />} />
              </Routes>
              <Footer />
          </Router>
      </div>
  );
}

export default RoutesPage;
