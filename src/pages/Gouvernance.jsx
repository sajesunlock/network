import React from "react";
import { Helmet } from "react-helmet";

export default function Gouvernance() {
  return (
    <div className="container mt-5">
      <dov className="row">
        <div className="col-12">
        <div className="jumbotron jumbotron-fluid bg-dark rounded text-light p-5">
          <div className="container">
            <h1 className="display-4">Promoteurs et Gouvernance</h1>
          </div>
        </div>
        </div>
      </dov>
      <div className="row">
        <p className="pt-2 pl-3 mt-3 text-about">
        Les réseaux communautaires sont des réseaux décentralisés
        qui exploitent le potentiel des technologies de communication
        à faible coût pour soutenir des infrastructures de communication abordables,
        détenues et gérées localement. Plutôt que d&apos;être centrés
        sur l&apos;entreprise privée, ils sont gérés par les membres des communautés
        locales qui se chargent du déploiement, de la gouvernance et de toute
        la maintenance des infrastructures de communication. Ils fournissent généralement
        des réseaux publics à petite échelle basés sur le Wi-Fi, ou parfois des services
        mobiles cellulaires ou des connexions par fibre optique.
        </p>
        <p className="pt-2 pl-3  text-about">
        Le nombre de réseaux communautaires dans le monde est encore relativement faible,
        principalement en raison d&apos;une connaissance limitée de ces nouveaux
        types d&apos;infrastructures de communication, mais aussi en raison des obstacles
        réglementaires et des contraintes de capacité humaine qui existent
        dans de nombreux pays, en particulier dans l&apos;hémisphère sud.
        Plusieurs institutions régionales et internationales
        comme Internet Society Foundation, LACNIC se misent sur cette solution pour
         les besoins de connectivité dans les pays en développement.
        </p>
      </div>

      <Helmet>
        <title>Observatoire des Réseaux Communautaires | Gouvernance </title>
        <meta name="description" content="Actualités haitiennes sur les réseaux communautaires et l'accès à Internet universel" />
      </Helmet>
    </div>
  );
}
