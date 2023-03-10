/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Network from "../static/img/network.png";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="jumbotron">
      <div className="container">
      <h1 className="display-4"> Observatoire des Réseaux Communautaires</h1>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
      </div>
      </div>
      <div className="row conainer-fluid">
        <div className="col-6">
          <h1 className="titre mb-3 mt-3">C’est quoi un Réseau Communautaire!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p className="lead">Preparing a new generation to succeed as leaders in Internet technology,
            policy, and business is one of the Internet Society’s key objectives.
            To be successful, the next generation of Internet
             leaders will need a wide range of skills in a variety of disciplines
              – as well as the ability and experience to work with people at all
              levels of society.
          </p>

          <h1 className="titre mb-3">C’est quoi un Réseau Communautaire!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p className="lead">Preparing a new generation to succeed as leaders in Internet technology,
            policy, and business is one of the Internet Society’s key objectives.
            To be successful, the next generation of Internet
             leaders will need a wide range of skills in a variety of disciplines
              – as well as the ability and experience to work with people at all
              levels of society.
          </p>

          <h1 className="titre mb-3">C’est quoi un Réseau Communautaire!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p className="lead">Preparing a new generation to succeed as leaders in Internet technology,
            policy, and business is one of the Internet Society’s key objectives.
            To be successful, the next generation of Internet
             leaders will need a wide range of skills in a variety of disciplines
              – as well as the ability and experience to work with people at all
              levels of society.
          </p>
        </div>
        <div className="col-6">
          <img src={Network} alt="" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
}
