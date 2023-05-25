import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Img1 from "../static/img/image (1).png";
import Img2 from "../static/img/image (2).png";

export default function Projet() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="container mt-5">
      <dov className="row">
        <div className="col-12">
        <div className="jumbotron jumbotron-fluid bg-dark rounded text-light p-5">
          <div className="container">
            <h1 className="display-4">Projets de Réseaux communautaires de l&rsquo;ORC</h1>
          </div>
        </div>
        </div>
      </dov>
      <div className="row">
        <p className="pt-2 pl-3 mt-3 text-about">
            L&rsquo;Observatoire des Réseaux Communautaires s&rsquo;engage aussi
            à travers des projets visant à mettre en
            place des réseaux Internet communautaires en milieu rural autour
             du service Internet de Starlink
            avec le soutien de nos partenaires locaux et internationaux.
            Ils seront déployés dans les
            communautés et les écoles des régions éloignées très
            peu/mal desservies par les opérateurs
            traditionnels.
        </p>
        <p className=" pl-3 mt-2 text-about">En plus de la connectivité à Internet d&rsquo;autres services sont offerts au niveau de ces réseaux : </p>
        <ol className="text-about">
            <li className=" pl-3"> - IoT/Laboratoires robotiques
            </li>
            <li className=" mt-3 pl-3"> - Formation IoT et programmation
            </li>
            <li className="mt-3 pl-3"> - Compétition inter-écoles IoT
            </li>
            <li className="mt-3 pl-3"> - Introduction à la cybersécurité et introduction à Linux
            </li>
            <li className="mt-3 pl-3"> - Programme de soutien en mathématiques
            </li>
            <li className="mt-3 pl-3"> - Concours de mathématiques
            </li>
            <li className="mt-3 pl-3"> - Observatoire des réseaux communautaires
                (vitrine des réseaux communautaires de cet
                initiative et d&rsquo;ailleurs)
            </li>
        </ol>
      </div>
      <div className="row">
        <div className="col-6">
        <h1 className="text-about">Projet</h1>
            <ul>
            <li className="mt-3 pl-3"> - Déploiement du réseau communautaire
                de Baudin au cœur de la Grande Colline qui est la
                5ème Section rurale de la commune de Grand Goâve,
                 dans le département de l&rsquo;Ouest.
            </li>
            </ul>
        <h1 className="text-about">Les projets futurs</h1>
            <ul>
                <li className="mt-3 pl-3"> - Les réseaux communautaires de Gros Mornes</li>
                <li className="mt-3 pl-3">- Les réseaux communautaires de Saint Marc</li>
            </ul>
        </div>
        <div className="col-12">
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Img1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Img2} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </button>
    </div>
        </div>
      </div>
      <Helmet>
        <title>Observatoire des Réseaux Communautaires | Particularité </title>
        <meta name="description" content="Actualités haitiennes sur les réseaux communautaires et l'accès à Internet universel" />
      </Helmet>
    </div>
  );
}
