import React from "react";
import { Helmet } from "react-helmet";

export default function Particularite() {
  return (
    <div className="container mt-5">
      <dov className="row">
        <div className="col-12">
        <div className="jumbotron jumbotron-fluid bg-dark rounded text-light p-5">
          <div className="container">
            <h1 className="display-4">Particularité</h1>
          </div>
        </div>
        </div>
      </dov>
      <div className="row">
        <p className="pt-2 pl-3 mt-3 text-about">
            Les réseaux communautaires et les solutions de connectivité
            communautaires peuvent jouer un rôle important pour répondre
            aux besoins communautés marginalisées comme les personnes âgées,
            les personnes handicapées, les personnes vivant en milieu rural etc.
        </p>
        <p className=" pl-3 mt-2 text-about">Les réseaux communautaires présentent des avantages comme : </p>
        <ol className="text-about">
            <li className=" pl-3">1. Contrôle local sur le fonctionnement du réseau et les types
                de contenu qui sont fournis sur le réseau.
                Cela peut permettre d&rsquo;utiliser
                le réseau de manière à répondre plus étroitement aux besoins des communautés,
                 à condition que les différents groupes soient représentés dans le design du réseau;
            </li>
            <li className=" mt-3 pl-3">2. Création d&rsquo;emplois locaux et encouragement de
                l&rsquo;esprit d&rsquo;entreprise,
                non seulement dans le cadre de la gestion du réseau,
                mais aussi par l&rsquo;utilisation
                 de la connectivité des entreprises locales
            </li>
            <li className="mt-3 pl-3">3. Rétention de fonds au sein de la communauté résultant des faibles coûts
                d&rsquo;utilisation mais aussi des revenus générés par les résidents travaillant
                dans la gestion du réseau;
            </li>
            <li className="mt-3 pl-3">4. Promotion d&rsquo;un sentiment de responsabilité
                au sein de la communauté qui renforce leur sentiment de capacité à contribuer
                à l&rsquo;amélioration de la qualité de vie de ses membres.
                Cela peut également encourager d&rsquo;autres types d&rsquo;efforts de collaboration
                pour améliorer les moyens de subsistance locaux.
            </li>
        </ol>
      </div>
      <Helmet>
        <title>Observatoire des Réseaux Communautaires | Actualités </title>
        <meta name="description" content="Actualités haitiennes sur les réseaux communautaires et l'accès à Internet universel" />
      </Helmet>
    </div>
  );
}
