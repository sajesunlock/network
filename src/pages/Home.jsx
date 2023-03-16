/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

import Network from "../static/img/network.png";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-12 p-0">
      <div className="jumbotron">
      <div className="container">
      <h1 className="display-4"> Observatoire des Réseaux Communautaires</h1>
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/about" role="button">Learn more</Link>1
      </p>
      </div>
      </div>
        <div className="row m-0 p-0">
        <div className="col-md-6 col-12">
          <h1 className="titre mb-3 mt-3">C’est quoi un Réseau Communautaire!</h1>
          <p className="lead">
          Les réseaux communautaires se réfèrent aux infrastructures de télécommunications
           déployées et exploitées par un groupe local pour répondre à ses propres besoins
           de communication[1]. Ils sont le résultat de personnes travaillant ensemble,
            combinant leurs ressources, unissant leurs efforts et se rapprochant
             pour combler l’absence
             ou les lacunes de connectivité.
          </p>
          <p className="lead">
            Le mode de gestion et les conditions d’accès sont entièrement autonome et peuvent être
             définis à leur guise selon les ressources
             et partenariats dont ils disposent.
          </p>
          <p className="lead">
            Concrètement, les réseaux communautaires peuvent, en général,
            couvrir divers besoins comme l’accès au réseau de télécommunication,
            l’accès à Internet ou peuvent être une radio et/ou télévision locale ou autre.
          </p>
          <p className="lead">
            En ce qui concerne les réseaux communautaire sans fil avec Internet,
            en dehors de l’accès aux ressources et services de la toile qui sont
            entre autres l’accès au commerce électronique et aux services de télé-santé,
            l’apprentissage à distance, l’engagement social et politique,
            les services gouvernementaux et l’information sur la sécurité publique,
            les réseaux communautaires favorisent fondamentalement la connectivité aux populations
            exclues du fait de leur zones géographique, du pouvoir économique ou d’absence
            d’infrastructures de télécommunication.
          </p>
          <p className="lead">
          Ces réseaux rendent l’Internet disponible à la communauté cible grâce aux câbles,
           à la fibre optique ou au WIFI (IEEE 802.11). C’est un réseau conçu par la communauté
           et pour la communauté.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img src={Network} alt="" width="100%" height="100%" />
        </div>
        <div className="col-12 col-md-6">
          <img src="https://afcomnet.afroleadership.org/wp-content/uploads/2022/11/Picture-883x500.png" alt="" width="100%" height="100%" />
        </div>
        <div className="col-md-6 col-12">
        <h1 className="titre mb-3 mt-3">Intérêt des réseaux communautaires sans fil </h1>
          <p className="lead">
          Internet fait du monde un endroit plus agréable à vivre 2 où Il crée
            ou facilite le développement économique,
           soutient les petites et moyennes entreprises (PME) et
           crée des opportunités économiques plus larges pour tous.
          </p>
          <p className="lead">
            L’accès à Internet est un droit fondamental de l’homme reconnu par les Nations-Unies
            depuis 2012 et aussi par certains pays comme la France. Pourtant, près de la moitié
           de la population mondiale est encore déconnectée en 2020.
          </p>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}
