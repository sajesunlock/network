import React from "react";
import { Helmet } from "react-helmet";

export default function Regulation() {
  return (
    <div className="container mt-5">
      <dov className="row">
        <div className="col-12">
        <div className="jumbotron jumbotron-fluid bg-dark rounded text-light p-5">
          <div className="container">
            <h1 className="display-4">Régulation</h1>
          </div>
        </div>
        </div>
      </dov>
      <div className="row">
        <p className="pt-2 pl-3 mt-3 text-about">
            Si la création de réseaux communautaires présente de nombreux avantages potentiels,
            la principale restriction au développement de ces réseaux est l&lsquo;absence d&lsquo;un
            environnement réglementaire favorable. Quelques pays ont adopté
            un cadre en matière de licences qui prévoit des dispositions
              les opérateurs communautaires,
            comme l&lsquo;Argentine, le Brésil et l&lsquo;Ouganda. Cependant en général,
            les droits de licence et les exigences liées aux déclarations des licences sont trop
            onéreux pour les petits réseaux. Toutefois,
            les organismes de régulation des télécommunications
            au niveau national peuvent être ouverts à l&lsquo;adoption d&lsquo;une telle approche,
            si les conditions nécessaires à sa mise en œuvre sont réunies.
        </p>
        <p className="pt-2 pl-3  text-about">
            En plus des défis liés à l&lsquo;accès des régions éloignées,
            il existe de nombreux obstacles au déploiement de réseaux communautaires comme :
        </p>
        <ul>
            <li className=" mt-3 pl-5 text-about"><b>.</b> Enregistrement / octroi de licences et de permis </li>
            <li className=" mt-3 pl-5 text-about"><b>.</b> Taxes, réglementions pour l&lsquo;obtention de permis
                et frais d`&lsquo;importation
            </li>
            <li className=" mt-3 pl-5 text-about"><b>.</b> Financement </li>
            <li className=" mt-3 pl-5 text-about"><b>.</b> Accès au spectre - pénurie, utilisation inefficace et dépenses</li>
        </ul>
        <p className="pt-2 pl-3  text-about">
        Les gouvernements peuvent atténuer ou éliminer
        les obstacles par l&lsquo;assouplissement des exigences réglementaires
        l&lsquo;exemptions des taxes et des frais, la transparence améliorée et
        l&lsquo;élargissement du service universel et d`&lsquo;autres possibilités de financement.
        </p>
      </div>
      <Helmet>
        <title>Observatoire des Réseaux Communautaires | Actualités </title>
        <meta name="description" content="Actualités haitiennes sur les réseaux communautaires et l'accès à Internet universel" />
      </Helmet>
    </div>
  );
}
